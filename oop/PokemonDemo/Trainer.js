const Card = require("./Card.js");

class Trainer extends Card {
    constructor(name, power, et, sa){
        super(name, power);
        this.effect_text = et;
        this.stat_affected = sa;
    }

    apply_affect(target){
        if ( this.stat_affected == "hp"){
        target.sa += this.power;
        console.log(`${target.name} was healed of ${this.power} damage!`)
        } else if(this.stat_affected == "power"){
            target.power += this.power;
        }
    }
}


module.exports = Trainer;