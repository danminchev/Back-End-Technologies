function solve(firstNumber, secondnumber, thirdNumber) {
    'use strict';

    const sum = (first, second) => first + second;
    const subtract = (first, second) => first - second;

    const result = subtract(sum(firstNumber, secondnumber), thirdNumber);

    console.log(result);

}