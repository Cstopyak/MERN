const Author = require("../models/author.models");

// get all the Authors
module.exports.findAllAuthor = (req, res) => {
    Author.find()
        .then(allAuthor => res.json({allAuthor: allAuthor}))
        .catch(err => res.json({message: "Something went wrong when grabbin all Authors", error: err}))
}

//get one instance of Author

module.exports.findOneAuthor = (req, res) => {
    Author.findOne({_id: req.params._id})
        .then(oneAuthor => res.json({oneAuthor: oneAuthor}))
        .catch(err => res.json({message: "Something went wrong when grabbin one Author", error: err}))
}
// post a new Author

module.exports.createAuthor = (req, res) => {
    Author.create(req.body)
        .then(newAuthor => res.json({newAuthor: newAuthor}))
        .catch(err => res.json({message: "Something went wrong when creating a Author in the db", error: err}))
}

//delete a Author

module.exports.deleteAuthor = (req, res) => {
    Author.remove({_id: req.params._id})
        .then(res.json({message: "Author was removed."}))
        .catch(err => res.json({message: "Something went wrong when deleting a Author in the db", error: err}))
}

// update a Author

module.exports.updateAuthor = (req, res) =>{
    Author.updateOne({_id: req.params._id}, {
        $set: {
            name: req.body.name
            
        }
    }, {runValidators: true})
    .then(oneAuthor => res.json({oneAuthor: oneAuthor}))
    .catch(err => res.json({message: "something went wrong", error, err}))
}