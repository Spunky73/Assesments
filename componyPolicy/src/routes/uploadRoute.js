const express = require("express");
const { uploadFile } = require("../controller/uploadFile");
const router = express.Router();

router.post("/upload-file", uploadFile);
module.exports = router;
