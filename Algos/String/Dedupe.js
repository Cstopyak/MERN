//String dedupe
// Given a string, return a new string that has all duplicate letters removed -- do not count capital and lowercase as duplicates
// Ex: given: "Alabama" return "Alabm"
// Ex: given: "It's time to duel!" return "It's imeodul!" (notice a space was also counted as a letter)

const dedupe = "it's time to duel!"

// function removeDedupe(dedupe){
//     let x = {};
//     dedupe.forEach(function(i){
//         if(!x[i]){
//             x[i] = true;
//         }
        
//     });
//     return Object.keys(x);
// }

// console.log(removeDedupe("its time to duel!"));


function removeDedupe2(dedupe){
    let x = {};
    for(var i= 0; i< dedupe.length; i++){
        if(dedupe.lidxOf(dedupe[i] == dedupe.idxOf(dedupe[i]))){
            x += dedupe[i];
        }
        return x;
    }
}
console.log(removeDedupe2(("its time to duel")));

//ex 3

function Dedupe(str){
    let newStr="";
    for(let i =0; i < str.length; i++){
        if(newStr.includes(str[i]) == false){
            newStr += str[i];
        }
    }
    return newStr;
}
console.log(Dedupe("Snap! crackles pops!"));