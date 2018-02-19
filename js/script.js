//---Data-------------------------------------------------
var Orders = [
	{
		id: "1",
		OrderInfo: {
			createdAt	: "10.08.1991",
			customer	: "Alfreds Futterkiste",
			status		: "Accepted",
			shippedAt	: "8.09.1991"
		},
		ShipTo: {
			name: "Maria Anders",
			Address: "Obere Str. 57",
			ZIP: "12209",
			Region: "Germany",
			Country: "Germany"
		},
		CustomerInfo: {
			firstName: "Maria",
			lastName: "Anders",
			address: "Obere Str. 57",
			phone: "030-0074321",
			email: "Maria.Anders@company.com"
		},
		products: [
			{
				id			: "1",
				name		: "Chai",
				price		: "18",
				currency	: "EUR",
				quantity	: "2",
				totalPrice	: "36"
			},
			{
				id			: "2",
				name		: "Aniseed Syrup",
				price		: "10",
				currency	: "USD",
				quantity	: "3",
				totalPrice	: "30"
			},
			{
				id			: "3",
				name		: "Chef Anton's Cajun Seasoning",
				price		: "22",
				currency	: "USD",
				quantity	: "2",
				totalPrice	: "44"
			},
			{
				id			: "4",
				name		: "Chef Anton's Gumbo Mix",
				price		: "36",
				currency	: "EUR",
				quantity	: "21",
				totalPrice	: "756"
			},
			{
				id			: "5",
				name		: "Grandma's Boysenberry Spread",
				price		: "25",
				currency	: "USD",
				quantity	: "5",
				totalPrice	: "125"
			}
		]
	},
	{
		id: "2",
		OrderInfo: {
			createdAt	: "23.12.2006",
			customer	: "Bon app",
			status		: "Pending",
			shippedAt	: "13.02.2007"
		},
		ShipTo: {
			name: "Laurence Lebihan",
			Address: "12, rue des Bouchers",
			ZIP: "13008",
			Region: "France",
			Country: "France"
		},
		CustomerInfo: {
			firstName: "Laurence",
			lastName: "Lebihan",
			address: "12, rue des Bouchers",
			phone: "91.24.45.40",
			email: "Laurence.Lebihan@company.com"
		},
		products: [
			{
				id			: "1",
				name		: "Queso Cabrales",
				price		: "21",
				currency	: "EUR",
				quantity	: "5",
				totalPrice	: "105"
			},
			{
				id			: "2",
				name		: "Queso Manchego La Pastora",
				price		: "38",
				currency	: "EUR",
				quantity	: "3",
				totalPrice	: "114"
			},
			{
				id			: "3",
				name		: "Pavlova",
				price		: "120",
				currency	: "RUB",
				quantity	: "5",
				totalPrice	: "600"
			},
			{
				id			: "4",
				name		: "Sir Rodney's Marmalade",
				price		: "5",
				currency	: "BYN",
				quantity	: "3",
				totalPrice	: "15"
			},
			{
				id			: "5",
				name		: "Genen Shouyu",
				price		: "40",
				currency	: "USD",
				quantity	: "7",
				totalPrice	: "280"
			},
			{
				id			: "6",
				name		: "Tofu",
				price		: "23.25",
				currency	: "USD",
				quantity	: "1",
				totalPrice	: "23.25"
			},
			{
				id			: "7",
				name		: "Alice Mutton",
				price		: "32",
				currency	: "UAH",
				quantity	: "39",
				totalPrice	: "1248"
			}
		]
	}
];

// adding(Orders);

function adding(list){


	for (var i = 0; i < 6; i++) {
		list.push(list[0]);
		list.push(list[1]);
	}

	for(var i = 0; i < 2; i++);
		for (var j = 0; j < list[0].products.length; j++) {
			list[1].products.push(list[0].products[j]);
		}
	}


	GetListOfOrders(Orders);

GetListOfOrders(Orders);
textChange_on_SearchBox(Orders);
//после работы с поиском не выполняется ShowDetails или click_on(".navigation .orders li", ShowDetails, Orders);

click_on(".navigation .orders li", ShowDetails, Orders);


