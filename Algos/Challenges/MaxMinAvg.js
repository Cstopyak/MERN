//Given an array with multiple values, write a function that 
//returns a new array that only contains the maximum, minimum, 
//and average values of the 
//original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])

//gameplan
//we need to find the max min and avg of the array
//we will need to variables for max, min , and the sum in order to div to get avg
//they should start out at arr of 0
//we will need to loop through the array to identify max min and avg
//we will check to see if what numbers would equal our variables


function MaxMinAvg(arr){
    var max = arr[0];
    var min = arr[0];
    var sum = arr[0];
    for(var i =1; i < arr.length; i++){
        if (arr[i] > max){
            max= arr[i];
        }
        if( arr[i] < min) {
            min = arr[i];
        }
        sum = sum + arr[i];
    }
    var avg = sum / arr.length;
    var newArr= [max, min, avg];
    return newArr;
}
console.log(MaxMinAvg([1,5,10,-2]));