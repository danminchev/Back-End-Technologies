function updateStore(currentStock, delivery) {
    'use strict';
    let combinedArray = currentStock.concat(delivery);
  
    let productQuantities = {};
  
    for (let i = 0; i < combinedArray.length; i += 2) {
      let productName = combinedArray[i];
      let quantity = parseInt(combinedArray[i + 1]);
  
      if (productQuantities[productName]) {
        productQuantities[productName] += quantity;
      } else {
        productQuantities[productName] = quantity;
      }
    }
  
    for (let product in productQuantities) {
      console.log(`${product} -> ${productQuantities[product]}`);
    }
  }
  
  // Example 1
  let currentStock1 = ['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'];
  let delivery1 = ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'];
  updateStore(currentStock1, delivery1);
  
  // Example 2
  let currentStock2 = ['Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'];
  let delivery2 = ['Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'];
  updateStore(currentStock2, delivery2);
  