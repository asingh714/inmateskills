const cloudinary = require("cloudinary");
const cloudinaryStorage = require("multer-storage-cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});

const imageStorage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: "prisonerSkills",
  allowedFormats: ["jpg", "png"],
  transformation: [{ width: 500, height: 500, crop: "limit" }]
});

const docStorage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: "inmates",
  allowedFormats: ["jpg", "png", "pdf"],
})



module.exports = {
  imageStorage,
  docStorage
};