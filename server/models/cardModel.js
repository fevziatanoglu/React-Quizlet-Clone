const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    folderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Folder',
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
    word: {
        type: String,
        required: true,
    },
    meaning: {
        type: String,
        required: true,
    },
}, { collection: "cards" });


module.exports = mongoose.model("Card", userSchema);
