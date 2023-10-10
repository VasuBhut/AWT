const mongoose = require("mongoose");

const projectSchema = mongoose.Schema({
  project_name: {
    type: String,
  },
  project_details: {
    type: String,
  },
  project_links: {
    type: String,
  },
  project_tags: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Project = mongoose.model("Project", projectSchema);
module.exports = Project;
