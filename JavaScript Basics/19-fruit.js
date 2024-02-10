function calculateCost(typeOfFruit, weight, pricePerKg) {
    'use strict';

    const pricePerGram = pricePerKg / 1000;
    const totalPrice = weight * pricePerGram;
    const weightKilos = (weight / 1000);

    console.log(`I need $${totalPrice.toFixed(2)} to buy ${weightKilos.toFixed(2)} kilograms ${typeOfFruit}.`);
}