function add(num1, num2){
    const sum = num1 + num2;
    console.log(sum);
    return sum;
}

function subtract(a, b){
    const difference = a - b;
    console.log(difference);
    return difference;
}

subtract(7, 3);

function multiply(num1, num2){
    const multipliedNumbers = num1*num2;
    console.log(multipliedNumbers);
    return multipliedNumbers;
}

function divide(num1, num2){
    const dividedNums = num1/num2;
    console.log(dividedNums);
    return dividedNums;
}

function increment(n){
    const incNumber = ++n;
    console.log(incNumber);
    return incNumber;
}

function decrement(n){
    const deckedNum = --n;
    console.log(deckedNum);
    return deckedNum;
}

function makeInt(string){
    const intToParse = parseInt(string, 10);
    console.log(intToParse);
    return intToParse;
}

function preserveDecimal(n){
    const parseFloatedNumber = parseFloat(n);
    console.log(parseFloatedNumber);
    return parseFloatedNumber;
}

preserveDecimal("3.14159");