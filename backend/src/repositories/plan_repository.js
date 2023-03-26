const { prisma } = require("../services/prisma")

exports.createPlan = async (data) => {
    const plan = await prisma.plan.create({data});
    return plan;
}

exports.getByUserId = async (userId) => {
    const plan = await prisma.plan.findMany({
        where: {
            userId
        },
        orderBy: {
          isActive: 'desc'
        }
    })
    return plan;
}

exports.getById = async (id) => {
    const plan = await prisma.plan.findUnique({
        where: {
            id
        }
    })
    return plan;
}

exports.deleteById = async (id) => {
    const plan = await prisma.plan.delete({
        where: {
            id
        }
    });
    return;
}

exports.updatePlan = async (id, data) => {
    const plan = await prisma.plan.update({
        where: {
            id
        },
        data
    });
    return plan;
}

