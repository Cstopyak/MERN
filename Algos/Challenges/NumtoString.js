//Write a function that takes an array of numbers and replaces any negative 
//values within the array with the string 'Dojo'. 
//For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].


//gameplan
// our goal is replace all negative numbers with 'Dojo'
//since we are looking through the array we will need a forloop
//once we loop through the array we have to check for the negative numbers


function NumtoString(arr){
    //looping through the array
    for( var i =0; i < arr.length; i++){
        //checking for negs
        if(arr[i] < 0){
            arr[i] = "Dojo";
        }

    }

    return arr;
}

console.log(NumtoString([-1,-3,2]));