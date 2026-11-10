//Objescts 

var customer = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    cars: ["Toyota", "Honda", "Ford"]
}

customer.firstName = "Jane"; // This will change the firstName property of the customer object to "Jane"
customer['lastName'] = "Smith"; // This will change the lastName property of the customer object to "Smith"

console.log(customer.firstName);
console.log(customer['lastName']);

// arrays 

var car = ["Toyota", "Honda", "Ford"];
car[1] = "Chevrolet"; // This will change the second element of the car array to "Chevrolet
console.log(car[1]); // This will print "Chevrolet"

console.log(customer.cars[0]); // This will print "Toyota"