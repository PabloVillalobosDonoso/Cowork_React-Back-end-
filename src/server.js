// Levantar el servidor
const app = require("./app");

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=> {
    console.log(`Servidor CoWork corriendo en http://localhost:${PORT}`)
})