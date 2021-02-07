//Union sorted arrays
// Given two arrays, create a union of the two WITHOUT duplicating values
// Ex: given [1,2,2,3,4] and [1,2,5,7] return [1,2,2,3,4,5,7] 
// Ex: given [2,3,4,4,6] and [1,2,4,4,4,4,7] return [1,2,3,4,4,4,4,6,7]



// end will return a new array
//seems like we will need to loop through each array
// at the end we will have to check to see if same values are in the last array
function unionSorting(array1, array2){
    var newArray =[];
    for(var i = 0; i < arguments.length; i ++){
        var arrayArguments = arguments [i];
        for (var x = 0; x < arrayArguments.length; x ++){
            if(newArray.indexOf(array1) < 0){
                newArray.push(array2);
            }
        }
    }
    return newArray;
}

console.log(unionSorting([1,2,2,3,4], [1,2,5,7]));