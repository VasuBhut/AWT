// src/routes/upload.js
const express = require("express");
const multer = require("multer");
const path = require("path");
const router = express.Router();
const fs = require("fs");
// Image Upload
const imageStorage = multer.diskStorage({
  destination: "src/images",
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});

const imageUpload = multer({
  storage: imageStorage,
  limits: { fileSize: 1000000 },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(png|jpg|JPG)$/)) {
      return cb(new Error("Please upload an Image"));
    }
    cb(null, true);
  },
});

// For Single image upload
router.post(
  "/uploadImage",
  imageUpload.single("image"),
  (req, res) => {
    console.log("Single image uploaded");
    res.send(req.file);
  },
  (error, req, res, next) => {
    console.error("Error uploading single image:", error.message);
    res.status(400).json({ error: error.message });
  }
);

router.get("/getimages", (req, res) => {
  res.sendFile("E:/Darsh/AWT/Practical File/Pr19/views/getimages.html");
});

router.get("/images", (req, res) => {
  const directoryPath = path.join("src/images");
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      console.error("Error getting images:", err.message);
      return res
        .status(500)
        .json({ error: `Could not retrieve images ${err}` });
    }
    const images = files.map((file) => `../src/images/${file}`);
    res.json({ images: images });
  });
});

// For Multiple image upload
router.post(
  "/uploadBulkImage",
  imageUpload.array("images", 4),
  (req, res) => {
    console.log("Multiple images uploaded");
    res.send(req.files);
  },
  (error, req, res, next) => {
    console.error("Error uploading multiple images:", error.message);
    res.status(400).json({ error: error.message });
  }
);

// Video Upload
const videoStorage = multer.diskStorage({
  destination: "src/videos",
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});

const videoUpload = multer({
  storage: videoStorage,
  limits: { fileSize: 10000000 },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(mp4|MPEG-4)$/)) {
      return cb(new Error("Please upload a Video"));
    }
    cb(null, true);
  },
});

router.post(
  "/uploadVideo",
  videoUpload.single("video"),
  (req, res) => {
    console.log("Video uploaded");
    res.send(req.file);
  },
  (error, req, res, next) => {
    console.error("Error uploading video:", error.message);
    res.status(400).json({ error: error.message });
  }
);
router.get("/uploadImage", (req, res) => {
  res.sendFile(path.join(__dirname, "../../views/image.html"));
});
router.get("/uploadBulkImage", (req, res) => {
  res.sendFile(path.join(__dirname, "../../views/multi_image.html"));
});
router.get("/uploadVideo", (req, res) => {
  res.sendFile(path.join(__dirname, "../../views/video.html"));
});

module.exports = router;
