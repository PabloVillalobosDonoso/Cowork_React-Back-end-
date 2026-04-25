const express = require("express");
const { mostrarReservas, crearReserva, eliminarReservaPorId, actualizarReserva } = require("../controllers/reservas.controller")
const validarReserva = require("../middleware/validarReserva");
const validarConflicto = require("../middleware/validarConflicto");
const comprobarReserva = require("../middleware/comprobarReserva");
const validarHoras = require("../middleware/validarHoras");

const router = express.Router();

router.get("/", mostrarReservas);
router.post("/",validarHoras ,validarReserva,validarConflicto,crearReserva);
router.delete("/:id",comprobarReserva,eliminarReservaPorId);
router.put("/:id",comprobarReserva,validarHoras,validarConflicto,actualizarReserva);

module.exports = router