//---Orders_list-------------------------------------------------
function GetListOfOrders(list){
	var listClassName = ".navigation .orders";
	ClearList(listClassName);	
	CreateElementsForList(listClassName, ".templates .itemForOrders", list.length);
	FillingTheOrders(listClassName, list);
}

function CreateElementsForList(listClassName, template, numberOfElements){
	for (var i = 0; i < numberOfElements; i++) {
		var parent = document.querySelector(listClassName);
		var li = document.createElement("li");
		li.appendChild(document.querySelector(template).cloneNode(true));
		li.setAttribute("id", i);
		parent.appendChild(li);
	}
}

function FillingTheOrders(listClassName, outList){
	var list = document.querySelectorAll(listClassName + " " + "li");

	for (var i = 0;  (i < list.length) && (i < outList.length); i++) {
		list[i].querySelector(".orderId").innerHTML = outList[i].id;
		list[i].querySelector(".customer").innerHTML = outList[i].OrderInfo.customer;
		list[i].querySelector(".createdAt").innerHTML = outList[i].OrderInfo.createdAt;
		list[i].querySelector(".shipped").innerHTML = outList[i].OrderInfo.shippedAt;
		list[i].querySelector(".status").innerHTML = outList[i].OrderInfo.status;

		list[i].querySelector(".itemForOrders").setAttribute("id", i);
	}
}

//---OrderInfo-------------------------------------------------
function GetOrderInfo(index, list){
	document.querySelector(".informationBoard .orderInfo .orderId").innerHTML = list[index].id;
	document.querySelector(".informationBoard .orderInfo .customer").innerHTML = list[index].OrderInfo.customer;
	document.querySelector(".informationBoard .orderInfo .ordered").innerHTML = list[index].OrderInfo.createdAt;
	document.querySelector(".informationBoard .orderInfo .shipped").innerHTML = list[index].OrderInfo.shippedAt;
	/*document.querySelector(".informationBoard .orderInfo .currency").innerHTML = list[index].	//посчитать сумму покупок и сделать конвертер валют,
	document.querySelector(".informationBoard .orderInfo .orderTotal").innerHTML = list[index].*/ // чтобы сумму показывать в одной вал.
}

function CountItems(listClassName){
	var list = document.querySelector(listClassName);
	return list.getElementsByTagName('li').length;
}
//---AddressInfo-------------------------------------------------
function GetAddressInfo(index, list){
	document.querySelector(".informationBoard .addressInfo .name").innerHTML = list[index].ShipTo.name;
	document.querySelector(".informationBoard .addressInfo .Address").innerHTML = list[index].ShipTo.Address;
	document.querySelector(".informationBoard .addressInfo .ZIP").innerHTML = list[index].ShipTo.ZIP;
	document.querySelector(".informationBoard .addressInfo .Region").innerHTML = list[index].ShipTo.Region;
	document.querySelector(".informationBoard .addressInfo .Country").innerHTML = list[index].ShipTo.Country;
}
//---ProductsInfo-------------------------------------------------
function GetPurchasesInfo(index, list){
	tableClassName = ".informationBoard .purchasesInfo .products";

	ClearTable(tableClassName, 1);
	CreateElementsForTable(tableClassName, ".templates .itemForProducts", list[index].products.length);
	FillingTheProducts(tableClassName + " " + ".itemForProducts", list[index].products);
}

function CreateElementsForTable(tableClassName, template, numberOfElements){
	for (var i = 0; i < numberOfElements; i++) {
		var parent = document.querySelector(tableClassName);
		parent.appendChild(document.querySelector(template).cloneNode(true));
	}
}

function FillingTheProducts(itemClassName, products){
	var list = document.querySelectorAll(itemClassName);

	for (var i = 0; (i < products.length) && (i < list.length); i++) {
		list[i].querySelector(".name").innerHTML = products[i].name;
		list[i].querySelector(".price").innerHTML = products[i].price;
		//list[i].querySelector(".currency").innerHTML = products[i].currency;// currency
		list[i].querySelector(".quantity").innerHTML = products[i].quantity;
		list[i].querySelector(".totalPrice").innerHTML = products[i].totalPrice;

		list[i].setAttribute("id", i);
	}
}

