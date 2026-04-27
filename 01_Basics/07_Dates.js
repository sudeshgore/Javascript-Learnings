// Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);

// let myCreatedDate = new Date(2026, 6, 1)
// let myCreatedDate = new Date(2026, 6, 1, 5, 3)
// let myCreatedDate = new Date("2026-06-01")
let myCreatedDate = new Date("06-01-2026")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());
