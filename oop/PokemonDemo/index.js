const Pokemon = require("./Pokemon.js");
const Trainer = require("./Trainer.js");


var Charmander = new Pokemon("Charmander", 10, 50, "Fire", "water", "none")

var Bulbasaur = new Pokemon("Bulbasaur", 20, 40, "grass", "fire","none")

const Potion = new Trainer("potion", 20, "Removes 20 damage from 1 pokemon", "hp");


console.log(Charmander);