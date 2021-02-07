//Is Pangram
// Given a string, return true or false whether or not the string is a pangram
// Pangram: A sentence that contains every letter in the alphabet at least one time
// Ex: The quick brown fox jumps over a lazy dog
// Ex: Sphinx of black quartz, judge my vow
// Ex: Pack my box with five dozen liquor jugs

//all letters are in alphabet
// ending should be true or false
// going to need a const of the alphabet
// we will need to loop through alphabet to see what letters are present

function Pangram(string){
    const ABC = "abcdefghijklmnopqrstuvwxyz"
    let Pangram = false

    
    ABC.split("").includes(letter =>{  //transform string into an array so we can iterate through this
        if(string.includes(letter)){
            return letter
        }  

    })
    if(ABC.length === 26){
        Pangram = true
    }
    return Pangram
}
console.log(Pangram("abcde"));
