const util = require("util");
const multer = require("multer");
const maxSize = 10 * 1024 * 1024;

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    debugger
    cb(null, __basedir + "/resources");
  },
  filename: (req, file, cb, caseidForFileName) => {
    debugger
    console.log(file.originalname);
    var curdate = new Date();
    var randomnumber = Math.floor((Math.random()*100000) + 1)

    //cb(null, file.originalname+" Video"+`${curdate.toDateString()}`+".webm");
    if(file.mimetype == 'image/jpeg'){
      cb(null, file.originalname+'.jpeg');
    }
    else if(file.mimetype == 'video/webm'){
      cb(null, file.originalname+randomnumber+'-Video'+'.webm');
    }
    else if(file.mimetype == 'audio/wav'){
      cb(null, file.originalname+'-'+randomnumber+"-Audio"+'.wav')
    }
    else{
      cb(null, file.originalname)
    }
  },
});

// let uploadFile = multer({
//   storage: storage,
//   limits: { fileSize: maxSize },
// }).single("file");

let uploadFile = multer({
  storage: storage,
  limits: { fileSize: maxSize },
}).single("file");

let uploadFileMiddleware = util.promisify(uploadFile);

// var uploadFiles = multer({ storage: storage }).array("multi-files", 10);
//  var uploadFilesMiddleware = util.promisify(uploadFiles);
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