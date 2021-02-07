// Ninja class
class Ninja {
    constructor(name,) {
        this.name = name;
        this.health = 0;
        this.speed = 3;
        this.strength = 3;


    }

sayName(){
    console.log("name : " + this.name);
}

    showStats() {
        console.log("health : " + this.health);
        console.log("speed : " + this.speed);
        console.log("strength : " + this.strength);
    }

    drinkSake(){
        console.log("health : " + 10);
    }
}



const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();

module.exports = Ninja;