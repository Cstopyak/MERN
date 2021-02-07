//Combine arrays
// Given two arrays that are sorted, combine them into one sorted array
// Ex: 
// var sort1 = [2,4,6,8,10];
// var sort2 = [1,3,9,11,13];
// Should return -> [1,2,3,4,6,8,9,10,11,13]

function Combine(temp){
let arr1 = [2,4,6,8,10];
let arr2 = [1,3,9,11,13];
temp = []
temp.push(arr1, arr2);

}

console.log(temp)
// console.log(arr2)

 ex 1
function combineSorted(arr1, arr2){
    var combined = []
    var total = (arr1.length+arr2.length)
    for(i=0;i<=total;i++){
        if(arr1[0]<=arr2[0]){
            combined.push(arr1.shift())
        }
        if(arr2[0]<=arr1[0]){
            combined.push(arr2.shift())
        }
        console.log('loop test count')
        if(arr1.length==0 || arr2.length==0){
            break
        }
    }
    if(arr1.length==0){
        combined = combined.concat(arr2)
    }
    if(arr2.length==0){
        combined = combined.concat(arr1)
    }
    return combined
}