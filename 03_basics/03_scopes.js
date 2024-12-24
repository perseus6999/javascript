let a = 10 
const b = 20 
var c = 30 // scope independent........that's why problem arises

if (true) {
    a = 100 
    b = 100 
    c = 100 
}
console.log(a) 
console.log(b) 
console.log(c)  