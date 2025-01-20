
// There are different ways of writing promises

    // Promise 1

const PromiseOne = new Promise(function(resolve, reject) {
    // Do an async task 
    // DB calls, cryptography , network 

    setTimeout(function(){
        console.log("Async task is complete") ;
        resolve() ;
    }, 1000) ;

}) ;

PromiseOne.then(function(){
    console.log("Promise Consumed") ;
})

    // Promise 2

new Promise(function(resolve, reject) {
    setTimeout(function(){
        console.log("Async task2 is complete") ;

        resolve() ;
    }, 1000 ) ;

}).then(function(){
    console.log("Promise 2 is consumed") ;
})

    // Promise 3

const PromiseThree = new Promise(function(resolve, reject) {

    setTimeout(function(){
        resolve({username : "Pritam", email : "help@gmail.com"})
    }, 1000) ;
})

PromiseThree.then(function(user){
    console.log(user) ;
}) ;

    // Promise 4

const PromiseFour = new Promise(function(resolve, reject) {
    let error = false ;

    setTimeout(function() {
        if(!error){
            resolve({username : "Pritam", email : "help@gmail.com"}) ; // returns the object to the next then()
        }
        else {
            reject("Something went wrong") ; // returns the string to the next catach() 
        }
    }, 1000) ;

}) ;

PromiseFour
.then(function(user){
    console.log(user) ;
    return user.username ; // returns the user.username to the next then() 
})
.then(function(username) {
    console.log(username) ; 
})
.catch(function(error) {
    console.log(error); 
})
.finally(function() {
    console.log("The promise is either rejected or resolved") ;
})

    // Promise 5 - using async await

const PromiseFive = new Promise(function(resolve, reject){
    let error = false ;

    setTimeout(function() {
        if(!error){
            resolve({userId : "Perseus", Password : "Pritam111#"}) ; // returns the object to the next then()
        }
        else {
            reject("Something went wrong") ; // returns the string to the next catach() 
        }
    }, 1000) ;

});

async function consumePromiseFive() {
    try {
        const response = await PromiseFive ;
        console.log(response) ;
    }
    catch(error) {
        console.log(error) ;
    }
} ;
consumePromiseFive();


// Real life example 

// in Async Await format

async function getAllUsers(){

    try {
    const responseAwait = await fetch('https:jsonplaceholder.typicode.com/users') ; // fetch collects the information from the url
    const data = await responseAwait.json() ; 
    console.log(data) ;
    }
    catch(error) {
        console.log(error) ;
    }
}

// getAllUsers() ;

// in then(), catch() format 

fetch('https:jsonplaceholder.typicode.com/users')
.then(function(response) {
    const data = response.json() ;
    return data ;
})
.then(function(data) {
    console.log(data) ;
})
.catch(function(err) {
    console.log(err)
}) ;