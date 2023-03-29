const { create, getByUserId, getUserIdType, deleteById, update } = require("../controllers/transaction_controller")
const { verifyToken } = require("../middlewares/auth_middleware")

exports.transactionRoutes = app => {
  app.post("/transaction", create)
  app.get("/transaction/:userId", verifyToken, getByUserId)
  app.get("/transaction/:userId/:type", verifyToken, getUserIdType)
  app.delete("/transaction/:id", verifyToken, deleteById)
}
