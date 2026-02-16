const { PrismaClient } = require('@prisma/client'); // SE IMPORTA PRISMA CLIENT
const prisma = new PrismaClient(); // SE INSTANCIA PRISMA CLIENTE PARA UTILIZAR SUS METODOS Y REALIZAR EL CRUD SIN SQL

// SE CREA UN ENLACE NUEVO EN LA BASE DE DATOS
const crearEnlace = async (url, temaId) => {
  return await prisma.enlace.create({
    data: { url, temaId: parseInt(temaId) }
  });
};

// SE ACTUALIZA UN ENLACE EN LA BASE DE DATOS
const actualizarEnlace = async (id, url) => {
  return await prisma.enlace.update({
    where: { id: parseInt(id) },
    data: { url }
  });
};

// SE ELIMINA UN ENLACE DE LA BASE DE DATOS
const eliminarEnlace = async (id) => {
  return await prisma.enlace.delete({
    where: { id: parseInt(id) }
  });
};

// ACTUALIZA EL VOTO DEL ENLACE EN LA BASE DE DATOS
const votarEnlace = async (id) => {
  return await prisma.enlace.update({
    where: { id: parseInt(id) },
    data: { votos: { increment: 1 } }
  });
};

// SE EXPORTAN LAS FUNCIONES PARA UTILIZARLO EN OTROS ARCHIVOS
module.exports = {
  crearEnlace,
  actualizarEnlace,
  eliminarEnlace,
  votarEnlace
};