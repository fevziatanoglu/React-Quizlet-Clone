const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    cardAmount:{
        type: Number,
        default: 0
    }
}, { collection: "folders" });


module.exports = mongoose.model("Folder", userSchema);
