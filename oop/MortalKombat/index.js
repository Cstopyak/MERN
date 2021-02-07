// this page is where I create my fighters
const Fighter = require("./Fighter.js");
const Earthling = require("./Earthling.js");
//make a first fighter

var Scorpion = new Fighter("Scorpion", "Harpoon","Hellfire" );

// console.log(Scorpion.name);
// console.log(Scorpion.fatality);


var SubZero = new Fighter("SubZero", "Kata", "Abs zero");


var JohnnyCage = new Earthling("Johnny Cage", "Fists", "shadowKick");
// console.log(SubZero.name);
// console.log(SubZero.fatality);
Scorpion.showStats();
SubZero.showStats();
JohnnyCage.showStats();
