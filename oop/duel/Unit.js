const Card = require("./Card.js");
class Unit extends Card{
    constructor(name, cost, power, res){
        super(name, cost);
        this.power = power;
        this.res = res;
        
    }
    attack(target){
        if( target instanceof Unit ) {
            target.res -= this.power;
        } else {
            throw new Error( "Target must be a unit!" );
        
        }
        console.log(this.name + "attacked" + target.name + "reducing" + target.res + "remaining resiliance");
    }

}



module.exports = Unit;