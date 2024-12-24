
const name = "Pritam Mohanta" 
const roll = 21 

console.log(name + roll) // old method 

console.log(`My name is ${name} and roll number is ${roll}`) // new and more readable

// we can also define a string as a object -> 

const user = new String("Pritam") 

console.log(user[0]) // this is not like array this is like key and value -> it's and object
console.log(user.charAt[2])  

// some functions for string -> 

console.log(user.length) 
console.log(user.toUpperCase())  // this will convert the copy user into uppsercase
console.log(user.toLowerCase())  // this will convert the copy user into lowercase
console.log(user.indexOf('t')) 

const newString = user.substring(2, 2)
console.log(newString)

const anotherString = user.slice(-2, 2)
console.log(anotherString)

const new_user = "  op-Papon  "

console.log(new_user)
console.log(new_user.trim()) // it will simply erase the front and rear spaces 

console.log(new_user.replace('-' , ' ')) // replace - this with ' '
console.log(new_user.includes('papon'))
console.log(new_user.includes('pritam'))
console.log(new_user.split('-')) // splits with respect of the input and convets string into an array

