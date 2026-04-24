
// Avoid to use following comparisons, it will create confusion.

// console.log(2>1); // true
// console.log(2>=1); // true
// console.log(2 < 1); // false
// console.log(2==1); // false
// console.log(2===1); // false
// console.log(2!=1); // true
// console.log("2" > 1); // true
// console.log("1" > 1); // false
// console.log("02" > 1); // true

// <------------------------------------>
// console.log(null > 0); // false
// console.log(null == 0); // false
// console.log(null >= 0); // true
// console.log(null === 0); // false


// <--------------------------------------->
console.log(undefined == 0); // false
console.log(undefined > 0); // false
console.log(undefined < 0); // false
console.log(undefined >= 0); // false
console.log(undefined <= 0); // false
console.log(undefined === 0); // false

/*
    Note :- Difference between "==" and "===="
            "==" -> compare values only.
            e.g- "2" == 2. gives true because it checks only values not data types.

            "===" -> check data type and then compare value
              e.g- "2" === 2  gives false because different data types
*/

