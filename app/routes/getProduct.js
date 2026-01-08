const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const HomeController = require("../controller/HomeController");
const FormController = require("../controller/formController");

router.get("/", HomeController.Home);
router.get("/blog", HomeController.Product);
router.get("/addblog", HomeController.BlogCreation);
router.get("/blog/:id", HomeController.SingleBlog);
router.post(
  "/createblog",
  upload.array("image", 2),
  FormController.createBlog
);

module.exports = router;
