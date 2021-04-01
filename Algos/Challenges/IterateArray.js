//Write a function that returns the sum of all the values within an array. 
//(e.g. [1,2,5] returns 8, [-5,2,5,12] returns 14)

//gameplan
//our goal is to return 8
// we know that we need to loop through the array [1,2,5]
//in order to do this we need to start at 0
// we will have to add the sum to create a new some when iterating



function iterateArr(arr){
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    return sum;
}
console.log(iterateArr([1,2,5]));