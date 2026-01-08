const express = require("express");
const rotuer = express.Router();
const Blog = require("../models/BlogSchema");

class FormController {
  async createBlog(req, res) {
    console.log(req.files);
    try {
      const images = req.files.map((file) => ({
        filename: file.filename,
        originalname: file.originalname,
        path: file.path,
        mimetype: file.mimetype,
        size: file.size,
      }));

      // console.log(images);

      const data = await Blog.insertOne({
        title: req.body.title,
        description: req.body.description,
        images: images,
        price: req.body.price,
        location: req.body.location,
        country: req.body.location,
      });

      console.log(data);
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new FormController();
