const { create, deleteById, getById } = require("../controllers/bill_controller")

exports.billRoutes = app => {
    app.post("/bill", create)
    app.get("/bill/:userId", getById)
    app.delete("/bill/:id", deleteById)
}