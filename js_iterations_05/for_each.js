const coding = ["js" , "ruby" , "cpp" , "java" , "python"]

// one way 
// coding.forEach( function (val) {
//     console.log(val)
// })

// // another way
// coding.forEach( (val) =>  {
//     console.log(val)
// })

// another way 

// function printMe(val) {
//     console.log(val) 
// }

// coding.forEach(printMe)


// in for each loop we can access element, index and the whole array also

// coding.forEach( (el, ind, ar) =>  {
//    console.log(el, ind, ar)
// })


const MyCoding = [
    {
        Language : "javascript",
        file : "js",
    },
    {
        Language : "java",
        file : "java",
    },
    {
        Language : "python",
        file : "py",
    }
]

    MyCoding.forEach( (obj) =>{
        console.log(obj.Language, "->", obj.file) ;
    } )
