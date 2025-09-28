const express = require("express");
const uploadRoutes = require("./routes/uploadRoute");
const policyInfo = require("./routes/policyInfo")
const app = express();
app.use(express.json());

// Routes
app.use("/api/upload", uploadRoutes);
app.use("/api/policy-info",policyInfo)
module.exports = app;

