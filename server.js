require('dotenv/config'); // SE IMPORTA DOTENV PARA FORZAR A QUE LEA LO QUE HAY DENTRO DE .ENV (EN ESE CASO LA URL DE LA BASE DE DATOS)
const express = require('express'); // SE IMPORTA LA LIBRERIA EXPRESS (FRAMEWORK)
const path = require('path'); // SE IMPORTA PATH QUE SIRVE PARA LAS RUTAS DE CARPETAS
const temaControlador = require('./controladores/temaControlador'); // SE TRAE LO QUE HAY EN EL ARCHIVO temaControlador.js
const enlaceControlador = require('./controladores/enlaceControlador')

const app = express(); // SE INSTANCIA LA APLICACION
const puerto = process.env.PORT; // SE DEFINE EL PUERTO DE LA APLICACION

// CONFIGURACIONES INTERNAS DEL SERVIDOR
app.set('view engine', 'ejs'); // SE LE COMUNICA A EXPRESS QUE SE UTILIZARA EJS
app.set('views', path.join(__dirname, 'vistas')); // SE INDICA QUE LAS VISTAS ESTAN EN SU CARPETA CORRESPONDIENTE

// MIDDLEWARES // FUNCIONES QUE SE REALIZAN CADA VEZ QUE SE REALICE UNA PETICION
app.use(express.urlencoded({ extended: true })); // SE CODIFICA EL MENSAJE DEL USUARIO UTILIZANDO LA LIBRERIA QS
app.use(express.json()); // SE CONVIERTE LO QUE LLEGA DE FETCH (JSON) A UN OBJETO JAVASCRIPT
app.use(express.static('public')); // SE LE COMUNICA AL SERVIDOR QUE EL NAVEGADOR PUEDE ACCEDER A LOS ARCHIVOS DENTRO DE LA CARPETA 'public'

// SE DEFINEN LAS RUTAS
app.get('/', temaControlador.mostrarTemas);

app.get('/temas/nuevo', temaControlador.mostrarFormularioCrear);

app.post('/temas', temaControlador.crearTema);
app.put('/temas/:id', temaControlador.actualizarTema);
app.delete('/temas/:id', temaControlador.eliminarTema);
app.post('/temas/:id/votar', temaControlador.votarTema);

app.post('/enlaces', enlaceControlador.crearEnlace);
app.put('/enlaces/:id', enlaceControlador.actualizarEnlace);
app.delete('/enlaces/:id', enlaceControlador.eliminarEnlace);
app.post('/enlaces/:id/votar', enlaceControlador.votarEnlace);

// SE PONE EN ESCUCHA AL SERVIDOR PARA RECIBIR PETICIONES
app.listen(puerto, () => {
    console.log(`Servidor corriendo en http://localhost:${puerto}`);
});