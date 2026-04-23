const { obtenerReservas } = require("../models/reservas.models")

const validarConflicto = async (req, res, next) => {

    const {horaInicio , horaFin, fecha, IdEspacio} = req.body;

    try{
        const reservas = await obtenerReservas();

        const conflicto = reservas.some(
            reserva => 
                reserva.IdEspacio === IdEspacio && 
                reserva.fecha === fecha &&
                reserva.horaInicio < horaFin &&
                reserva.horaFin > horaInicio
            )
        if(conflicto){
            return res.status(400).json({
                msg: "Espacio ocuapdo en el horario seleccionado"
            })
        }

        next();

    }catch(error){
        next(error)
    }
}

module.exports = validarConflicto