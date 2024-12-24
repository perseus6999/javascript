
const myArr = [5 , 4 , 3 , 2 , 1, 0 ] 


console.log(myArr[2]) 

myArr.push(6)  // adds 6 to the back
myArr.pop() // pop out the last element

// similarly for front -> unshift, shift 

myArr.unshift(6) // adds 6 to the front
myArr.shift() // removes the first element

// it is not a good function as it changes the indexing of each elements

console.log(myArr.includes(9)) // returns a boolean output that 9 is present or not in the array
console.log(myArr.indexOf(9)) // returns the element at index 9 if such an elememt doesn't exist then return -1

const newArr = myArr.join() //newArr is a string object similar to myArr

// slice , splice 

// slice -> slice(pos , pos + 1) -> doesn't include the last element and doesn't change the property of original array

// splice -> splice(pos, length) cut this portion of the array from the actual array thus the property of actual array changes

// ex -> slice

const arr1 = myArr.slice(2, 4) // includes 2, 3

console.log(arr1)
console.log(myArr)

// ex -> splice

const arr2 = myArr.splice(1, 3)

console.log(arr2)
console.log(myArr)

 