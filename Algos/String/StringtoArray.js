//String to Word Array
// Given a string, return an array with each individual word in it
// Ex: Given "Hello World" return ["Hello", "World"]
// Ex: Given "Happy Monday everyone" return ["Happy", "Monday", "everyone"]

// //Reverse Word Order
// Given a string, return a new string that has all the words reversed (NOT the letters)
// Ex: Given "Hello World" return "World Hello"
// Ex: Given "Happy Monday everyone" return "everyone Monday Happy"

// function StringtoArr(string){


// }

function Reverse(string){
    
    let rstring = '';
    for( let i = string.length-1; i >= 0; i--){
        rstring += string[i];
        
    }
    return string == rstring;
    
}
string = "Hello World"
console.log(Reverse("Hello World"));


