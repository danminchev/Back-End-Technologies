function evenOddSubtraction(arr) {
    let evenSum = 0;
    let oddSum = 0;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        evenSum += arr[i];
      } else {
        oddSum += arr[i];
      }
    }
  
    return evenSum - oddSum;
  }
 
  console.log(evenOddSubtraction([3,5,7,9]));
  