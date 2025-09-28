const mongoose = require("mongoose");

const policyCarrierSchema = new mongoose.Schema({
  companyName: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model("PolicyCarrier", policyCarrierSchema);
