# Proyecto de Bitácora (Logging) en Node.js

Este es un proyecto de demostración simple que implementa un sistema de bitácoras (logging) estructurado en Node.js utilizando la librería `winston`.

## Características

*   **Logging Estructurado:** Los logs se generan en formato JSON.
*   **Niveles de Severidad:** Utiliza los niveles `info`, `warn`, y `error`.
*   **Múltiples Transportes:** Los logs se envían tanto a la consola como a archivos de texto.
    *   `combined.log`: Contiene todos los registros.
    *   `error.log`: Contiene únicamente los registros de error.

## Requisitos

*   Node.js
*   npm (o cualquier otro gestor de paquetes de Node.js)

## Instalación

Para instalar las dependencias del proyecto, ejecuta el siguiente comando en la raíz del directorio:

```bash
npm install
```

## Uso

Para ejecutar el script de demostración, utiliza el siguiente comando:

```bash
node index.js
```

## Resultados

Después de ejecutar el script, verás los logs en la consola y se crearán/actualizarán dos archivos en el directorio:

1.  `combined.log`: Con todos los mensajes de log generados.
2.  `error.log`: Conteniendo solo el mensaje de error.
