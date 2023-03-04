const bcrypt = require("bcrypt");
const { createUser, getById } = require("../repositories/user_repository");
const { userValidation } = require("../validations/user_validation");

exports.create = async (req, res) => {
    try {
        const data = await userValidation.parse(req.body);
        req.body.password = bcrypt.hashSync(req.body.password, 10);
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