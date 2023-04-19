const cloudinary = require("cloudinary").v2;

exports.upload = async (req, res, next) => {
  try {
    const { video } = req.body;
    const upload = await cloudinary.uploader.upload_large(video, {
      resource_type: "video",
    });
    res.status(200).json({
      status: "success",
      message: "Upload success!",
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: "false",
      message: "Upload failed!",
    });
  }
};