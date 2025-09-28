const express = require("express");
const { createMessage } = require("../controller/messageController");

const router = express.Router();

router.post("/schedule", createMessage);

module.exports = router;
