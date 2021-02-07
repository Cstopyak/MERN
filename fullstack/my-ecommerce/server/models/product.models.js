const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Need to have title"],
        minlength: [2,"must be 2 characters or more for title"]
    },
    image: {
        type: String,
        required: [true, "Add a picture of your product"]
    },
    price: {
        type: Number,
        required: [true, "price is required"],
        min: [2, "cannot be free"]
    },
    description: {
        type: String,
        required: [true, "Need to have description"],
        minlength: [2,"must be 2 characters or more long"]
    },
    rating: {
        type: Number,
        required: [true, "please input a rating"]
    }
}, {timestamps: true})

//create a product collection inside of the db
const Product = mongoose.model("Ecommerce", ProductSchema); 

module.exports = Product;