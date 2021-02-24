const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let commentSchema = new Schema({
    name: {
        type: String,
        required : "Le nom est requis"
    },
    message: {
        type: String,
        required : "Le contenu est requis"
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    id_post : {
        type: String
    }
});

module.exports = mongoose.model('Comment', commentSchema);