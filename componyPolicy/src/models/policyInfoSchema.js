const mongoose = require("mongoose");

const policyInfoSchema = new mongoose.Schema({
  policyNumber: { type: String, required: true, unique: true },
  startDate: { type: Date },
  endDate: { type: Date },
  policyCategory: { type: mongoose.Schema.Types.ObjectId, ref: "PolicyCategory" },
  company: { type: mongoose.Schema.Types.ObjectId, ref: "PolicyCarrier" },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
}, { timestamps: true });

module.exports = mongoose.model("PolicyInfo", policyInfoSchema);
