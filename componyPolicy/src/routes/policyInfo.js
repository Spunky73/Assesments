const express = require("express");
const { getPolicyInfo } = require("../controller/getPolicyInfo");
const router = express.Router();

router.get("/policy/:username", getPolicyInfo);
module.exports = router;
