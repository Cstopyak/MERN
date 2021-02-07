// GIVEN
// console.log(example);
// var example = "I'm the example!";
// AFTER HOISTING BY THE INTERPRETER
// var example;
// console.log(example); // logs undefined
// example = "I'm the example!";
//1

console.log(hello);                                   
var hello = 'world';                                 
//going to be undefined cause log is up top

//2
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
//var needle 
// testing function
// console.log is going to log magent cause needle = magnet

//3
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

// var brendan is going to equal super cool
// function print is gooing to log supercool cause brendan = supercool

//4
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

//var food = chicken
// this is going to log chicken

//funct eat

// food logging half chicken


