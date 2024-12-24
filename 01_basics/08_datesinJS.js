// dates (object)

const myDate = new Date()

console.log(myDate.toString()) 
console.log(myDate.toLocaleString())
console.log(myDate.toDateString())
console.log(myDate.toISOString())
console.log(typeof myDate)

let myCreatedDate = new Date(2024 , 11 , 12) // months indexing starts form 0
let anotherCreatedDate = new Date("2024-11-12") // another way 
let AnotherCreatedDate = new Date("12-11-2024") // Another way 

console.log(myCreatedDate.toLocaleString())
console.log(anotherCreatedDate.toLocaleString())
console.log(AnotherCreatedDate.toLocaleString())

let myTimeStamp = Date.now() 

console.log(myTimeStamp) ;
console.log(myCreatedDate.getTime()) ;

let NewDate  = Date.now() 

console.log(NewDate.getDay()) // gives the day
console.log(NewDate.getMonth() + 1) // gives the month
