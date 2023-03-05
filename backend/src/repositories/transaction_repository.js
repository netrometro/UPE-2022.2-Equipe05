const { prisma } = require("../services/prisma")

exports.createTransaction = async (data) => {
  const transaction = await prisma.transaction.create({data})
  return transaction
}

exports.getByUserId = async (userId) => {
  const transaction = await prisma.transaction.findMany({
    where: { userId }
  })
  return transaction
}

exports.getByUserIdAndType = async (userId, type) => {
  const transaction = await prisma.transaction.findMany({
    where: { 
      AND: [
        {userId},
        {type}
      ]
    }
  })
  return transaction
}
