const { prisma } = require("../services/prisma");

exports.getUser = async (email) => {
    const user = await prisma.user.findUnique({
        where: {
            email,
        },
    });
    return user;
};