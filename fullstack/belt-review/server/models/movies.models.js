const mongoose = require("mongoose");

const beltSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "you need a title"],
        minlength: [2, "movie must be atleast 2 characters long"]
    },
    releaseDate: {
        type: Date,
        required: [true, "movie needs to have release date"]
    },
    MoviePoster: {
        type: String,
        required:
        [true, "movie needs a poster"]
    },
    description:{
        type: String,
        required: [true, "movie needs a description"]
    },
    category: {
        type: Object
    }
}, {timestamps: true})

const Belt = mongoose.model("Belt", beltSchema);

module.exports = Belt;