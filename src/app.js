const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const espaciosRoutes = require("./routes/espacios.routes");
const reservasRoutes = require("./routes/reservas.routes")

//importar controlador


// Middleware para parsear JSON
const app = express();

//middlewares incorporados(espress) y de terceros
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//rutas
app.get(`/`,(req, res) => {
    res.send("Bienvenido a CoWorkAPI de CTRL ALT ELITE");
})

//rutas espacios
app.use("/espacios", espaciosRoutes);

//rutas reservas
app.use("/reservas", reservasRoutes);



module.exports = app;