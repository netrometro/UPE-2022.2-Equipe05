const { login } = require("../controllers/auth_controller");

exports.authRoutes = app => {
    app.post("/login", login);
};