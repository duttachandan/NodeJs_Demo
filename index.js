require("dotenv").config();
const express = require("express");
const path = require("path");
// const mongoose = require("mongoose");
// const methodOverride = require("method-override");
const getProduct = require("./app/routes/getProduct");
const dataBase = require("./app/config/MongoConnect");
const app = express();
const PORT = 8002 || process.env.PORT;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
dataBase();

app.use(express.static("public"));
app.use(getProduct);

app.use((err, req, res, next) => {
  console.log(err.message);
  res.status(404 || err.status).send(err.message || "Error Occured");
});

app.listen(PORT, () => {
  console.log(`listen on http://localhost:${PORT}`);
});


