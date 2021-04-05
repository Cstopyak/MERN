const aboutController= require("../models/about.model");

module.exports.getAbout = (req, res ) =>{
    aboutController.find()
    .then(allAbout => res.json({allAbout: allAbout}))
    .catch(err => res.json({message: "Something went wrong when gathering get req about", error: err}))
}

module.exports.findOneAbout = (req, res) => {
    Author.findOne({_id: req.params._id})
        .then(oneAuthor => res.json({oneAbout: oneAbout}))
        .catch(err => res.json({message: "Something went wrong when grabbin one About section", error: err}))
}

module.exports.addAbout = (req, res ) =>{
    aboutController.find()
    .then(allAbout => res.json({addAbout: addAbout}))
    .catch(err => res.json({message: "Something went wrong when adding about", error: err}))
}

module.exports.updateOneAbout = (req, res ) => {
    aboutController.findOneAndUpdate({_id: req.params._id}, req.body, {runValidators: true})
        .then(oneAbout => res.json({About: oneAbout}))
        .catch(err => res.json({message: "something went wrong when updating abouts", error: err}))
}

//deleting one thing
module.exports.deleteOneAbout = (req, res ) => {
    aboutController.deleteOne({_id: req.params._id})
        .then(res.json({message: "item deleted"}))
        .catch(err => res.json({message: "something went wrong when deleting", error: err}))
}