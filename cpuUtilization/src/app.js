const express = require("express");
const messageRoutes = require("./routes/messageRoutes");

const app = express();
app.use(express.json());

// Routes
app.use("/api/messages", messageRoutes);

module.exports = app;

