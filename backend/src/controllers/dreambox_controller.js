const { createDreambox, deleteById, getById, getByUserId, updateDreambox } = require("../repositories/dreambox_repository");

exports.create = async (req, res) => {
    try {
        const dreambox = await createDreambox(req.body);
        res.status(200).send(dreambox)
    } catch (e) {
        console.log(e);
        res.status(400).send(e);
    }
}

exports.getByUserId = async (req, res) => {
    try {
        const dreambox = await getByUserId(Number(req.params.userId));
        res.status(200).send(dreambox);
    } catch (e) {
        console.log(e);
        res.status(400).send(e);
    }
}

exports.getById = async (req, res) => {
    try {
        const dreambox = await getById(Number(req.params.id));
        res.status(200).send(dreambox);
    } catch (e) {
        console.log(e);
        res.status(400).send(e);
    }
}

exports.deleteById = async (req, res) => {
    try {
        await deleteById(Number(req.params.id))
        res.status(200).send()
    } catch (e) {
        console.log(e);
        res.status(400).send(e);
    }
}

exports.update = async (req, res) => {
    try {
        const dreambox = await updateDreambox(Number(req.params.id), req.body);
        res.status(200).send(dreambox);
    } catch (e) {
        console.log(e);
        res.status(400).send(e);
    }
}