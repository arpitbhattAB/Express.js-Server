const dotenv = require("dotenv");
const cloudinary = require("cloudinary").v2;
const app = require("./app");

dotenv.config({ path: "./config.env" });
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

app.listen(process.env.PORT || 8000, () => {
  console.log(`Server listening on ${process.env.PORT || 8000}`);
});