
// stack (primitve) , heap(non - primitive)

// stack gives the a copy not reference of the memory 
// that's why it doesn't change the actual value 

// whereas the heap gives the reference of the actual memory and if 
// if we change that .....that will also change the actual data

// ex 

let Pritam = "PritamMohanta" 
let Mohanta = Pritam // Mohanta gets the copy of Pritam
Mohanta = "MohantaPriam" 

console.log(Pritam) 
console.log(Mohanta) 

let user01 = {
    email : "user01@google.com",
    upi : "user22"
}

let user02 = user01 ; // user02 gets reference the user01

user02.email = "user02.@meta.com"

console.log(user01.email) 
console.log(user02.email)
