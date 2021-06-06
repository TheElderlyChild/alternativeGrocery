	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "brocoli",
		lactoseIntolerant: true,
		nutAllergy: true,
		organic: true,
		price: 1.99
	},
	{
		name: "bread",
		lactoseIntolerant: false,
		nutAllergy: true,
		organic: false,
		price: 2.35
	},
	{
		name: "salmon",
		lactoseIntolerant: true,
		nutAllergy: true,
		organic: true,
		price: 10.00
	},
	{
		name: "lactose-free milk",
		lactoseIntolerant: true,
		nutAllergy: true,
		organic: false,
		price: 3.45
	},
	{
		name: "whole milk",
		lactoseIntolerant: false,
		nutAllergy: true,
		organic: true,
		price: 2.99
	},
	{
		name: "almond",
		lactoseIntolerant: true,
		nutAllergy: false,
		organic: true,
		price: 7.23
	},
	{
		name: "granola bar",
		lactoseIntolerant: true,
		nutAllergy: false,
		organic: false,
		price: 2.50
	},
	{
		name: "butter",
		lactoseIntolerant: false,
		nutAllergy: true,
		organic: true,
		price: 2.97
	},
	{
		name: "spinach",
		lactoseIntolerant: true,
		nutAllergy: true,
		organic: true,
		price: 1.97
	},
	{
		name: "cheese",
		lactoseIntolerant: false,
		nutAllergy: true,
		organic: false,
		price: 4.97
	}
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction, organicPreference) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "LactoseIntolerant") && (prods[i].lactoseIntolerant == true) && 
		(!((organicPreference == "Yes") && (prods[i].organic == false)))){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "NutAllergy") && (prods[i].nutAllergy == true) && 
		(!((organicPreference == "Yes") && (prods[i].organic == false)))){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "None") && 
		(!((organicPreference == "Yes") && (prods[i].organic == false)))) {
			product_names.push(prods[i].name);
		}
	}
	return product_names;
}

function getPrice(chosenProduct){
	price = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProduct==products[i].name){
			price += products[i].price;
			break
		}
	}
	return price;
}

function comparePrices(firstProd, secondProd){
	return getPrice(firstProd) - getPrice(secondProd)
}

function sortProductsByPrice(prodArray) {
	prodArray.sort(comparePrices)
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}
