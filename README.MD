🏢 API de Gestión de Espacios y Reservas

API REST desarrollada con Express para la gestión de espacios y reservas.

🚀 Tecnologías utilizadas
Node.js
Express
Cors
Morgan
📂 Estructura del proyecto
/src
│
├── app.js
├── server.js
│
├── /routes
│   ├── espacios.routes.js
│   └── reservas.routes.js
│
├── /controllers
│   ├── espacios.controllers.js
│   └── reservas.controller.js
│
├── /models
│   ├── espacios.models.js
│   └── reservas.models.js
│
├── /middlewares
│   ├── comprobarReserva.js
│   ├── validarConflicto.js
│   └── validarReserva.js
│
/data
    ├── espacios.json
    └── reservas.json
⚙️ Configuración

El servidor utiliza variables de entorno mediante .env.
Si no se encuentra el archivo, el servidor se ejecuta por defecto en:

PORT=3000
▶️ Ejecución del proyecto

Instalar dependencias:

npm install

Ejecutar el servidor:

node src/server.js

⚠️ Nota: Actualmente no está configurado npm run dev, por lo que debes iniciar el proyecto manualmente como se muestra arriba.

📌 Endpoints
📍 Espacios
Obtener todos los espacios
GET /espacios
📅 Reservas
Crear una reserva
POST /reservas
Obtener todas las reservas
GET /reservas
Eliminar una reserva
DELETE /reservas/:id
Actualizar una reserva
PUT /reservas/:id

⚠️ Este endpoint aún no está implementado

🧠 Arquitectura
Controladores

Contienen la lógica de negocio de cada endpoint y manejan las respuestas al cliente.

Modelos

Gestionan la lectura y escritura de datos en archivos .json.

Middlewares
comprobarReserva.js
Verifica que la reserva exista antes de procesar la solicitud.
validarReserva.js
Valida los datos enviados al crear una reserva.
validarConflicto.js
Evita que existan reservas con horarios superpuestos.
🛡️ Manejo de errores

El proyecto incluye manejo de errores para:

Solicitudes con datos inválidos
Recursos no encontrados
Conflictos de reservas
Errores internos del servidor
🔍 Validaciones

Se validan aspectos como:

Campos obligatorios
Disponibilidad del espacio en el horario solicitado
📊 Logs y CORS
Morgan: registra las solicitudes HTTP en consola
Cors: permite peticiones desde otros dominios
📌 Notas
Los datos se almacenan en archivos JSON (sin base de datos).
El endpoint PUT /reservas/:id está definido pero pendiente de implementación.
Proyecto enfocado en práctica de arquitectura backend con Express.