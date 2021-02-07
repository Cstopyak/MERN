const Joke = require("../models/jokes.model");

module.exports.findallJokes = (req, res) => {
    Joke.find()
    .then(allJokes => res.json({jokes: allJokes}))
    .catch(err=> res.json({message: "oops you have no jokes", error: err}));
}

module.exports.findOneJoke = (req, res) => {
    Joke.findOneJoke({_id: req.params.id})
    .then(oneJoke => res.json({joke: oneJoke}))
    .catch(err=> res.json({message: "oops you have no jokes find one", error: err}));
}

module.exports.createNewJoke = (req, res) => {
    Joke.create(req.body)
    .then(newlyCreatedJoke => res.json({ Joke: newlyCreatedJoke }))
    .catch(err => res.json({ message: "Something went wrong creating contr", error: err }));
};

module.exports.updateExistingJoke = (req, res) => {
    Joke.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(updatedJoke => res.json({ Joke: updatedJoke }))
    .catch(err => res.json({ message: "Something went wrong updating", error: err }));
};

module.exports.deleteAnExistingJoke = (req, res) => {
    Joke.deleteOneJoke({ _id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch(err => res.json({ message: "Something went wrong deleting", error: err }));
};