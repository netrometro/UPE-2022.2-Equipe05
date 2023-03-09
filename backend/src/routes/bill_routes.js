const { create, deleteById, getById } = require("../controllers/bill_controller")
const { verifyToken } = require("../middlewares/auth_middleware")

exports.billRoutes = app => {
    app.post("/bill", create)
    app.get("/bill/:userId", verifyToken, getById)
    app.delete("/bill/:id", verifyToken, deleteById)
}