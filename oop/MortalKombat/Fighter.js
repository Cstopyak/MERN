class Fighter {
    constructor(name, weapon, fatal) {
        this.name = name;
        this.health = 100;
        this.weapon = weapon;
        this.fatality = fatal;
    }


    showStats() {
        console.log("Name : " + this.name);
        console.log("health :" + this.health);
        console.log("weapon :" + this.weapon);
        console.log("fatality :" + this.fatality);
        console.log("*********************");
    }
}





module.exports = Fighter;