const { prisma } = require("../services/prisma")

exports.createUser = async (data) => {
    const user = await prisma.user.create({
        data,
        select: {
            id: true,
            name: true,
            email: true,
            password: false
        }
    })
    return user;
}

exports.getById = async (id) =>  {
    const user = await prisma.user.findUnique({
        where: {
            id
        },
    });
    return user;
};