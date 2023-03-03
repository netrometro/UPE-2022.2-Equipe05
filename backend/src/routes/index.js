const { userRoutes } = require("./user_routes");

module.exports = (app) => {
    userRoutes(app);
};