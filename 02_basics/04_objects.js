// singleton object 

const js_user = new Object() 

js_user.id = "Pritam459" 
js_user.name = "Pritam Mohanta" 
js_user.isLoggedIn = false 

console.log(js_user)

console.log(Object.keys(js_user)) 
console.log(Object.values(js_user)) 
console.log(Object.entries(js_user))

const regularUser = {
    email : "Pritam@gmail.com",
    fullname : {
        userfullname : {
            firstname : "Pritam",
            lastname : "Mohanta",
        }
    }
}

console.log(regularUser)

const obj1 = {1 : 'a' , 2 : 'b'}
const obj2 = {3 : 'c', 4 : 'd' }
const obj3 = {5 : 'e', 6 : 'f' }

// for merging this objects elements into a single object ->

// const obj4 = Object.assign({}, obj1, obj2, obj3) 
// console.log(obj4) 

// another and short way 

// const obj4 = {...obj1 , ... obj2 , ...obj3}


const user_arr = [
    {
        id : 1,
        email : "pritam.com"
    },
    {
        id : 1,
        email : "pritam.com"
    },
    {
        id : 1,
        email : "pritam.com"
    },
     {
        id : 1,
        email : "pritam.com"
    },
]

console.log(user_arr)

