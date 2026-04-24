// Primitives data types (Call by value)
/* 
    7 types : String, Number, Boolean, null, undefined, Symbol, BigInt
*/

const isLoggedIn = false
const outsideTemp = null

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId); // False
console.log("<------------------------------------>");


// BigInt data-type example
const bigNumber = 345627294759298577928752n // JS by default use "BigInt"  data type to store it
console.log(typeof bigNumber);
console.log("<------------------------------------>");




// Reference (Non primitive):- 

// Array, Objects(Important in JS), Functions  

// Array
const Heros =["Ironman", "Thor", "Captain America", "Bucky", "Hulk", "Vision", "Wanda", "Spider-man", "Black-widow", "Hawkeye", "Falcon", "Ant-man"]
console.table(Heros);
console.log("<------------------------------------>");

// Object
let myObj = {
    name: "Sudesh",
    age: 23
}
console.log(myObj);
console.log("<------------------------------------>");

// Function
const myFunction = ()=>{
    console.log("Hello world!");
}
myFunction();
console.log(typeof myFunction); // function
console.log("<------------------------------------>");

