const cloudinary = require("cloudinary").v2;

exports.download = async (req, res, next) => {
  const public_id = req.params.id;
  var video_url = cloudinary.utils.video_url(public_id);
  const x = video_url.search("id%3D");
  if (x !== -1) {
    video_url =
      video_url.substring(0, x) +
      "fl_attachment/" +
      video_url.substring(x + 5, video_url.length);
  }
  res.redirect(video_url);
};