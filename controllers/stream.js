const cloudinary = require("cloudinary").v2;

exports.stream = async (req, res) => {
  try {
    const public_id = req.params.id;
    var video = cloudinary.url(public_id, {
      resource_type: "video",
    });
    const x = video.search("id%3D");
    if (x !== -1) {
      video = video.substring(0, x) + video.substring(x + 5, video.length);
    }
    res.redirect(video);
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: "false",
      message: "Failed to load the video",
    });
  }
};