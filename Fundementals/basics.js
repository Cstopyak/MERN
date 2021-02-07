// variables

var teach = "nichole";
var age = 25;
var hobbies = ['gaming', 'drawing', 'sleeping'];
var hungry = false;
var instructor = {
    instruct : "nichole",
    age : 26,
    hobs : ['gaming', 'drawing', 'sleeping'],
    hungry : false,
}

// console.log(teach);


// Syntatic sugar
//let-- mostly for  forloops
for(let i = 0; i < 5; i++){
    console.log(i);
}

//const -- cant be changed or priv variable

const num = 9;
console.log(num);
// num = 7; // breaks code
// console.log(num); // will throw an error and will not work.


//destructuring
var h1 = hobbies[0];
var h3 = hobbies[2];
// console.log(h1);
// console.log(h3);

var [hob1,, hob3] = hobbies;
console.log(hob1);
console.log(hob3);



//Rest/Spread
// var arr2 = [...arr];
// arr2[3] = 20;
// console.log(arr);
// console.log(arr2);


//ternary allows you to write less code

if(hungry == true){
    console.log("i am hungry")
} else {
    console.log("im good");
}

hungry ? console.log( "i am hungry") : console.log ("im good");


// non-arrow function

function feed(){  //this is long way or basic function
    if(hungry){
        hungry = false;
    } else{
        hungry = true;
    }
}
feed();

hungry ? console.log( "i am hungry") : console.log ("im good");

//arrow function

const feedme = () => hungry ? hungry = false: hungry = true;
feedme();

hungry ? console.log( "i am hungry") : console.log ("im good");

const hello = (greet) => console.log(greet);
hello("wazzup");