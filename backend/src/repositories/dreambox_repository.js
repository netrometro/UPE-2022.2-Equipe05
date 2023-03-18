const { prisma } = require("../services/prisma")

exports.createDreambox = async (data) => {
    const dreambox = await prisma.dreamBox.create({data});
    return dreambox;
}

exports.getByUserId = async (userId) => {
    const dreambox = await prisma.dreamBox.findMany({
        where: {
            userId
        },
        orderBy: {
            isActive: 'desc'
        }
    })
    return dreambox;
}

exports.getById = async (id) => {
    const dreambox = await prisma.dreamBox.findUnique({
        where: {
            id
        }
    })
    return dreambox;
}

exports.deleteById = async (id) => {
    const dreambox = await prisma.dreamBox.delete({
        where: {
            id
        }
    });
    return;
}

exports.updateDreambox = async (id, data) => {
    const dreambox = await prisma.dreamBox.update({
        where: {
            id
        },
        data
    });
    return dreambox;
}