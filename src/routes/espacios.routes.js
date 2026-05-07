const express = require("express");
const { mostrarEspacios, crearEspacios } = require("../controllers/espacios.controllers");
const verificarAdmin = require("../middleware/verificarAdmin");

const router = express.Router();

router.get("/", mostrarEspacios)

router.post("/", verificarAdmin, crearEspacios);

module.exports = router