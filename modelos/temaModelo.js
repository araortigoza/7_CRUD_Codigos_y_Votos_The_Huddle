const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient

const obtenerTodosTemas = async () => {
    return await prisma.tema.findMany({
        orderBy: {votos: 'desc'}
    });
};

const crearTema = async (titulo, enlace) => {
    return await prisma.tema.create({
        data: { titulo, enlace }
    });
};

const actualizarTema = async (id, titulo, enlace) => {
    return await prisma.tema.update({
        where: { id: parseInt(id) },
        data: { titulo, enlace }
    });
};

const eliminarTema = async (id) => {
    return await prisma.tema.delete({
        where: { id: parseInt(id) }
    });
};


const votarTema = async (id) => {
    return await prisma.tema.update({
        where: { id: parseInt(id) },
        data: { votos: { increment: 1 } }
    });
};


module.exports = {
    obtenerTodosTemas,
    crearTema,
    actualizarTema,
    eliminarTema,
    votarTema
};