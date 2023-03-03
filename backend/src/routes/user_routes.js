const { create, getId } = require("../controllers/user_controller");
const { verifyToken } = require("../middlewares/auth_middleware")

exports.userRoutes = app => {
    app.post("/user", create);
    app.get("/user/:id", verifyToken, getId);
}