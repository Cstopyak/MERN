const Card = require("./Card.js");

class Effect extends Card{
    constructor(name,cost, et, md){
        super(name, cost);
        this.effect_text = et;
        this.magnitude = md;
    }
    apply_affect(target){
        if ( this.stat_affected == "hp"){
            target.md += this.power;
            console.log(`${target.name} was healed of ${this.power} damage!`)
            } else if(this.stat_affected == "power"){
                target.power += this.power;
            }
    }
}




module.exports = Effect;