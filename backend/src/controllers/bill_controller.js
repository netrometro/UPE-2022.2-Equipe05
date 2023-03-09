const { createBill, deleteById, getByUserId } = require("../repositories/bill_repository")

exports.create = async (req, res) => {
    try {
        const bill = await createBill(req.body)
        res.status(200).send(bill)
    } catch (e) {
        console.log(e)
        res.status(400).send(e)
    }
}

exports.getById = async (req, res) => {
    try {
        const bill = await getByUserId(Number(req.params.userId))
        res.status(200).send(bill)
    } catch (e) {
        console.log(e)
        res.status(400).send(e)
    }
}

exports.deleteById = async (req, res) => {
    try {
        await deleteById(Number(req.params.userId))
        res.status(200).send()
    } catch (e) {
        console.log(e)
        res.status(400).send(e)
    }
}