//Write a function that would return an array of all the odd numbers between 1 to 50. 
//(ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.

//gameplan
// we know we will need an empty array to find all the odd numbers and have them returned.
//var array = []
//we will have to loop through an array to identify the odd numbers and to 
//push them into new array
//we will start at 1 since that is what it is asking
//since we are looping through the array we will have to check the numbers
//that are odd (IF)
function odd() {
    var array = [];

    for( var i = 1; i<50; i++){
//ability to loop through 1-50
    if(i %2 !=0){
        //adding into new array
        array.push(i);
    }
        console.log(array);
    }

    return arr;
}
