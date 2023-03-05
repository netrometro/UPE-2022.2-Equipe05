const { userRoutes } = require("./user_routes");
const { authRoutes } = require("./auth_routes");
const { transactionRoutes } = require("./transaction_routes");

module.exports = (app) => {
    userRoutes(app);
    authRoutes(app);
    transactionRoutes(app);
};
