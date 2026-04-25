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
            /*
            const fecha = new Date();

            const dia = String(fecha.getDate()).padStart(2, "0");
            const mes = String(fecha.getMonth() + 1).padStart(2, "0");
            const año = fecha.getFullYear();

            const resultado = `${dia}/${mes}/${año}`;

            console.log(resultado);
            */

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
        await actualizarReservas(nuevasReservas);
        res.status(200).json({
            msg: `Reserva eliminada con exito `,
            nuevasReservas
        });
    }catch(error){
        next(error)
    }
}

const actualizarReserva = async (req, res, next) => {
    const { id } = req.params;
    const {horaInicio , horaFin, fecha, IdEspacio} = req.body;

    try{
        const reservas = await obtenerReservas();

        const nuevasReservas = reservas.map(reserva => {
            if(reserva.id === id ){
                return {
                    ...reserva,
                    horaInicio,
                    horaFin,
                    fecha,
                    IdEspacio
                };
            }
            return reserva;
        })

        await actualizarReservas(nuevasReservas);
        res.status(200).json({
            msg: `Reserva actualizada`,
            nuevasReservas
        });

        
    }catch(error){
        next(error);
    }
}

module.exports = {
    mostrarReservas,
    crearReserva,
    eliminarReservaPorId,
    actualizarReserva
}