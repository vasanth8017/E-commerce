const cloudinary = require('cloudinary').v2

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.MONGODB_SECRET,
  api_secret: process.env.CLOUDINARY_API_SECRET,

})

module.exports = cloudinary;