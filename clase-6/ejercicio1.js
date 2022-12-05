// Desarrollar un servidor en node.js que escuche peticiones en el puerto 8080 y responda un mensaje de acuerdo a la hora actual: 
// Si la hora actual se encuentra entre las 6 y las 12 hs será 'Buenos días!'.
// Entre las 13 y las 19 hs será 'Buenas tardes!'. 
// De 20 a 5 hs será 'Buenas noches!'.

// Se mostrará por consola cuando el servidor esté listo para operar y en qué puerto lo está haciendo.

//PD: El modo de comprobar si realmente el servidor está escuchando a solicitudes de clientes en dicho puerto es acceder con un navegador a la dirección:  http://localhost:8080

//aqui importamos modulo
const http= require("http");


const server= http.createServer((req, res) => {
    res.end(getMensaje());
})


const PORT= 8080
const connectServer= server.listen(PORT, () =>
console.log(`servidor http esta escuchando el puerto ${connectServer.address().port}`))

const getMensaje= () => {
    const hora= new Date().getHours();
    if(hora >= 6 && hora <= 12) {
        return "Buenos Dias"
    } else if(hora >= 13 && hora <= 19) {
        return "Buenas Tardes"
    } else if(hora >= 20 && hora <= 5) {
        return "Buenas Noches"
    }
}
