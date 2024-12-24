const marvel_heros = ["thor" , "ironman", "spiderman"] 
const dc_heros = ["superman" , "flash" , "batman"] 

// marvel_heros.push(dc_heros) // whole dc_heros array will be inserted into marvel_heros

// console.log(marvel_heros) 

// marvel_heros.concat(dc_heros)  it will not work .. for desired array we need to make a new array 
const all_heros = marvel_heros.concat(dc_heros) // it will consists all the dc_heros and marvel_heros as elements

console.log(marvel_heros) 
console.log(all_heros) 

// another and optimised way to do this is -> 

const all_newheros = [...marvel_heros, ... dc_heros] //it will does the same thing

const another_arr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]] 

const real_another_arr = another_arr.flat(Infinity)

console.log(real_another_arr) 

console.log(Array.isArray("Pritam"))
console.log(Array.from("Pritam"))
console.log(Array.from({name : "Pritam"})) 

let score1 = 100 
let score2 = 200 
let score3 = 300  

console.log(Array.of(score1, score2, score3)) 



