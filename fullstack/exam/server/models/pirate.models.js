const mongoose = require("mongoose");
var uniqueValidator = require('mongoose-unique-validator');


const examSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: [true, "you need a name"],
        minlength: [2, " must be atleast 2 characters long"]
    },
    pirateImage: {
        type: String,
        required: [true, "Arg you need a profile pic to be aboard!"]
    },
    treasureChest: {
        type: Number,
        required: [true, "you need a some treasure"],
        minlength: [2, " ust have atleast 2 treasure to join"]
    },
    pirateCatchPhrase: {
        type: String,
        required: [true, "Pirate needs a catch phrase"]
    },
    crewPosition: {
        type: String
    },
    Captain: {
        type: String,
        // required: [true, "There can only be one Captain!"],
        
    },
    // pegLeg:{
    //     type: Boolean
    // },

    crewItems: {
        type: Object
    }

}, {timestamps: true})

examSchema.plugin(uniqueValidator, { type: 'mongoose-unique-validator' });
const Exam = mongoose.model("Exam", examSchema);

module.exports = Exam;