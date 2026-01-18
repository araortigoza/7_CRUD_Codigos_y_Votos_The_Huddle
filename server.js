const express = require('express');
const path = require('path');
const temaControlador = require('./controladores/temaControlador');

const app = express();
const puerto = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'vistas'));

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static('public'));

app.get('/', temaControlador.mostrarTemas);
app.get('/crear', temaControlador.mostrarFormularioCrear);
app.post('/crear', temaControlador.crearTema);
app.get('/editar/:id', temaControlador.mostrarFormularioEditar);
app.post('/editar/:id', temaControlador.actualizarTema);
app.post('/eliminar/:id', temaControlador.eliminarTema);
app.post('/votar/:id', temaControlador.votarTema);

app.listen(puerto, () => {
    console.log(`Servidor corriendo en http://localhost:${puerto}`);
});