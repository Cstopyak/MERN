const convert = str => {
    let decimal = 0
    let digit
    let powerValue = 0
    for(i=str.length-1;i>=0;i--) {
        digit=parseInt(str[i],10)
        console.log(`Binary Value: ${digit} | Decimal Value: 2^${powerValue}`)
        if(digit==1) {
            decimal+=(2 ** powerValue)
        }
        powerValue++
    }
    console.log(`Binary: ${str} | Decimal: ${decimal}`)
    return decimal.toString()
}

convert("01011001")

function convertToBinary(num) {
    let finalStr = "0b";
    let tempArr = [];
    while(num > 0) {
        if(num % 2 == 1) {
            tempArr.push(1);
        } else if(num % 2 == 0) {
            tempArr.push(0)
        }
        num = Math.floor(num / 2)
    }
    for (let i = tempArr.length - 1; i >=0; i--) {
        finalStr = finalStr + tempArr[i]
    }
    return finalStr
}

console.log(convertToBinary(25))

function dec2bin(num){
    var result = ""
    var value = num
    while (value >0){
        remainder = value%2
        result += remainder
        value = Math.floor(value/2)
    }
    result = result.split("").reverse().join("")
    result = "0b"+ result
    console.log(result)
    
}

dec2bin(25)


console.log(Number(25).toString(2))
