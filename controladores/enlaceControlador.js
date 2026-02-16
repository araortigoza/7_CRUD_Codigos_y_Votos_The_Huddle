const enlaceModelo = require('../modelos/enlaceModelo'); // SE IMPORTAN LAS FUNCIONES DE MODELOS PARA UTILIZARLOS

// CONTROLADOR PARA CREAR UN ENLACE
const crearEnlace = async (req, res) => {
  const { url, temaId } = req.body; // SE EXTRAE DE LA REQUEST LA URL Y EL ID DEL TEMA EN EL QUE VAMOS A CREAR UN ENLACE
  await enlaceModelo.crearEnlace(url, temaId); // SE COMUNICA CON EL MODELO PARA CREAR UN NUEVO ENLACE AL TEMA INDICADO POR EL ID
  res.json({ ok: true }); // SE ENVIA UN MENSAJE DE CONFIRMACION
};

// CONTROLADOR PARA ACTUALIZAR UN ENLACE
const actualizarEnlace = async (req, res) => {
  const { url } = req.body; // SE EXTRAE DE LA REQUEST LA URL A EDITAR
  await enlaceModelo.actualizarEnlace(req.params.id, url); // SE COMUNICA CON EL MODELO PARA ACTUALIZAR EL ENLACE PASANDOLE LOS ARGUMENTOS NECESARIOS
  res.json({ ok: true }); // SE ENVIA UN MENSAJE DE CONFIRMACION
};

// CONTROLADOR PARA ELIMINAR UN ENLACE
const eliminarEnlace = async (req, res) => {
  await enlaceModelo.eliminarEnlace(req.params.id); // SE COMUNICA CON EL MODELO PARA ELIMINAR UN ENLACE PASANDOLE EL ARGUMENTO NECESARIO
  res.json({ ok: true }); // SE ENVIA UN MENSAJE DE CONFIRMACION
};

// CONTROLADOR PARA VOTAR POR UN ENLACE
const votarEnlace = async (req, res) => {
  await enlaceModelo.votarEnlace(req.params.id); // SE COMUNICA CON EL MODELO PARA VOTAR UN ENLACE PASANDOLE LOS ARGUMENTOS NECESARIOS
  res.json({ ok: true }); // SE ENVIA UN MENSAJE DE CONFIRMACION
};

// SE EXPORTAN LAS FUNCIONES PARA UTILIZARLAS EN OTROS ARCHIVOS
module.exports = {
  crearEnlace,
  actualizarEnlace,
  eliminarEnlace,
  votarEnlace
};