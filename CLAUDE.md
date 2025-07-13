# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a simple Node.js logging demonstration project ("bitácora" means logbook in Spanish) that showcases structured logging using the Winston library. The project has been converted to TypeScript with source files in the `src/` directory.

## Commands

- **Install dependencies:** `npm install`
- **Build TypeScript:** `npm run build`
- **Run the demo (TypeScript):** `npm run dev`
- **Run the demo (compiled JS):** `npm start`

## Code Architecture

### Core Structure
- `src/logger.ts`: Winston logger configuration module that exports a configured logger instance
  - Uses JSON format for structured logging
  - Configures file transports for `error.log` (errors only) and `combined.log` (all levels)
  - Includes custom PostgreSQL transport for database logging
  - Adds console transport in non-production environments
  - Sets default metadata with service name "user-service"
  - **PostgreSQLTransport class**: Custom transport extending winston-transport
    - Properly typed with TypeScript interfaces (PostgreSQLTransportOptions)
    - Stores logs in PostgreSQL table with level, message, and metadata
    - Uses connection pool from `src/connection.ts`

- `src/index.ts`: Demo script that imports the logger and generates sample log messages
  - Demonstrates info, warn, and error logging levels
  - Shows structured logging with additional metadata (transactionId)

- `src/connection.ts`: PostgreSQL connection module that exports a configured pool instance
  - Uses pg library for PostgreSQL connectivity
  - Exports typed pool instance for use by custom transport

### Key Dependencies
- **winston**: Primary logging library (v3.17.0)
- **winston-transport**: Base transport class for custom transports
- **pg**: PostgreSQL client library (v8.16.3)
- **typescript**: TypeScript compiler and language support (v5.8.3)
- **ts-node**: TypeScript execution environment for Node.js (v10.9.2)
- **@types/node**, **@types/pg**: Type definitions for Node.js and PostgreSQL

### Log Output
- `combined.log`: Contains all log messages in JSON format
- `error.log`: Contains only error-level messages
- PostgreSQL database: Logs stored in `winston_logs` table with structured data
- Console output when NODE_ENV !== 'production'

### Database Schema
The PostgreSQL transport expects a table named `winston_logs` with the following structure:
```sql
CREATE TABLE winston_logs (
    id SERIAL PRIMARY KEY,
    level VARCHAR(10) NOT NULL,
    message TEXT NOT NULL,
    meta JSONB,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```