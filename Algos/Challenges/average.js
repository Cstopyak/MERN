//Given an array with multiple values, write a function that returns the average 
// of the values in the array. 
//(e.g. for [1,3,5,7,20] average is 7.2)

//gameplan

//our goal is to get the average of 7.2
//we will have to loop through the array to identify the numbers within the indexes
// our index will have to start at 0 and start adding the numbers up
//our sum should then start at 0
// once all the sum from the iterator are together, we have to divide them next.



function findAvg(arr){
var avg;
var sum = 0;
var arr = [1,3,5,7,20];
for (var i = 0; i < arr.length; i++){
    //ability to loop through the array
    sum = sum + arr[i]
    console.log(sum);
}
    avg= sum / arr.length;
    return avg;
}
