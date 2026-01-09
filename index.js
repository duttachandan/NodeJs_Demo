require("dotenv").config();
const express = require("express");
const path = require("path");
const methodOverride = require("method-override");
// const bodyParser = require("body-parser");
const getProduct = require("./app/routes/getProduct");
const dataBase = require("./app/config/MongoConnect");


const app = express();
const PORT = 8002 || process.env.PORT;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
dataBase();

app.use(express.static(path.join(__dirname, "public")));
// app.use(express.static(path.join(__dirname, "uploads")));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(getProduct);

app.use((err, req, res, next) => {
  console.log(err.message);
  res.status(404 || err.status).send(err.message || "Error Occured");
});

app.listen(PORT, () => {
  console.log(`listen on http://localhost:${PORT}`);
});


