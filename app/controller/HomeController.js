const MongoConnect = require("../config/MongoConnect");
const Blog = require("../models/BlogSchema");

MongoConnect();

class HomeController {
  async Home(req, res) {
    try {
      res.render("index", {
        title: "AirBnb Home",
      });
    } catch (error) {
      console.log(error);
    }
  }

  async Product(req, res) {
    try {
      const data = await Blog.find();
      // console.log(data);
      res.render("user/product", {
        title: "Product",
        data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async BlogCreation(req, res) {
    try {
      res.render("user/addBlog", {
        title: "AddBlog",
      });
    } catch (error) {
      console.log(error);
    }
  }

  async SingleBlog(req, res) {
    try {
      const data = await Blog.find({ _id: req.params.id });
      console.log(data);
      res.render("user/singleBlog", {
        title: data[0].title,
        data,
      });
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new HomeController();
