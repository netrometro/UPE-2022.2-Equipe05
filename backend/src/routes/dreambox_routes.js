const { create, deleteById, getById, getByUserId, update } = require("../controllers/dreambox_controller");

exports.dreamBoxRoutes = app => {
    app.post("/dreambox", create);
    app.get("/dreamboxes/:userId", getByUserId);
    app.delete("/dreambox/:id", deleteById)
    app.put("/dreambox/:id", update)
    app.get("/dreambox/:id", getById)
}