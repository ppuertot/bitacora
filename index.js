
const logger = require('./logger');

logger.info('Servidor iniciado en el puerto 8080');
logger.warn('Uso de disco al 85%');
logger.error('No se pudo conectar a la base de datos', { transactionId: 'xyz-abc' });
