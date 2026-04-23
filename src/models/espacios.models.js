const fs = require("fs/promises");
const path = require("path");

const rutaEspacios = path.join(__dirname,"../../data/espacios.json");

const obtenerEspacios  = async () => {
    const data = await fs.readFile(rutaEspacios, "utf8");
    return JSON.parse(data)
}

module.exports = {
    obtenerEspacios
}