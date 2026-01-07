const express = require("express");
const router = express.Router();
const HomeController = require("../controller/HomeController");

router.get("/", HomeController.Home);
router.get("/blog", HomeController.Product);
router.get("/addblog", HomeController.BlogCreation);
router.get("/blog/:id", HomeController.SingleBlog);

module.exports = router;
