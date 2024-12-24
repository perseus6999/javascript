// nested scope

function one() {
    const username = "Pritam" 
    function two() {
        const website = "Mohanta" 
        console.log(username) 
    }
    // console.log(website)  no scope
        two()
}
    one() 

    // similarly holds for if - else condition also 

// ++++++++++++++++++++++ interesting ++++++++++++++++


console.log(addone( 5))

function addone(num) {
    return num + 1
}



// console.log(addtwo(5)) this will throw an error

const addtwo = function(num) {
    return num + 2
}


console.log(addtwo(5))





