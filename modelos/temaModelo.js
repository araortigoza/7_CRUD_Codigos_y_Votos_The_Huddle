const { PrismaClient } = require('@prisma/client') // SE IMPORTA PRISMACLIENT 
const prisma = new PrismaClient // SE INSTANCIA PRISMA CLIENT PARA UTILIZAR SUS METODOS Y REALIZAR EL CRUD SIN ESCRIBIR SQL

// CONSULTA A LA BASE DE DATOS Y TRAE TODOS LOS TEMAS INCLUYENDO A LOS ENLACES, AMBOS ORDENADOS DE FORMA DESCENDENTE POR LOS VOTOS
const obtenerTodosTemas = async () => {
    return await prisma.tema.findMany({
        include: { 
            enlaces: {
                orderBy: { votos: 'desc' }
            }
        },
        orderBy: {votos: 'desc'}

    });
};

// SE CREA UN NUEVO TEMA A LA BASE DE DATOS
const crearTema = async (titulo) => {
    return await prisma.tema.create({
        data: { titulo }
    });
};

// SE EDITA UN TEMA EN LA BASE DE DATOS
const actualizarTema = async (id, titulo) => {
    return await prisma.tema.update({
        where: { id: parseInt(id) },
        data: { titulo }
    });
};

// SE ELIMINA UN TEMA A LA BASE DE DATOS
const eliminarTema = async (id) => {
    return await prisma.tema.delete({
        where: { id: parseInt(id) }
    });
};


// SE AGREGAN LOS VOTOS DE CADA TEMA A LA BASE DE DATOS
const votarTema = async (id) => {
    return await prisma.tema.update({
        where: { id: parseInt(id) },
        data: { votos: { increment: 1 } }
    });
};

// SE EXPORTAN LAS FUNCIONES PARA UTILIZARLOS EN OTROS ARCHIVOS
module.exports = {
    obtenerTodosTemas,
    crearTema,
    actualizarTema,
    eliminarTema,
    votarTema
};