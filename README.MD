# 🏢 API de Gestión de Espacios y Reservas CoWorking

API REST desarrollada con Express para la gestión de espacios y reservas.

---

## 🚀 Tecnologías utilizadas

* Node.js
* Express
* Cors
* Morgan

---

## 📂 Estructura del proyecto

```
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
│   ├── validarHoras.js
│   └── validarReserva.js
│
/data
  ├── espacios.json
  └── reservas.json
```

---

## ⚙️ Configuración

El servidor utiliza variables de entorno mediante `.env`.
Si no se encuentra el archivo, se ejecuta por defecto en:

```
PORT=3000
```

---

## ▶️ Ejecución del proyecto

### Instalar dependencias

```bash
npm install
```

### Ejecutar el servidor

```bash
node src/server.js
```

⚠️ **Nota:** Actualmente no está configurado `npm run dev`.

---

## 📌 Endpoints

### 📍 Espacios

#### Obtener todos los espacios

```http
GET /espacios
```

---

### 📅 Reservas

#### Obtener todas las reservas

```http
GET /reservas
```

---

#### Crear una reserva

```http
POST /reservas
```

**Middlewares:**

* validarHoras
* validarReserva
* validarConflicto

**Body:**

```json
{
  "horaInicio": "HH:MM",
  "horaFin": "HH:MM",
  "fecha": "DD/MM/YYYY",
  "IdEspacio": "string",
  "correoUsuario": "string"
}
```

**Notas:**

* El `id` se genera automáticamente
* El `estado` se asigna por defecto

---

#### Eliminar una reserva

```http
DELETE /reservas/:id
```

**Middlewares:**

* comprobarReserva

---

#### Actualizar una reserva

```http
PUT /reservas/:id
```

**Middlewares:**

* comprobarReserva
* validarHoras
* validarConflicto

**Body (parcial):**

```json
{
  "horaInicio": "HH:MM",
  "horaFin": "HH:MM",
  "fecha": "DD/MM/YYYY",
  "IdEspacio": "string",
}
```

**Notas:**

* No se pueden modificar: `id`, `estado`
* Solo se actualizan los campos enviados

---

## 🧠 Arquitectura

### Controllers

#### Espacios

* `mostrarEspacios` → Retorna todos los espacios

#### Reservas

* `mostrarReservas` → Retorna todas las reservas
* `crearReserva` → Crea una nueva reserva
* `eliminarReservaPorId` → Elimina una reserva por ID
* `actualizarReserva` → Actualiza una reserva por ID

---

### Models

#### Espacios

* `leerEspacios` *(privado)*
* `escribirEspacios` *(privado)*
* `obtenerEspacios` → Retorna los espacios

#### Reservas

* `leerReservas` *(privado)*
* `escribirReservas` *(privado)*
* `obtenerReservas` → Obtiene todas las reservas
* `crearReservas` → Guarda una reserva
* `obtenerLargoReservas` → Cantidad de reservas
* `actualizarReservas` → Actualiza una reserva

---

### Middlewares

* `comprobarReserva` → Verifica que la reserva exista
* `validarConflicto` → Evita solapamiento de horarios con otras reservas
* `validarHoras` → Verifica que `horaFin > horaInicio`
* `validarReserva` → Valida estructura de datos

---

## 🔍 Validaciones

* `horaFin` debe ser mayor que `horaInicio`
* No se permiten reservas en conflicto de horario
* Se valida existencia antes de eliminar o actualizar

---

## 📊 Códigos de estado HTTP

* `200 OK` → Operación exitosa
* `201 Created` → Recurso creado
* `400 Bad Request` → Datos inválidos
* `404 Not Found` → Recurso no encontrado
* `409 Conflict` → Conflicto de horario
* `500 Internal Server Error` → Error del servidor

---

## 🛡️ Manejo de errores

El proyecto maneja:

* Datos inválidos
* Reservas inexistentes
* Conflictos de horario
* Errores internos

---

## 📊 Logs y CORS

* **Morgan:** Registro de solicitudes HTTP
* **Cors:** Permite peticiones externas

---

## 📌 Notas

* Formato de hora: `HH:MM`
* Formato de fecha: `DD/MM/YYYY`
* Persistencia mediante archivos JSON
