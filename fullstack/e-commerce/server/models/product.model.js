const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Need to have title"],
        minlength: [2,"must be 2 characters or more long"]
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
    }
}, {timestamps: true})

//create a product collection inside of the db
const Product = mongoose.model("Product", ProductSchema); 

module.exports = Product;