const express = require("express");
const router = express.Router();
const downloadController = require("../Users/AB's PreDaToR/Desktop/Zigy_assignment/controllers/download.js");

router.route("/download/:id").get(downloadController.download);
module.exports = router;