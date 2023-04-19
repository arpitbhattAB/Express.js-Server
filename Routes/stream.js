const express = require("express");
const router = express.Router();
const streamController = require("../Users/AB's PreDaToR/Desktop/Zigy_assignment/controller/stream.js");

router.route("/stream/:id").get(streamController.stream);
module.exports = router;