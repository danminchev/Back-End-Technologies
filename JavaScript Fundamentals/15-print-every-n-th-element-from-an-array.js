function printNthElement(inputArray, step) {
    'use strict';

    const result = [];
  
    for (let index = 0; index < inputArray.length; index += step) {
      result.push(inputArray[index]);
    }
  
    return result;
  }
  
  // Example usage:
  let example1 = printNthElement(['5', '20', '31', '4', '20'], 2);
  console.log(example1); // Output: ['5', '31', '20']
  
  let example2 = printNthElement(['dsa', 'asd', 'test', 'tset'], 2);
  console.log(example2); // Output: ['dsa', 'test']
  
  let example3 = printNthElement(['1', '2', '3', '4', '5'], 6);
  console.log(example3); // Output: ['1']
  