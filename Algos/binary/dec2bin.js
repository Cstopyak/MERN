function dec2bin(num){
    var result = "0b"
    var value = num
    while ( value > 0){
        remainder = value%2
        
        result =+ remainder
        value = Math.floor(value/2)

    }
    result = result.split("").reverse().join("")
    result = "ob"+ result
    console.log(result)
}

dec2bin(25)