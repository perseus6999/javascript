
// number ->>>>>>>

const score = 400.567

const value = new Number(400) 

console.log(score)
console.log(value)

console.log(value.toString().length)
console.log(score.toFixed(2))

console.log(score.toPrecision(3)) 
const one_zero = 100000
console.log(one_zero.toLocaleString('en-IN'))

// math ->>>>>>>

console.log(Math.abs(-5)) 
console.log(Math.round(5.6)) 
console.log(Math.ceil(4.1))
console.log(Math.floor(4.9))
console.log(Math.max(4 , 3, 6, 8)) 
console.log(Math.min(4, 3, 6, 8))

console.log(Math.random()) // gives a number between 0 to 1 
console.log((Math.random() * 10) + 1)

const min = 10 
const max = 10 

console.log((Math.floor(Math.random()) * (max - min + 1)) + min)




