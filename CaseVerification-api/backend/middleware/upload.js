const util = require("util");
const multer = require("multer");
const maxSize = 10 * 1024 * 1024;

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    debugger
    cb(null, __basedir + "/resources/static/assets/uploads");
  },
  filename: (req, file, cb) => {
    console.log(file.originalname);
    cb(null, file.originalname);
  },
});

let uploadFile = multer({
  storage: storage,
  limits: { fileSize: maxSize },
}).single("file");

let uploadFileMiddleware = util.promisify(uploadFile);
module.exports = uploadFileMiddleware;




// -------------------------------------------------Multiple FIle Upload----------------------

// const util = require("util");
// const path = require("path");
// const multer = require("multer");

// var storage = multer.diskStorage({
//   destination: (req, file, callback) => {
//     callback(null, path.join(`${__dirname}/../uploads`));
//   },
//   filename: (req, file, callback) => {
//     const match = ["image/png", "image/jpeg"];

//     if (match.indexOf(file.mimetype) === -1) {
//       var message = `<strong>${file.originalname}</strong> is invalid. Only accept png/jpeg.`;
//       return callback(message, null);
//     }

//     var filename = `${Date.now()}-bezkoder-${file.originalname}`;
//     callback(null, filename);
//   }
// });

// var uploadFiles = multer({ storage: storage }).array("multi-files", 10);
// var uploadFilesMiddleware = util.promisify(uploadFiles);
// module.exports = uploadFilesMiddleware;