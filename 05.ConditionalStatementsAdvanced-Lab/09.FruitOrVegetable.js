function fruitOrVegetable(input) {
    let product = input[0];
    let productType;
    if (
        product == "banana" ||
        product == "apple" ||
        product == "kiwi" ||
        product == "cherry" ||
        product == "lemon" ||
        product == "grapes"
    ) {
        productType = "fruit";
    } else if (
        product == "tomato" ||
        product == "cucumber" ||
        product == "pepper" ||
        product == "carrot"
    ) {
        productType = "vegetable";
    } else {
        productType = "unknown";
    }

    console.log(productType);
}

fruitOrVegetable(["banana"]);
fruitOrVegetable(["apple"]);
fruitOrVegetable(["tomato"]);
fruitOrVegetable(["water"]);
