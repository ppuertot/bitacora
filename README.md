# Proyecto de Bitácora (Logging) en Node.js

Este es un proyecto de demostración que implementa un sistema de bitácoras (logging) estructurado en Node.js utilizando la librería Winston. El proyecto ha sido convertido a TypeScript con archivos fuente en el directorio `src/`.

## Características

*   **Logging Estructurado:** Los logs se generan en formato JSON.
*   **Niveles de Severidad:** Utiliza los niveles `info`, `warn`, y `error`.
*   **Múltiples Transportes:** Los logs se envían a la consola, archivos y PostgreSQL.
    *   `combined.log`: Contiene todos los registros.
    *   `error.log`: Contiene únicamente los registros de error.
    *   PostgreSQL: Transporte personalizado para almacenar logs en base de datos.
*   **TypeScript:** Proyecto completamente tipado para mejor mantenimiento y desarrollo.

## Requisitos

*   Node.js (v14 o superior)
*   npm (o cualquier otro gestor de paquetes de Node.js)
*   PostgreSQL (opcional, para el transporte de base de datos)

## Instalación

Para instalar las dependencias del proyecto:

```bash
npm install
```

## Comandos Disponibles

### Desarrollo
```bash
# Compilar TypeScript
npm run build

# Ejecutar en modo desarrollo (TypeScript)
npm run dev

# Ejecutar desde archivos compilados
npm start
```

### Producción
```bash
# Compilar y ejecutar
npm run build && npm start
```

## Estructura del Proyecto

```
src/
├── logger.ts      # Configuración de Winston con transportes
├── index.ts       # Script de demostración
└── connection.ts  # Conexión a PostgreSQL
```

## Configuración de PostgreSQL (Opcional)

Para utilizar el transporte de PostgreSQL, configura una base de datos y crea la tabla:

```sql
CREATE TABLE winston_logs (
    id SERIAL PRIMARY KEY,
    level VARCHAR(10) NOT NULL,
    message TEXT NOT NULL,
    meta JSONB,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## Resultados

Después de ejecutar el script, verás los logs en:

1.  **Consola:** Output formateado para desarrollo
2.  **Archivos:**
    *   `combined.log`: Todos los mensajes en formato JSON
    *   `error.log`: Solo mensajes de error
3.  **PostgreSQL:** Logs almacenados en la tabla `winston_logs` (si está configurado)
