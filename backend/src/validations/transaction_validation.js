const { z } = require("zod")

exports.userValidation = z.object({
  type: z.string(),
  title: z.string(),
  value: z.number(),
  category: z.string(),
  description: z.string(),
})
