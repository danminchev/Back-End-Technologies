function largestNumber(number1, number2, number3) {
    'use strict';

    let result;

    if (number1 > number2 && number1 > number3) {
        result = number1;

    }else if (number2 > number1 && number2 > number3) {
        result = number2;

    }else {
        result = number3;
    }

    console.log(`The largest number is ${result}.`);

}
