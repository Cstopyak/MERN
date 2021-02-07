const Unit = require("./Unit.js");
const Effect = require("./Effect.js");


var RedBelt = new Unit("Red Belt Ninja", 3, 3, 4)


var BlackBelt = new Unit("Black Belt Ninja", 4 ,5, 4)

const Algo = new Effect("Algo", 2,"increase res by 3", 3)
const UPR = new Effect("UPR", 1, "reduce targets resilience by 2", -2)
const PP = new Effect("Pair Programming", 3, "increase targets power by 2", 2)


console.log(RedBelt);
console.log(BlackBelt);
console.log(Algo);
console.log(UPR);
console.log(PP);

// console.log(`${target.name} lost ${power}`);