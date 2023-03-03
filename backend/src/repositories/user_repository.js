import { prisma } from "../services/prisma";

export const createUser = async (data) => {
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

export const getById = async (id) =>  {
    const user = await prisma.user.findUnique({
        where: {
            id
        },
    });
    return user;
};