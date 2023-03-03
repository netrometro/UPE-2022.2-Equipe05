const { create, getId } = require("../controllers/user_controller");

exports.userRoutes = app => {
    app.post("/user", create);
    app.get("/user/:id", getId);
}