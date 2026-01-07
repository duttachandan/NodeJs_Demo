const mongoose = require("mongoose");

const BlogSchema = mongoose.Schema({
  title: String,
  description: String,
  image: [String, String],
  price: Number,
  location: String,
  country: String,
});


const Blog = mongoose.model("Person", BlogSchema);
module.exports = Blog;
