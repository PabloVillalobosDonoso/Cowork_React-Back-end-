const { obtenerReservas, crearReservas, obtenerLargoReservas, actualizarReservas } = require("../models/reservas.models.js")
const mostrarReservas = async (req, res ) => {
    try{
        const reservas = await obtenerReservas();
        res.status(200).json(reservas);
    } catch(error){
        console.log("error", error);
        res.status(500).json({
            msg: "error del servidor"
        })
        
    }
}

const crearReserva = async (req, res, next) => {
    const {horaInicio , horaFin, fecha, IdEspacio, correoUsuario} = req.body;

    try {
        //const nuevoId = await obtenerLargoReservas() + 1;
        const nuevoId = Date.now() + correoUsuario;
        const nuevaReserva = {
            id: nuevoId,
            horaInicio,
            horaFin,
            fecha,
            IdEspacio,
            estado: "confirmada",
            correoUsuario
        };
        
        const reservaCreada = await crearReservas(nuevaReserva);
        res.status(201).json(reservaCreada);

    }catch(error){
        next(error)
    }
}

const eliminarReservaPorId = async (req, res, next) => {
    const { id } = req.params;

    try{
        const reservas = await obtenerReservas();
        const nuevasReservas = reservas.filter(reserva => reserva.id !== id)
        console.log(nuevasReservas);
        console.log(id);
        await actualizarReservas(nuevasReservas);
        res.status(200).json({
            msg: `Reserva eliminada con exito ${nuevasReservas}`
        });
    }catch(error){
        next(error)
    }
}

module.exports = {
    mostrarReservas,
    crearReserva,
    eliminarReservaPorId
}