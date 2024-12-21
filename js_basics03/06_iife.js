// Immediately Invoked Function Expression -> 
// An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined. 

// The first () is for preventing polluting the global namespace
// The second part () creates the immediately  invoked function expression
// () through which the JavaScript engine will directly interpret the function.


(function chai() {
    console.log("IIFE")
})() ;

( () => {
    console.log("IIFE")
})() ;