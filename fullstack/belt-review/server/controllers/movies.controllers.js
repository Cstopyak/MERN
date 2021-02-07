const Movie = require("../models/movies.models");


// Get all of our stuff
module.exports.findAll = (req, res ) => {
    Movie.find()
        .then(allMovie => res.json({Movie: allMovie}))
        .catch(err => res.json({message: "something went wrong when getting all Movies", error: err}))
}

// Get one thing
module.exports.findOneMovie = (req, res ) => {
    Movie.findOne({_id: req.params._id})
        .then(oneMovie => res.json({Movie: oneMovie}))
        .catch(err => res.json({message: "something went wrong when getting One Movies", error: err}))
}

//add to db
module.exports.CreateOneMovie = (req, res ) => {
    Movie.create(req.body)
        .then(addMovie => res.json({Movie: addMovie}))
        .catch(err => res.json({message: "something went wrong when getting adding Movies", error: err}))
}

//updating one db
module.exports.updateOneMovie = (req, res ) => {
    Movie.updateOne({_id: req.params._id}, req.body, {runValidators: true})
        .then(oneMovie => res.json({Movie: oneMovie}))
        .catch(err => res.json({message: "something went wrong when updating Movies", error: err}))
}

//deleting one thing
module.exports.deleteOneMovie = (req, res ) => {
    Movie.deleteOne()
        .then(res.json({message: "item deleted"}))
        .catch(err => res.json({message: "something went wrong when deleting", error: err}))
}