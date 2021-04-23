//Array Partition
// Given an array of unsorted numbers and a pivot index, sort the array so that all values less than the value at the pivot index are on the left of the value and all values greater than the pivot value are on the right
// Ex: 
// Given var sortArr = [7,9,1,6,2,10,8,4,3] and a pivot index of 3, return [1,2,4,3,6,9,7,10,8]
// Notice how the pivot index of 3 lands on the value of 6 originally and then sorts all numbers in the array around being less than or greater than the number 6
// It is OKAY for the pivot to move, just keep track of the original VALUE of the pivot
// Starter code:
function partition(arr, pivot){
    var piv = arr[pivot];
    var marker = pivot;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > piv && i < marker){
            var larger = arr[i];
            for(let j = i; j <= marker; j++){
                arr[j] = arr[j+1];
            }
            arr[marker] = larger;
            marker--;
            i--;
        }
        if(arr[i] <= piv && i > marker){
            var smaller = arr[i];
            for(let k = i; k >= marker; k--){
                arr[k] = arr[k-1];
            }
            arr[marker] = smaller;
            marker++;
        }
    }
    return arr;
}


//Quick sort 
// Use the ideas from partition to create a quick sort. Basically, run partitions until an array is completely sorted
// Partition: given an array and a pivot index, sort the array around the value at the original pivot point


function QuickSort(arr, pivot){
    partition(arr, 0, arr.length - 1);
    return arr;
}
console.log(QuickSort(sortArr([7,9,1,6,2,10,8,4,3])))




sortArr = [7,9,1,6,2,10,8,4,3]