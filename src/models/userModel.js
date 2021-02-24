const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let userSchema = new Schema({
    email: {
        type: String,
        required : "L'email est requis",
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('User', userSchema);