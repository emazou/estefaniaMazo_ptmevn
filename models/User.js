const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        min: 6,
    },
    logged: {
        type: Boolean,
        required: true
    },
    verified: {
        type: Boolean,
        required: true
    },
    code: {
        type: String,
        required: true
    }
});

const User = mongoose.model(
    'users',
    userSchema,
);
module.exports = User;