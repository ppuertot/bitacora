-- Initialize database schema for Winston logs
CREATE TABLE IF NOT EXISTS winston_logs (
    id SERIAL PRIMARY KEY,
    level VARCHAR(10) NOT NULL,
    message TEXT NOT NULL,
    meta JSONB,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);