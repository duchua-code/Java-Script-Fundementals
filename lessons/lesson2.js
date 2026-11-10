//Concatination and Interpolation 

//concationation
var price = 100;
var itemName = "Table";
var messageToPrint = "The price for your " + itemName + " is " + price + " dollars"; 
console.log(messageToPrint);

//interpolation
var messageToPrint2 = `The price for your ${itemName} is ${price} dollars`;
console.log(messageToPrint2);