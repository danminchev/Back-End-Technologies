function printAndSum(startNumber, endNumber) {
    'use strict';

    let message = '';
    let sum = 0;

    for (let index = startNumber; index <= endNumber; index += 1) {
        sum += index;
        message += `${index} `;
    }

    console.log(message.trimEnd());
    console.log(`Sum: ${sum}`);
}