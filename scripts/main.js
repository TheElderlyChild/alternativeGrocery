
// This function is called when any of the tab is clicked
// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp

function openInfo(evt, panelName) {

	var panel = document.getElementById(panelName)

	// Show the current tab, and add an "active" class to the button that opened the tab

	if (panel.style.display === "block") {
		panel.style.display = "none";
		evt.target.classList.remove("active");
	} 
	else {
		panel.style.display = "block";
		evt.target.className += " active";
	}
}


	
// generate a checkbox list from a list of products
// it makes each product name as the label for the checkbos

function populateListProductChoices(slct1, slct2, slct3, slct4) {
    var s1 = document.getElementById(slct1);
	var s2 = document.getElementById(slct2);
	var s3 = document.querySelector('input[name="'+ slct3+'"]:checked')
    var s4 = document.getElementById(slct4);
	
	var category = document.getElementById('category');

	// s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
    s4.innerHTML = "";
		
	// obtain a reduced list of products based on restrictions
    var optionArray = restrictListProducts(products, s1.checked, s2.checked, s3.value, category.value);
	sortProductsByPrice(optionArray)

	// for each item in the array, create a checkbox element, each containing information such as:
	// <input type="checkbox" name="product" value="Bread">
	// <label for="Bread">Bread/label><br>
		
	for (i = 0; i < optionArray.length; i++) {
			
		var productName = optionArray[i];
		// create the checkbox and add in HTML DOM
		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.name = "product";
		checkbox.value = productName;
		s4.appendChild(checkbox);
		
		// create a label for the checkbox, and also add in HTML DOM
		var label = document.createElement('label')
		label.htmlFor = productName;
		labelText = productName + " (Price: $" + getPrice(productName).toString() + ")"
		label.appendChild(document.createTextNode(labelText));
		s4.appendChild(label);
		
		// create a breakline node and add in HTML DOM
		s4.appendChild(document.createElement("br"));    
	}
}
	
// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph) 
// We build a paragraph to contain the list of selected items, and the total price

function selectedItems(){
	
	var ele = document.getElementsByName("product");
	var chosenProducts = [];
	
	var c = document.getElementById('displayCart');
	c.innerHTML = "";
	
	// build list of selected item
	var para = document.createElement("P");
	para.innerHTML = "You selected : ";
	para.appendChild(document.createElement("br"));
	for (i = 0; i < ele.length; i++) { 
		if (ele[i].checked) {
			para.appendChild(document.createTextNode(ele[i].value));
			para.appendChild(document.createElement("br"));
			chosenProducts.push(ele[i].value);
		}
	}
		
	// add paragraph and total price
	c.appendChild(para);
	c.appendChild(document.createTextNode("Total Price is " + getTotalPrice(chosenProducts)));
		
}

function updateOrderType(){
	orderType=document.getElementById('orderType')
	display=document.getElementById('displayOrderType')

	display.innerHTML="I would like to receive my order by " + orderType.value
}

