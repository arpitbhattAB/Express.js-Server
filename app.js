const express = require("express");
const app = express();
const upload = require("./Users/AB's PreDaToR/Desktop/Zigy_assignment/routes/upload.js");
const stream = require("./Users/AB's PreDaToR/Desktop/Zigy_assignment/routes/stream.js");
const download = require("./Users/AB's PreDaToR/Desktop/Zigy_assignment/routes/download.js");

app.use(express.urlencoded({ extended: true }));

app.use("/api", upload);
app.use("/api", stream);
app.use("/api", download);

module.exports = app;