const { create, getByUserId, getUserIdType } = require("../controllers/transaction_controller")
const { verifyToken } = require("../middlewares/auth_middleware")

exports.transactionRoutes = app => {
  app.post("/transaction", create)
  app.get("/transaction/:userId", verifyToken, getByUserId)
  app.get("/transaction/:userId/:type", verifyToken, getUserIdType)
}
