const { create, getByUserId, getUserIdType, deleteById, update, getById } = require("../controllers/transaction_controller")
const { verifyToken } = require("../middlewares/auth_middleware")

exports.transactionRoutes = app => {
  app.post("/transaction", create)
  app.get("/transaction/:userId", verifyToken, getByUserId)
  app.get("/transaction/:userId/:type", verifyToken, getUserIdType)
  app.delete("/transaction/:id", verifyToken, deleteById)
  app.put("/transaction/:id", verifyToken, update)
  app.get("/transaction-id/:id", getById)
}