const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    full_name: String,
    email: {
    type: String,
    required: true,
    unique: true,
    },
    password: String,
    phone_number: Number,
});

const User = mongoose.model('User', userSchema);
module.exports = User
