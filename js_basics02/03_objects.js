
// object literals -> Non singelton object

const mySym = Symbol("Key1")

const js_user = {

    Name : "Pritam", 
//  mySym : "myKey1",// the key will be treated as a string insted of symbol
    [mySym] : "myKey1", // now the key will be treated as a symbol
    age : 21,
    "full name" : "Pritam Mohanta",
    location : "Siliguri",
    email : "Pritam@gmail.com", 
    isLoggedIn : false ,
    lastLoginDays : ["Monday" , "Sunday" ]
}

    console.log(js_user.email) // for access
    console.log(js_user["email"]) 
    console.log(js_user["full name"]) // another and important way

    console.log(typeof mySym) 
    console.log(typeof js_user[mySym])

    js_user.email = "Pritam@meta.com" // here i have overwritten the email

    // console.log(js_user.email)

    // but if we want to avoid the overwriting we could use Object.freeze()

    // Object.freeze(js_user) // now we could not change the actual properties of the object
     
    // now if i try to change the properties 

    // js_user.email = "Pritam@amazon.com"

    console.log(js_user.email) // now it would no change

    js_user.greetingOne = function() {
        console.log("Hello js user")
    }

    js_user.greetingTwo = function() {
        console.log(`Hello js user, ${this.Name}`) // we apply this for accessing that current object elements
    }

    console.log(js_user.greetingOne())
    console.log(js_user.greetingTwo())
    console.log(js_user)
    

