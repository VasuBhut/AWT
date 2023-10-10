const mongoose = require("mongoose");

const PersonalInfoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

const PersonalInfo = mongoose.model("PersonalInfo",PersonalInfoSchema)
module.exports = PersonalInfo;