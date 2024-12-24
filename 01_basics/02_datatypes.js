
// primitive datatypes

// 7 types -> String, Number, Boolean, null, undefined, Symbol

const score = 10 
const scoreValue = 100.3
const isLoggediIN = false
const OutsideTemp = null
let userEmail ; 

const Id = Symbol("123") 
const anotherId = Symbol("123") 

console.log(Id === anotherId)


// Reference (Non primitive)

// Array , objects, functions 

// Array -> 

const heros = ["Shaktiman" , "Naagraj" , "Doga"] ;

// objects -> 

let myobj = {
    name : "hitesh",
    age : 22,
}

console.log(typeof null) // typeof null == object
// typeof object (native or host and does implement [[call]]) -> function
// typeof object (native and does not implement [[call]]) -> object 


// functino -> 

const myfunction = function(){
    console.log("Hello World") 
}

console.log(typeof myfunction)