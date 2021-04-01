//Write a function that will swap the first and last values of any given array. 
//The default minimum length of the array is 2. 
//(e.g. [1,5,10,-2] will become [-2,5,10,1]).

//gameplan
//our goal is to have our output become [-2,5,10,1]
//we are going to need another variable to keep track of the array.
//since we know -2 and 1 need to swap we need to take the indexes and subtract
// 

function swap(arr){
    var temp = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length -1] = temp;
    return arr;
}
console.log(swap([-2,5,10,1]));