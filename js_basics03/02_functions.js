// ... > The rest parameter syntax allows a function to accept an indefinite number of arguments as an array,

function CalculateCartPrice(... num) {
    return num 
}

function concept( val1, val2 , ... num) {
    return num 
}

console.log(CalculateCartPrice(100 , 200 , 300 , 400)) 
console.log(concept(100 , 200 , 300 , 400)) // now the first two elements are in val1 and val2 and rest are in num

function handleobject(anyobject) {
    console.log(`user is ${anyobject.username} and the price is ${anyobject.price}`)
}

const myobj = {
    username : "sam",
    price : 399,
}

    handleobject(myobj)

// we can call this function in this way also 

handleobject({
    username : "sam",
    price : 399,
})

// we can do the same thing for array also 
