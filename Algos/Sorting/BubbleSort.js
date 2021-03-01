//Bubble Sort
// Given an array of numbers, sort the numbers by swapping adjacent numbers that are in the wrong order
Ex:
// [5,9,2,7,6] -> [5,2,7,6,9] -> [2,5,7,6,9] -> [2,5,6,7,9]


//Selection Sort
// Given an array of numbers, sort the numbers by finding the smallest number in the unsorted part and shift it to the beginning
// Ex:
// [7,5,2,8,4] -> [2,7,5,8,4] -> [2,4,7,5,8] -> [2,4,5,7,8]

//we will have to iterate through array multiple times.

//going to have to perform swaps

//1st time we will need to traverse form start to end

// check to see if current number and next numbers in the correct spot (sorted)

//if not then swap the numbers in place

//once we get to end ask did we swap or is everything sorted?

def BubbleSort(array);
    sorted = false
    while (!sorted){
        sorted = true;
        for i in Range(len(array) -1) // going to before last number and checking current to next
            if (array[i] > array(i + 1))//check to see if current number is greater then next num. if they are out of order
            swap(i, i+1, array)
            sorted = False
    return array
    }
    array = [5,9,2,7,6]
    console.log(BubbleSort(array))


//selection sort
function SelectSort(arr){
    for(var i = 0; i < arr.legnth; i++){
        var idx = i;
        for(var j = i+1; j< arr.legnth; j++){
            if(arr[idx] > arr[j]){
                idx = j;
            }
        }
        var temp = arr[i];
        arr[i] = arr[idx];
        arr[idx] = temp;
    }
    return arr;
}
a1 = [5,9,2,7,6];
console.log(SelectSort(a1));


//bubble sort example

function bubble_sort(arr) {
    temp = arr[0]
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            temp = arr[i]
            arr[i] = arr[i + 1]
            arr[i + 1] = temp
            for (var x = i; x > 0; x--) {
                if (arr[x] < arr[x - 1]) {
                    temp = arr[x]
                    arr[x] = arr[x - 1]
                    arr[x - 1] = temp
                }
            }
        }
    }
    console.log(arr)
    return arr
}

var arr = [8, 5, 2, 9, 5, 6, 3];

bubble_sort(arr)

//bubble sort example two 

function Bubble(arr){
    let j = 0;
    while(j < arr.length-1){
        for(var i = 0; i <arr.length-1; i++){
            if(arr[i] > arr[i+1]){
                let temp = arr[i+1];
                arr[i+1] = arr[i];
                arr[i] = temp;
            }
        }
        j++;
    }
    return arr;
}
console.log(Bubble([5,3,8,4,0]));


