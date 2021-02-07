const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Need to have title"],
        minlength: [2,"must be 2 characters or more long"]
    }
}, {timestamps: true})

//create a product collection inside of the db
const Author = mongoose.model("Author", AuthorSchema); 

module.exports = Author;