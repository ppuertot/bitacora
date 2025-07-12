# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a simple Node.js logging demonstration project ("bitácora" means logbook in Spanish) that showcases structured logging using the Winston library. The project consists of just two main JavaScript files with a focused architecture.

## Commands

- **Install dependencies:** `npm install`
- **Run the demo:** `node index.js`

## Code Architecture

### Core Structure
- `logger.js`: Winston logger configuration module that exports a configured logger instance
  - Uses JSON format for structured logging
  - Configures file transports for `error.log` (errors only) and `combined.log` (all levels)
  - Adds console transport in non-production environments
  - Sets default metadata with service name "user-service"

- `index.js`: Demo script that imports the logger and generates sample log messages
  - Demonstrates info, warn, and error logging levels
  - Shows structured logging with additional metadata (transactionId)

### Key Dependencies
- **winston**: Primary logging library (v3.17.0)

### Log Output
- `combined.log`: Contains all log messages in JSON format
- `error.log`: Contains only error-level messages
- Console output when NODE_ENV !== 'production'