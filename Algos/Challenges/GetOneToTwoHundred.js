

//gameplan
//find all numbers from 1-255
//we will need an empty array to push through
//we will need to loop through an array from 256
//our iterator will start at 1 because we do not need 0.

function array(){
    var arr= [];
    for(var i = 1; i <256; i++){
        arr.push(i);
    }
    return arr;
}
console.log(array());