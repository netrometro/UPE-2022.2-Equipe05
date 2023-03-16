const { create, deleteById, getById, getByUserId, update } = require("../controllers/dreambox_controller");
const { verifyToken } = require ("../middlewares/auth_middleware")

exports.dreamBoxRoutes = app => {
    app.post("/dreambox", create);
    app.get("/dreamboxes/:userId", verifyToken, getByUserId);
    app.delete("/dreambox/:id", verifyToken, deleteById)
    app.put("/dreambox/:id", verifyToken, update)
    app.get("/dreambox/:id", verifyToken, getById)
}