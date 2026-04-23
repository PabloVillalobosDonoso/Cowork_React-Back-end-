const express = require("express");
const { mostrarReservas, crearReserva, eliminarReservaPorId } = require("../controllers/reservas.controller")
const validarReserva = require("../middleware/validarReserva");
const validarConflicto = require("../middleware/validarConflicto")
const comprobarReserva = require("../middleware/comprobarReserva")

const router = express.Router();

router.get("/", mostrarReservas);
router.post("/", validarReserva,validarConflicto,crearReserva);
router.delete("/:id",comprobarReserva,eliminarReservaPorId);

module.exports = router