const { z } = require("zod");

exports.authValidation = z.object({
    email: z.string().email(),
    password: z.string(),
});