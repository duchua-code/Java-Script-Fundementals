//Functions 

//Declaration Function
    //Can be called at the beginning of the code before it is defined
function helloOne(){
    console.log("Hello One");
}

helloOne() // This will call the function and print "Hello One" to the console

//Anonymous Function
    // cannot be called before it is defined
var helloTwo = function(){
    console.log("Hello Two");
}
helloTwo(); // This will call the anonymous function and print "Hello Two" to the console


//ES6 function or arrow function

var helloThree = () => {
    console.log("Hello Three");
}
helloThree(); // This will call the arrow function and print "Hello Three" to the console

//Funciton with arguments 

function printName(name){
    console.log("Hello " + name);
}

printName("John"); // This will call the function and print "Hello John" to the console

function multiplyBy2(number){
    var result = number * 2;
    return result; // This will return the result of the multiplication
}

var myResult = multiplyBy2(5); // This will call the function and return 10
console.log("The result is: " + myResult); // This will print "The result is: 10" to the console


//Importing function from another file

//Way 1 = import a specific function from the file  
import {printage} from '../helpers/printhelper.js';
printage(25); // This will call the function from the printhelper.js file and print "The age is: 25" to the console    


//Way 2 = import everything from the file and use it as a namespace
import * as helper from '../helpers/printhelper.js';
helper.printage(30); // This will call the function from the printhelper.js file and print "The age is: 30" to the console
