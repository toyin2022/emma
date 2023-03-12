const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const db = require("./database");
const productRouter = require("./routes/productRoutes");

var corsOption = {
  // the frontend connectivity
  origin: "http://localhost:3000",
};
app.use(cors(corsOption));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// db.on("error", console.error.bind(console, "mongo db connection was failed"));

app.get("/", (req, res) => res.send("Hello World!"));
app.use("/api", productRouter);
const Port = 4000;
app.listen(Port, () => console.log(`Example app listening on port ${Port}!`));
