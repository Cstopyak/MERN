const Ninja = require("./Ninja.js");


class Sensei extends Ninja{
    constructor(name){
        super(name);
        this.name = name;
        this.health = 210;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }



    speakWisdom(){
        console.log("wisdom : " + this.wisdom);
    }
}





// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"




module.exports = Sensei;