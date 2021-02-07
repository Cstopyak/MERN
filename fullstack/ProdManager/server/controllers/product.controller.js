const Product = require("../models/product.model");

// get all the product
module.exports.findAllProduct = (req, res) => {
    Product.find()
        .then(allProduct => res.json({allProduct: allProduct}))
        .catch(err => res.json({message: "Something went wrong when grabbin all products", error: err}))
}

//get one instance of product

module.exports.findOneProduct = (req, res) => {
    Product.findOne({_id: req.params._id})
        .then(oneProduct => res.json({oneProduct: oneProduct}))
        .catch(err => res.json({message: "Something went wrong when grabbin one product", error: err}))
}
// post a new product

module.exports.createProduct = (req, res) => {
    Product.create(req.body)
        .then(newProduct => res.json({newProduct: newProduct}))
        .catch(err => res.json({message: "Something went wrong when creating a product in the db", error: err}))
}

//delete a product

module.exports.deleteProduct = (req, res) => {
    Product.remove({_id: req.params._id})
        .then(res.json({message: "Product was removed."}))
        .catch(err => res.json({message: "Something went wrong when deleting a product in the db", error: err}))
}

// update a product

module.exports.updateProduct = (req, res) =>{
    Product.updateOne({_id: req.params._id}, {
        $set: {
            title: req.body.title,
            price: req.body.price,
            description: req.body.description
        }
    }, {runValidators: true})
    .then(oneProduct => res.json({oneProduct: oneProduct}))
    .catch(err => res.json({message: "something went wrong", error, err}))
}