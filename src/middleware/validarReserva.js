const { obtenerEspacios } = require("../models/espacios.models");

const validarReserva = async (req, res, next) => {

    const {horaInicio , horaFin, fecha, IdEspacio, correoUsuario} = req.body;

    //validacion de campos
    if(!horaInicio || !horaFin || !fecha || !IdEspacio || !correoUsuario){
        return res.status(400).json({
            msg: "Por favor llene todos los campos"
        })
    }

    try{
        //validar espacio
        const espacios = await obtenerEspacios();
        const ExisteEspacios = espacios.some(espacio => espacio.id === Number(IdEspacio));

        if(!ExisteEspacios) {
            return res.status(404).json({
                msg: "El espacio no existe"
            })
        }

    }catch(error){
        return next(error)
    }

    next();
}

module.exports = validarReserva;