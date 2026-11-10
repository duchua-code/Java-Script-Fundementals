//logical "AND"
console.log(true && true); // This will print true because both operands are true
console.log(true && false); // This will print false because one of the operands is false       

//logical "OR"
console.log(true || false); // This will print true because one of the operands is true

//logical "NOT"
console.log(!true); // This will print false because the operand is true and the NOT operator negates it

var ageIsMoreThan18 = true;
var isUSCitizen = true;

var isEligibleDriverLicense = ageIsMoreThan18 && isUSCitizen; // This will be true if both ageIsMoreThan18 and isUSCitizen are true
console.log("Customer is eligible for a driver's license: " + isEligibleDriverLicense); // This will print true because both ageIsMoreThan18 and isUSCitizen are true