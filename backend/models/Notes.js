const mongoose = require("mongoose");
const { Schema } = mongoose;

const NotesSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User' // Assuming the user model is named 'User'
  },

  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    unique: true,
  },
  tag: {
    type: String,
    default: "General",
  },
  date: {
    type: String,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Notes", NotesSchema);