//---total-------------------------------------------------

function ShowDetails(index, list){
	GetOrderInfo(index, list);
	GetAddressInfo(index, list);
	GetPurchasesInfo(index, list);
}

//---the interface reaction-----------------------------------------
function click_on(classNameOfItem, action, outList){
	var list = document.querySelectorAll(classNameOfItem);

	for (var i = 0; i < list.length; i++) {
		list[i].addEventListener("click", function(event) {
			action(event.target.getAttribute("id"), outList);
		});

		var childs = list[i].childNodes;
		for(var j = 0; j < childs.length; j++)
			childs[j].addEventListener("click", function(event) {
				action(event.target.parentNode.getAttribute("id"), outList);
			});
	}
}

function textChange_on_SearchBox(data){
	input = document.querySelector(".navigation .searchBox input");
	input.addEventListener("keyup", function(event) {
		// input.value;

		var indexesOfFoundElements  = [];
		//передавать не весь ордерс, а массив со соответствующим свойством
		indexesOfFoundElements = getIndexesCorrespondingTo(input.value, data, "OrderInfo");
		// alert(indexesOfFoundElements);
		var foundItems = [];
		for(i in indexesOfFoundElements){
			foundItems.push(cloneObject(data[indexesOfFoundElements[i]]));
		}
		if((input.value == "") || (input.value == " "))
			GetListOfOrders(Orders);
		else
			GetListOfOrders(foundItems);
	});
}

//тут я хотел через рекурсию раздать всем дочерним элементам листенеры
/*function click_on(classNameOfItem, ancestor){
	var list = document.querySelectorAll(classNameOfItem);
	for (var i = 0; i < list.length; i++) {

		list[i].addEventListener("click", function(event) {
			ShowDetails(event.target.getAttribute("id"));
		});
		if(list[i].firstElementChild){
			var childs = list[i].childNodes;
			for (var i = 0; i < childs.length; i++) {
				click_on(childs[i].className, ancestor)
			}
		}
	}
}
*/


//---collections--------------------------------------------------------

function ClearList(listClassName, startItem){
	startItem = startItem || 0;
	var size = CountItems(listClassName);
	var parent = document.querySelectorAll(listClassName + " li");
	for (var i = startItem; i < size; i++)
		parent[i].remove();
}

function CountTableItems(tableClassName){
	var table = document.querySelector(tableClassName);
	return table.getElementsByTagName('tr').length;
}

function ClearTable(tableClassName, startStr){
	startStr = startStr || 0;
	var size = CountTableItems(tableClassName);	
	var parent = document.querySelectorAll(tableClassName + " tr");
	for (var i = startStr; i < size; i++)
		parent[i].remove();
}

function cloneObject(obj) {  
	var newObj = {};  

	for (var prop in obj) {  
		if (typeof obj[prop] == 'object') {  
			newObj[prop] = cloneObject(obj[prop]);  
		} else {
			newObj[prop] = obj[prop];
		}
	} 

	return newObj;  
}

function getIndexesCorrespondingTo(searchStr, data, property){
	var indexes = [];
	// var searchKeys;
	// searchKeys = searchStr.split(" ");
	if((searchStr != "") && (searchStr != " "))
		for(key in data)
			for(prop in data[key])
				if(prop == property)
					for(i in data[key][prop]){
						if(data[key][prop][i].indexOf(searchStr) >= 0){
							indexes.push(key);
						}
					}
	return removesDuplicatesFrom(indexes);
}	

function removesDuplicatesFrom(list){
	var resultList = [];
	for(key in list){
			// alert(list[key] + " " + !isHaveElement(list[key], list, key - 1, -1));
		if(!isHaveElement(list[key], list, key - 1, -1)){
			resultList.push(list[key]);
		}
	}
	return resultList;
}

function isHaveElement(value, list, startIndex, orientation){
	orientation = orientation || 1;
	startIndex = startIndex || 0;
	if(orientation >= 0){
		for(var i = startIndex; i < list.length; i++)
			if(list[i] == value)
				return true;
	}
	else{
		for (var i = startIndex; i >= 0; i--)
			if(list[i] == value)
				return true;
	}
	return false;
}









