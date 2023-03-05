const { create, getByUserId } = require("../controllers/transaction_controller")

exports.transactionRoutes = app => {
  app.post("/transaction", create)
  app.get("/transaction/:userId", getByUserId)
}
