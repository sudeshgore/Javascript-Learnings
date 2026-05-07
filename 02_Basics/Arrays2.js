const marvel_heros = ["Thor", "Ironman", "Spiderman"]
const dc_heros = ["Superman", "Flash", "Black Adam"]

// console.log(marvel_heros);
// console.log(dc_heros);
// marvel_heros.push(dc_heros)
// console.log(marvel_heros);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

// Spread operator - another method
// const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);

// const another_array = [ 1, 2, 3 , [4, 5, 6], 7, [6, 7,[4, 5]]]
// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);

console.log(Array.isArray("Sudesh"))
console.log(Array.from("Sudesh"))
console.log(Array.from({name: "Sudesh"})) // Returns blank array. Because we didn't mentioned what we want. i.e, key array or value array.

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
