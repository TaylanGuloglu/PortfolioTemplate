const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
    name: {
      type: String,
      unique: true,
      required: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
        type: String,
        required: true
      },
    link:{
        type:String,
        required:true
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  });

  const Project = mongoose.model('Project', ProjectSchema);
  module.exports = Project;