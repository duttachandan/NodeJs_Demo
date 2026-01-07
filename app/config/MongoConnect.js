const mongoose = require("mongoose");
require("dotenv").config();

const MONGO_LINK = process.env.MONGO_LINK;

console.log(MONGO_LINK);

const dataBase = () =>
  mongoose
    .connect(`${MONGO_LINK}`)
    .then(() => {
      console.log("mongodb connected");
    })
    .catch((err) => {
      console.log(err);
    });

module.exports = dataBase;
