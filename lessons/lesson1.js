//1. Hello World 
console.log("Hello World!");

//Variables
var firstName ="John"
let lastName ="Doe" //let is block scoped, var is function scoped

console.log(firstName, lastName);

var age,dateofBirth,gender;

age = "5";
gender = "Male";
console.log(age);

age = "6";
console.log(age);

//Constants 
const occupation = "tester"; // cannot leave constant without a value
//occupation = "driver"; // This will throw an error because occupation is a constant
console.log(occupation);

//Data Types 
var text = "sampple";
var number = 5;
var boolean = false;
var no_value = null; //This variable has no value at all, i think its always null
var not_defined = undefined; // This variable is declared but not defined, so it will be undefined
