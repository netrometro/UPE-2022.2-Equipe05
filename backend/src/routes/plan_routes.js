const { create, deleteById, getById, getByUserId, update } = require("../controllers/plan_controller");
const { verifyToken } = require ("../middlewares/auth_middleware")

exports.planRoutes = app => {
    app.post("/plan", create);
    app.get("/plans/:userId", verifyToken, getByUserId);
    app.delete("/plan/:id", verifyToken, deleteById)
    app.put("/plan/:id", verifyToken, update)
    app.get("/plan/:id", verifyToken, getById)
}

