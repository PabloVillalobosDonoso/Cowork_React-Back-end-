const { obtenerEspacios } = require("../models/espacios.models");

const mostrarEspacios = async (req,res, next) => {
    try{
        const espacios = await obtenerEspacios();
        res.status(200).json(espacios)
    } catch (error){
        next(error)
    }
}

module.exports = {
    mostrarEspacios
}