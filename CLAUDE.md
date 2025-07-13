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
  - Adds console transport in non-production environments
  - Sets default metadata with service name "user-service"

- `src/index.ts`: Demo script that imports the logger and generates sample log messages
  - Demonstrates info, warn, and error logging levels
  - Shows structured logging with additional metadata (transactionId)

- `src/connection.ts`: PostgreSQL connection module that exports a configured pool instance

### Key Dependencies
- **winston**: Primary logging library (v3.17.0)
- **typescript**: TypeScript compiler and language support
- **ts-node**: TypeScript execution environment for Node.js
- **@types/node**, **@types/pg**: Type definitions for Node.js and PostgreSQL

### Log Output
- `combined.log`: Contains all log messages in JSON format
- `error.log`: Contains only error-level messages
- Console output when NODE_ENV !== 'production'