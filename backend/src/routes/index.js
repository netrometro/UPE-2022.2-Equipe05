const { userRoutes } = require("./user_routes");
const { authRoutes } = require("./auth_routes");
const { transactionRoutes } = require("./transaction_routes");
const { billRoutes } = require("./bill_routes") ;
const { dreamBoxRoutes } = require("./dreambox_routes")

module.exports = (app) => {
    userRoutes(app);
    authRoutes(app);
    transactionRoutes(app);
    billRoutes(app);
    dreamBoxRoutes(app);
};
