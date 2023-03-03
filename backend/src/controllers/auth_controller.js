const { getUser } = require("../repositories/auth_repository");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { authValidation } = require("../validations/auth_validation");

exports.login = async (req, res) => {
    try {
        const data = await authValidation.parse(req.body);
        const user = await getUser(data.email);

        if (!user) throw {
            message: "Usuário não existe"
        };
        console.log(typeof(req.body.password));
        console.log(typeof(user.password));
        console.log(req.body.password);
        console.log(user.password);
        console.log(user);
        if (bcrypt.compareSync(data.password, user.password)) {
            console.log("Entrou")
        }
        //console.log(bcrypt.compareSync(req.body.password, user.password))

        if (user && bcrypt.compareSync(req.body.password, user.password)) {
            const token = jwt.sign(
                {
                    id: user.id,
                    email: user.email,
                    name: user.name
                },
                process.env.TOKEN_KEY,
                {
                expiresIn: "24h"
                }
            );
            return res.status(200).send({token})
        } {
            return res.status(401).send({
                message: "Usuário ou senha incorretos"
            })
        }
    } catch (e) {
        res.status(400).send(e);
    }
}