const { obtenerReservas } = require("../models/reservas.models")

const comprobarReserva = async (req, res, next) => {

    const { id } = req.params;

    const reservas = await obtenerReservas();

    try{

        existeReserva = reservas.some(reserva => reserva.id === id)

        if(!existeReserva){
            return res.status(404).json({
                msg: "Reserva no existe"
            })
        }

        next();

    }catch(error){
        next(error);
    }
}

module.exports = comprobarReserva