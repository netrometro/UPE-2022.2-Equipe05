const { z } = require("zod");

exports.userValidation = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string(),
})