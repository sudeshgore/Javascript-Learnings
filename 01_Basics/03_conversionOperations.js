// let score = true
 
// console.log(typeof score); // number (lowercase)
// console.log(typeof(score)); // number (lowercase)

// let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

/*
    After Conversion into Number:-
        "33" => dataType-number, value- 33
        "33abc" => dataType-number, value- NaN
        null => dataType- number, value- 0
        undefined => dataType-number, value- NaN
        true => dataTypes-number, value-1
*/

// let name = true;
// console.log(typeof name);
// console.log(name);

// let valueInBool = Boolean(name)
// console.log(typeof valueInBool); 
// console.log(valueInBool);

/*
    After Conversion into Boolean:-
        "" => dataType- boolean, value-false
        "Sudesh"=> dataType- boolean, value- true
        null => dataType- boolean, value- false
        undefined => dataType- undefined, value- false
        true => dataType- boolean, value- true
*/ 

// let someNumber = 45

// let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber); // dataType - string



// <-------------Arithmetic Operations -------------->

let value = 3
let negValue = -value // assigning negative value
// console.log(negValue)


// Basic arithmetic operations
// console.log(2+2);
// console.log(2-2);
// console.log(2*3); // => same as 2^3 = 8
// console.log(2**2);
// -----------
// console.log(2/3);
// console.log(Math.ceil(2/3)); // Ceiling value
// console.log(Math.floor(2/3)); // floor value
// console.log((2/3).toFixed(2)); // Give value upto two decimal places 
// ---------------
// console.log(2%3);



// -----------String operations----------->


// Concatenation of string- 1st way
// let  str1 = "Hello"
// let str2 = ", Sudesh"

// let str3 = str1 + str2  // concatenation of strings
// console.log(str3);

// Concatenation of string- 2nd way

// let str1 = "Sudesh"
// let  str2 = "Hello"
// console.log(`Hello, ${str1}!`);

// Concatenation of string- 3rd way
// let str1 = "Hello, "
//  str1 += "Sudesh!"
// console.log(str1);




// <------------All follwing code's are bad practise, not considered readable----------------->

// console.log("1" + 2); // 12
// console.log(1 + "2"); // 12
// console.log("1" + "2"); // 12
// console.log("1" + 2 + 2); // 122
// console.log(1 + 2 + "2"); // 32


// Not readable
let num1, num2, num3
num1 = num2 = num3 = 2+2;

// console.log(num1); // 4 
// console.log(num2); // 4
// console.log(num3); // 4


let gameCounter = 100
gameCounter++; // PostFix increament
console.log(gameCounter);
