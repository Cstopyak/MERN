const Card = require("./Card.js");

class Pokemon extends Card {
    constructor(name, power, hp, type, weakness, resistance) {
        super(name, power)
        this.hp = hp;
        this.type = type;
        this.weakness = weakness;
        this.resistance = resistance
    }

    attack(target) {
        var damage = this.power;
        if (target.weaknesss == this.type) {
            damage *= 2;
            target.hp -= damage;
        } else if (target.resistance == this.type) {
            damage /= 2;

            target.hp = damage;

        }
        console.log(`${this.name} attacks ${target.name}`);
        target.hp -= this.power;
        console.log(`${target.name} took ${this.power} damage and is left with ${target.hp} health!`);

    }
}




module.exports = Pokemon;