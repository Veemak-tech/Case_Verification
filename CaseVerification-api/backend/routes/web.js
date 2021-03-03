const express = require("express");
const router = express.Router();
const { body } = require('express-validator');


// const homeController = require("../controllers/home");
const uploadController = require("../controllers/uploadcontroller");
const upload = require("../middleware/upload");

// const router = (app) => {
//   router.get("/", homeController.getHome);

  
//   return app.use("/", router);
// };
router.post("/upload", upload.single("file"), uploadController.uploadFiles);

module.exports = router;

