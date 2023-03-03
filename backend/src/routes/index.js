const { userRoutes } = require("./user_routes");
const { authRoutes } = require("./auth_routes");

module.exports = (app) => {
    userRoutes(app);
    authRoutes(app);
};