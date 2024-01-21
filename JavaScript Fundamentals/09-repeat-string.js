function repeatString(inputString, n) {
    let result = "";
    for (let i = 0; i < n; i++) {
      result += inputString;
    }
    return result;
  }
  
  console.log(repeatString("abc", 3)); // Output: "abcabcabc"
  console.log(repeatString("String", 2)); // Output: "StringString"
  