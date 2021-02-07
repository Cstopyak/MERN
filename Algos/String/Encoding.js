//String encode
// Given a string, return an encoded version of it. (Assume the letters are in order)
// Ex: given "aaaabbbbbcc" return "a4b5c2"
// Ex: given "dddddddeeef" return "d7e3f1"

// make some kind of data structure to = a list
// everytime we need to run make it into a list
//need to concat with every iteration
//need to run through and loop through current char to previous then ++
// we need to keep track or the curr and prev
// then we have to make sure that if the current and prev does not equal the current length 

function Encode(string) {
    const list = []
    let currlen = 1
    for (let i = 1; i < string.length; i++) {
        const currletter = string[i];
        const prevletter = string[i - 1];

        if (currletter != prevletter || currlen === 9) {
            list.push(currlen.toString());
            list.push(prevletter);
            currlen = 0;

        }
        currlen ++;
    }
    list.push(currlen.toString());
    list.push(String[string.length - 1]);

    return list.join('');

}
console.log(Encode("aaaabbbbbcc"));


// //String decode
// Given an encoded string, decode it
// Ex: given "a3b7c12" return "aaabbbbbbbcccccccccccc"
// Ex: given "d1e10f4" return "deeeeeeeeeeffff"