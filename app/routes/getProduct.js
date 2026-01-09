const express = require("express");
const router = express.Router();
// const multer = require("multer");

// controllers
const HomeController = require("../controller/HomeController");
const FormController = require("../controller/formController");

// helpers
const ImageUploads = require("../helper/imageUpload");

router.get("/", HomeController.Home);
router.get("/blog", HomeController.Product);
router.get("/addblog", HomeController.BlogCreation);
router.get("/blog/:id", HomeController.SingleBlog);
router.post(
  "/createblog",
  ImageUploads.single("image"),
  FormController.createBlog
);

module.exports = router;
