//Loop ing Statements 

// for loop (for i loop)
for (let i = 0; i <= 5; i++) {
    console.log("The value of i is: " + i);
}

// for loop (for of loop)
var cars = ["Toyota", "Honda", "Ford", "Chevrolet"];
for (let c of cars){ // C variable will hold the value of cars array
    console.log(c)

    if(c =="Ford"){
        console.log( c + " is my favorite car!");
        break; // This will break the loop when c is equal to "Ford"
    }
    
}

//Company way of writing for loop (for in loop)
cars.forEach(c => {
    console.log(c);
});