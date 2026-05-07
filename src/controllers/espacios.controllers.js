//const { obtenerEspacios } = require("../models/espacios.models");  -> version con json, sin mongoDB
const { connect } = require("../database/mongoose");
const { obtenerTodosLosEspacios, crearNuevoEspacio,  } = require("../models/espacios.mongoose");

const mostrarEspacios = async (req,res, next) => {
    try{
        await connect();
        const espacios = await obtenerTodosLosEspacios();
        res.status(200).json(espacios)
    } catch (error){
        next(error)
    }
}

const crearEspacios = async (req, res, next) => {
    try{
        const { nombre, ubicacion, descripcion, capacidad, precio, imagen, caracteristicas } = req.body;
        await connect();
        const espacio = await crearNuevoEspacio({ nombre, ubicacion, descripcion, capacidad, precio, imagen, caracteristicas });
        res.status(200).json({
            
            msg: "espacio creado",
            espacio
        })
    }catch(error){
        next(error)
    }
}

module.exports = {
    mostrarEspacios,
    crearEspacios
}