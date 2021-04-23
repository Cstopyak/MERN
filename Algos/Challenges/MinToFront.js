// function MinToFront(arr){
    
//     var min = arr[0];
    
//     for(var i =1; i < arr.length; i++){
        
//         if( arr[i] < min) {
//             min = arr[i];
//         }
        
//     }
    
//     var newArr= [ min];
//     return newArr;
// }
// console.log(MinToFront([4,2,1,3,5]));


//gameplan 
//we will have to replace the current array with a temporary one to displace the numbers in the array
//we will have to loop through the array to identify the lowest number
// we will have to check to each array against each other
//we will have to then loop through again and check each position
function MinToFront(arr) {
    temp = arr[0]
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            temp = arr[i]
            arr[i] = arr[i + 1]
            arr[i + 1] = temp
            console.log(arr)
            for (var x = i; x > 0; x--) {
                if (arr[x] < arr[x - 1]) {
                    temp = arr[x]
                    arr[x] = arr[x - 1]
                    arr[x - 1] = temp
                }
            }
        }
    }
    return arr
}

var arr = [4,2,1,3,5];

console.log(MinToFront(arr));

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