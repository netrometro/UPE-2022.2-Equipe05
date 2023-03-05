const { createTransaction, getByUserId, getByUserIdAndType } = require("../repositories/transaction_repository")
// const { transactionValidation } = require("../validations/transaction_validation")

exports.create = async (req, res) => {
  try {
    const transaction = await createTransaction(req.body)
    res.status(200).send(transaction)
  } catch (e) {
    console.log(e)
    res.status(400).send(e)
  }
}

exports.getByUserId = async (req, res) => {
  try {
    const transaction = await getByUserId(Number(req.params.userId))
    res.status(200).send(transaction)
  } catch (e) {
    console.log(e)
    res.status(400).send(e)
  }
}

exports.getUserIdType = async (req, res) => {
  try {
    const transaction = await getByUserIdAndType(Number(req.params.userId), req.params.type)
    res.status(200).send(transaction)
  } catch (e) {
    console.log(e)
    res.status(400).send(e)
  }
}
