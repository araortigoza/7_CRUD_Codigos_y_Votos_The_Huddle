const temaModelo = require('../modelos/temaModelo');

const mostrarTemas = async (req, res) => {
    const temas = await temaModelo.obtenerTodosTemas();
    res.render('index', { temas });
};

const mostrarFormularioCrear = (req, res) => {
    res.render('crear');
};

const crearTema = async (req, res) => {
    const { titulo, enlace } = req.body;
    await temaModelo.crearTema(titulo, enlace);
    res.redirect('/');
};

const mostrarFormularioEditar = async (req, res) => {
    const temas = await temaModelo.obtenerTodosTemas();
    const tema = temas.find( t => t.id === parseInt(req.params.id));
    res.render('editar', { tema });
};

const actualizarTema = async (req, res) => {
    const { titulo, enlace } = req.body;
    await temaModelo.actualizarTema(req.params.id, titulo, enlace);
    res.redirect('/');
};

const eliminarTema = async (req, res) => {
    await temaModelo.eliminarTema(req.params.id);
    res.redirect('/');
};

const votarTema = async (req, res) => {
    await temaModelo.votarTema(req.params.id);
    res.json({ ok: true});
};

module.exports = {
    mostrarTemas,
    mostrarFormularioCrear,
    crearTema,
    mostrarFormularioEditar,
    actualizarTema,
    eliminarTema,
    votarTema
};