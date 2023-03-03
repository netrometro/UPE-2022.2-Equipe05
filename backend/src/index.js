const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
import routes from "./routes"

dotenv.config();

const app = express()
app.use(express.json());
app.use(cors())

routes(app);

app.listen(3001, () => {
    console.log("rodando")
})