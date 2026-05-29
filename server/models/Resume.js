const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    fileName: {
        type: String,
        required: true
    },

    filePath: {
        type: String,
        required: true
    },

    skills: {
        type: [String],
        default: []
    },

    atsScore: {
        type: Number,
        default: 0
    },

    uploadedAt: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model(
    "Resume",
    resumeSchema
);