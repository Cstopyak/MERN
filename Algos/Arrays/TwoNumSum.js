// write a function that takes in a non empty array and a target sum

//array [-2,5,-4,9,12,1,3,7]

//target number = 10

//answer could be -2, 12


//we should create to loops to be able to go throught he array
//once creating the two loops we should figure out how to check
function twoNumSum(arr, targetSum) {
    for (let x = 0; x < arr.length - 1; x++) {
        const oneNum = arr[x];
        for (let i = x + 1; i < arr.length; i++) {
            const secNum= arr[i];
            if(oneNum + secNum === targetSum){
                return[oneNum, secNum];
            }


        }
    }
    return[];
}
console.log(twoNumSum([2,7,11,15],9));