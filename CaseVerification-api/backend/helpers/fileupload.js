const multer = require("multer");

const diskStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    debugger;
    cb(null, "images");
  },
  
  filename: (req, file, cb) => {
    debugger;
    const mimeType = file.mimetype.split("/");
    const fileType = mimeType[1];
    const fileName = file.originalname + "." + fileType;
    cb(null, fileName);
  },
});

const fileFilter = (req, file, cb) => {
  debugger;
  const allowedMimeTypes = ["image/png", "image/jpeg", "image/jpg"];
  allowedMimeTypes.includes(file.mimetype) ? cb(null, true) : cb(null, false);
};

const filestorage = multer({
  storage: diskStorage,
  fileFilter: fileFilter,
}).single("image");

module.exports = filestorage;
