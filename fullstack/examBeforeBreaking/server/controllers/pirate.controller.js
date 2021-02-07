const Exam = require("../models/pirate.models");

// Get all of our stuff
module.exports.findAll = (req, res ) => {
    Exam.find().sort({Name:1})
        .then(allPirate => res.json({Pirate: allPirate}))
        .catch(err => res.json({message: "something went wrong when getting all things", error: err}))
}

// Get one thing
module.exports.findOnePirate = (req, res ) => {
    Exam.findOne({_id: req.params._id})
        .then(onePirate => res.json({Pirate: onePirate}))
        .catch(err => res.json({message: "something went wrong when getting One thing", error: err}))
}

//add to db
module.exports.CreateOnePirate = (req, res ) => {
    Exam.create(req.body)
        .then(addPirate => res.json({Pirate: addPirate}))
        .catch(err => res.json({message: "something went wrong when getting adding things", error: err}))
}

//updating one db
module.exports.updateOnePirate = (req, res ) => {
    console.log("INNN SERVER UPDATE", req.body)
    Exam.findOneAndUpdate({_id: req.params._id}, req.body, {runValidators: true})
        .then(onePirate => res.json({Pirate: onePirate}))
        .catch(err => res.json({message: "something went wrong when updating things", error: err}))
}

//deleting one thing
module.exports.deleteOnePirate = (req, res ) => {
    Exam.deleteOne({_id: req.params._id})
        .then(res.json({message: "item deleted"}))
        .catch(err => res.json({message: "something went wrong when deleting", error: err}))
}