const Fighter = require("./Fighter.js");

class Earthling extends Fighter{
    constructor(name, weapon, fatal){
            super(name, weapon, fatal);
            this.origin = "Earth";
    }
    showStats(){
        super.showStats();
        console.log("Origin: " + this.origin);
    }
}

module.exports = Earthling;