const temaModelo = require('../modelos/temaModelo'); // IMPORTAMOS TODAS LAS FUNCIONES DE MODELOS

// CONTROLADOR PARA MOSTRAR TODOS LOS TEMAS EN EL NAVEGADOR
const mostrarTemas = async (req, res) => {
  const temas = await temaModelo.obtenerTodosTemas(); // SE COMUNICA CON MODELOS PARA OBTENER TODOS LOS TEMAS
  res.render('index', { temas }); // RENDERIZAMOS A LA VISTA INDEX Y LE PASAMOS TODOS LOS TEMAS DEVUELTOS POR MODELOS
};

// CONTROLADOR PARA MOSTRAR EN FORMULARIO DE CREAR
const mostrarFormularioCrear = (req, res) => {
  res.render('crear'); // RENDERIZAMOS A LA VISTA CREAR
};

// CONTROLADOR PARA CREAR UN TEMA NUEVO
const crearTema = async (req, res) => {
  const { titulo } = req.body; // SE EXTRAE EL TITULO DE LA REQUEST
  await temaModelo.crearTema(titulo); // SE COMUNICA CON EL MODELO PARA CREAR NUEVO TEMA PASANDOLE EL TITULO EXTRAIDO
  res.redirect('/'); // NOS REDIRIJIMOS A LA PAGINA PRINCIPAL
};

// CONTROLADOR PARA ACTUALIZAR UN TEMA
const actualizarTema = async (req, res) => {
  const { titulo } = req.body; // SE EXTRAE EL TITULO EDITADO DE LA REQUEST
  await temaModelo.actualizarTema(req.params.id, titulo); // SE COMUNICA CON EL MODELO PARA ACTUALIZAR UN TEMA PASANDOLE LOS ARGUMENTOS NECESARIOS
  res.json({ ok: true }); // ENVIAMOS UNA CONFIRMACION
};

// CONTROLADOR PARA ELIMINAR UN TEMA
const eliminarTema = async (req, res) => {
  await temaModelo.eliminarTema(req.params.id);  // SE COMUNICA CON EL MODELO PARA ELIMINAR UN TEMA Y LE PASAMOS EL ARGUMENTO NECESARIO EXTRAYENDOLO DE LA REQUEST
  res.json({ ok: true }); // ENVIAMOS UNA CONFIRMACION
};

// CONTROLADOR PARA VOTAR UN TEMA
const votarTema = async (req, res) => {
  await temaModelo.votarTema(req.params.id); // SE COMUNICA CON EL MODELO PARA VOTAR UN TEMA PASANDOLE LOS PARAMETROS NECESARIOS EXTRAYENDOLO DE LA REQUETS
  res.json({ ok: true }); // ENVIAMOS UNA CONFIRMACION
};

// EXPORTAMOS TODAS LAS FUNCIONES PARA UTILIZARLOS EN OTROS ARCHIVOS
module.exports = {
  mostrarTemas,
  mostrarFormularioCrear,
  crearTema,
  actualizarTema,
  eliminarTema,
  votarTema
};