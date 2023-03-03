const { createUser, getById } = require("../repositories/user_repository");

exports.create = async (req, res) => {
    try {
        const user = await createUser(req.body);
        res.status(200).send(user)
    } catch (e) {
        console.log(e)
        res.status(400).send(e)
    }
}

exports.getId = async (req, res) => {
    try {
        const user = await getById(Number(req.params.id));
        res.status(200).send(user);
    } catch (e) {
        console.log(e);
        res.status(400).send(e);
    }
}