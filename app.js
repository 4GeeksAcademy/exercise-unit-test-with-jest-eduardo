

const sum =(a,b) => {
    return a + b
}

console.log (sum(7,3))

const fromEuroToDollar = (valueInEuro) =>{
    let dollars = valueInEuro * 1.07
    return dollars
}

const fromDollarToYen =(valueInDollar) =>{
    let yen = valueInDollar / 1.07 * 156.5
    return yen
}

const fromYenToPound = (valueInYen)=>{
    let pound = valueInYen / 156.5 * 0.87
    return pound
}




module.exports={
sum, fromEuroToDollar, fromDollarToYen, fromYenToPound
}