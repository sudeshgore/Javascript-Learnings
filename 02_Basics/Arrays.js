// Array- 1) Array is an object, allows to store multiple items(Mixed elements) in a single variable name.
//        2) It is resizable, we can change size later as well.

// const myArr = [0, 1, 2, 3, 4, 5, true, "hi"]  Elements can be anything

const myArr = [0, 1, 2, 3, 4, 5, 9]
const myArr2 = new Array(1, 2, 3, 4, 5)
// console.log(myArr[0]);
// console.log(myArr2[1]);

// shallow copy - make copy but refer to same address (similar like pointer).

// myArr.push(6) // Value push at back
// myArr.push(7) 
// myArr.pop()

// myArr.unshift(9) // insert value at start, shifts rest all value 
// myArr.shift()

// console.log(myArr.includes(9)); // Return true or false.
// console.log(myArr.indexOf(19)); // Return index.

// const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

// slice, splice

console.log(("A", myArr));

const myn1 = myArr.slice(1, 3) // returns 1st and 2nd element not 3rd.

console.log(myn1);

console.log("B", myArr);

const myn2 = myArr.splice(1, 3) // Remove range of elements( 1 to 3 inclusive) from array
console.log("C", myArr);
console.log(myn2);




