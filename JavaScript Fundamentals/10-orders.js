function calculateTotalPrice(product, quantity) {
    let pricePerPiece;

    switch (product.toLowerCase()) {
        case "coffee":
            pricePerPiece = 1.50;
            break;
        case "water":
            pricePerPiece = 1.00;
            break;
        case "coke":
            pricePerPiece = 1.40;
            break;
        case "snacks":
            pricePerPiece = 2.00;
            break;
        default:
            console.log("Invalid product");
            return;
    }

    const totalPrice = pricePerPiece * quantity;
    console.log(totalPrice.toFixed(2));
}

calculateTotalPrice("water", 5); // Output: 5.00
calculateTotalPrice("coffee", 2); // Output: 3.00
