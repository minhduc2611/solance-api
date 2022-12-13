const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  role: {
    type: String,
    require: true,
  },
});

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  tasks: [
    {
      name: { type: String, required: true },
      description: { type: String, required: true },
    },
  ],
});

let User = mongoose.model("User", userSchema);
let Project = mongoose.model("Project", projectSchema);

module.exports = { User, Project };
