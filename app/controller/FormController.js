const express = require("express");
const rotuer = express.Router();
const Blog = require("../models/BlogSchema");
// const cloudinary = require("cloudinary").v2;

class FormController {
  async createBlog(req, res) {
    try {
      const { title, description, price, location, country } = req.body;

      const blogdata = new Blog({
        title,
        description,
        price,
        location,
        country,
      });

      if (req.file) {
        blogdata.image = req.file.path;
      }

      const data = await blogdata.save();
      console.log(data);

      return res.redirect("/blog");
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new FormController();
