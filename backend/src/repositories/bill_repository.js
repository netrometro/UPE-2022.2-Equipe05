const { prisma } = require("../services/prisma")

exports.createBill = async (data) => {
    const bill = await prisma.bill.create({data})
    return bill
}

exports.getByUserId = async (userId) => {
    const bill = await prisma.bill.findMany({
        where:
            { userId }
    })
    return bill
}

exports.deleteById =  async (id) => {
    const bill = await prisma.bill.delete({
        where: {
            id
        }
    });
    return;
}