
const winston = require('winston');
const Transport = require('winston-transport');
const { pool } = require('./connection');

// Custom PostgreSQL Transport
class PostgreSQLTransport extends Transport {
  constructor(options) {
    super(options);
    this.name = 'postgresql';
    this.level = options.level || 'info';
    this.connectionString = options.connectionString;
    this.tableName = options.tableName || 'winston_logs';
  }

  log(info, callback) {
    setImmediate(() => {
      this.emit('logged', info);
    });
    // Save log to PostgreSQL
    pool.query(
      `INSERT INTO ${this.tableName} (level, message, meta) VALUES ($1, $2, $3)`,
      [info.level, info.message, JSON.stringify(info)],
      (err) => {
        if (err) {
          console.error('Error saving log to PostgreSQL:', err);
        }
      }
    );
    // Call the callback to indicate that the log has been processed
    callback();
  }
}

const transports = [
  //
  // - Write all logs with importance level of `error` or less to `error.log`
  // - Write all logs with importance level of `info` or less to `combined.log`
  //
  new winston.transports.File({ filename: 'error.log', level: 'error' }),
  new winston.transports.File({ filename: 'combined.log' }),
];

transports.push(new PostgreSQLTransport({
  tableName: 'winston_logs',
  level: 'info'
}));

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: transports,
});

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple(),
  }));
}

module.exports = logger;
