const express = require("express");
const router = express.Router();
const uploadController = require("../Users/AB's PreDaToR/Desktop/Zigy_assignment/controller/upload.js");

router.route("/upload").post(uploadController.upload);
module.exports = router;