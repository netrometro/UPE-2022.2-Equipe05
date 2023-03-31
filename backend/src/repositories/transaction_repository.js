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

exports.deleteById = async (id) => {
  const transaction = await prisma.transaction.delete({
      where: {
          id
      }
  });
  return;
}

exports.updateTransaction = async (id, data) => {
  const transaction = await prisma.transaction.update({
      where: {
          id
      },
      data
  });
  return transaction;
}

exports.getById = async (id) => {
  const transaction = await prisma.transaction.findUnique({
      where: {
          id
      }
  })
  return transaction;
}