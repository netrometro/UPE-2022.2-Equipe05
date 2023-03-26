const { createPlan, deleteById, getById, getByUserId, updatePlan } = require("../repositories/plan_repository");

exports.create = async (req, res) => {
    try {
        const plan = await createPlan(req.body);
        res.status(200).send(plan)
    } catch (e) {
        console.log(e);
        res.status(400).send(e);
    }
}

exports.getByUserId = async (req, res) => {
    try {
        const plan = await getByUserId(Number(req.params.userId));
        res.status(200).send(plan);
    } catch (e) {
        console.log(e);
        res.status(400).send(e);
    }
}

exports.getById = async (req, res) => {
    try {
        const plan = await getById(Number(req.params.id));
        res.status(200).send(plan);
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
        const plan = await updatePlan(Number(req.params.id), req.body);
        res.status(200).send(plan);
    } catch (e) {
        console.log(e);
        res.status(400).send(e);
    }
}

