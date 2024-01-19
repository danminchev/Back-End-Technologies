function cookingByNumbers(rawNumber, firstOperation, secondOperation, thirdOperation,
    forthOperation, fifthOperation) {
    'use strict'

    let number = parseFloat(rawNumber);

    if (firstOperation === 'chop') {
        number /= 2;
    } else if (firstOperation === 'dice') {
        number = Math.sqrt(number);
    } else if (firstOperation === 'spice') {
        number += 1;
    } else if (firstOperation === 'bake') {
        number *= 3;
    } else if (firstOperation === 'fillet') {
        number *= 0.8;
    }

    console.log(number.toFixed(1));

    if (secondOperation === 'chop') {
        number /= 2;
    } else if (secondOperation === 'dice') {
        number = Math.sqrt(number);
    } else if (secondOperation === 'spice') {
        number += 1;
    } else if (secondOperation === 'bake') {
        number *= 3;
    } else if (secondOperation === 'fillet') {
        number *= 0.8;
    }

    console.log(number.toFixed(1));

    if (thirdOperation === 'chop') {
        number /= 2;
    } else if (thirdOperation === 'dice') {
        number = Math.sqrt(number);
    } else if (thirdOperation === 'spice') {
        number += 1;
    } else if (thirdOperation === 'bake') {
        number *= 3;
    } else if (thirdOperation === 'fillet') {
        number *= 0.8;
    }

    console.log(number.toFixed(1));

    if (forthOperation === 'chop') {
        number /= 2;
    } else if (forthOperation === 'dice') {
        number = Math.sqrt(number);
    } else if (forthOperation === 'spice') {
        number += 1;
    } else if (forthOperation === 'bake') {
        number *= 3;
    } else if (forthOperation === 'fillet') {
        number *= 0.8;
    }

    console.log(number.toFixed(1));

    if (fifthOperation === 'chop') {
        number /= 2;
    } else if (fifthOperation === 'dice') {
        number = Math.sqrt(number);
    } else if (fifthOperation === 'spice') {
        number += 1;
    } else if (fifthOperation === 'bake') {
        number *= 3;
    } else if (fifthOperation === 'fillet') {
        number *= 0.8;
    }

    console.log(number.toFixed(1));
}