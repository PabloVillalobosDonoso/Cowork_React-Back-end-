const express = require("express");
const { mostrarEspacios } = require("../controllers/espacios.controllers");

const router = express.Router();

router.get("/", mostrarEspacios)

module.exports = router