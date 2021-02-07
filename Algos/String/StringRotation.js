// //String Rotation
// Given a string and a number, rotate a string by that number
// Ex: Given RotateString("Hello World",3) return "rldHello Wo"
// Ex: Given RotateString("Rotated",4) return "atedRot"

String= "Hello World",
substring="orld";

function Rotation(string, num){
    if(string.length != num){
        return false;
    }
    var string1 = string +string;
    return string1.indexOf(string) != -3
}
console.log(Rotation("hello world",3));



//approach num 1, using a front and back loop. 
const testStr = "welcome to the jungle"
const testStr2 = "hello world"

console.log("=============ver 1===================")
function rotateStr(string, num) {
    let newStr = "";
    for(let i = string.length-num; i < string.length; i++) {
        newStr = newStr + string[i];
    }
    for(let i = 0; i < string.length-num; i++) {
        newStr = newStr + string[i];
    }
    return newStr
}

console.log(rotateStr(testStr2, 4))
console.log(rotateStr(testStr, 8))

    console.log("=============ver 2===================")
// approach number 2, using slice
function rotateStr2(string, num) {

    let newStr = string
    let count = 0;
    for(let i = 0; i < string.length-num; i++) {
        newStr = newStr + string[i]
        count++
    }
    for(let j = 0; j < count; j++) {
        newStr = newStr.slice(1)
    }
    return newStr
}

console.log(rotateStr2(testStr2, 4))
console.log(rotateStr2(testStr, 8))
console.log("=============ver 3===================")
// approach number 3 using while loop and mutating original
function rotateStr3(string, num) {
    let count = 0;
    while(count < string.length-num) {
        string = string+string[0]
        string = string.slice(1)
        count++
    }
    return string
}

console.log(rotateStr3(testStr2, 4))
console.log(rotateStr3(testStr, 8))

