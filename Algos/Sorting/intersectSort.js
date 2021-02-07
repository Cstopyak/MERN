//Intersect sorted arrays
// Given two arrays of sorted numbers, return a new array that contains only the numbers that are in both arrays
// Ex: given [1,2,2,3,4,5] and [2,4,6,7,8] return [2,4]
// Ex: given [1,1,1,2,3,4] and [1,1,3,4,5] return [1,1,3,4]

function intersect(Array, Array2, intersectList){
    let i = 0;
    let x = 0;

    while (i <Array.length && x < Array2.length){
        while((i <Array.length - 1) && (Array[i] == Array[i+1])){
            i++;
        }

        while((i <Array2.length - 1) && (Array2[x] == Array[x+1])){
            i++;
        }
        if(Array[i] < Array2[x]){
            i++;
        } else{
            if(Array[1] > Array2[x]){
                x++;
            }
            else{
                intersectList.add(Array[i]);
                i++;
                x++;

            }
        }

    }
    return intersectList;
}
console.log(intersect([1,2,2,3,4,5], [2,4,6,7,8]));
