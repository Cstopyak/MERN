// insertion sort 
//Sorted
// |  5-1 is unsorted
//[9,5,2,7,1]

//Insertion Sort
// Given an array of numbers, sort the numbers by placing values into their correct position at the front (sorted part) of the array
// Ex:
// [9,5,2,7,1] -> [5,9,2,7,1] -> [2,5,9,7,1] -> [2,5,7,9,1] -> [1,2,5,7,9]
 array = [9, 5, 2, 7, 1]
function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        let x = i;
        while (x > 0 && array[x] < array[x - 1]) {  //havnt current num trying to insert is greater than 0, and current  num out of position/ eventually going to loop backwords with current number
            swap(x, x - 1, array);
            x -= 1;
        }
    }
    
    return array;
    
}


function swap(i, x, array) {
    const temp = array[x];
    array[x] = array[i];
    array[i] = temp;
}
console.log(insertionSort([9, 5, 2, 7, 1]))

// ex 2

function insert(arr){
    var temp 
    var index = 1
    for(var i = 0; i< arr.length; i++){
        for( var j = index; j >=0; j--){
            if(arr[j]<arr[j-1]){
                temp = arr[j]
                arr[j] = arr[j-1]
                arr[j-1] = temp
            }
        }
        index++ 
        console.log('temp', temp)
        console.log ('index', index)
    }
    return arr
}
console.log(insert([9,5,2,7,1]))
