const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Admin = new Schema({
  id: { type: String },
  username: { type: String },
  name: { type: String },
  password: { type: String }
});

module.exports = mongoose.model("Admin", Admin);
