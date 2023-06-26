const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {
        type: 'string',
        require: true,
        unique: true
    },
    email: {
        type: 'string',
        require: true,
        unique: true
    },
    password: {
        type: 'string',
        require: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
}, { collection: "users" });


module.exports = mongoose.model("User", userSchema);


