const myObj = {
    js : "javascript", 
    cpp : "c++",
    rb : "ruby",
};

for (const key in myObj) {
    console.log(`value of ${key} is ${myObj[key]} `) ;
}

// we can not iterate map using for-in loop for that we have to use for-of loop 

const ar = [5,4, 3, 2, 1, 0]


for (const ind in ar) {
    console.log(`value of ${ind} is ${ar[ind]} `) ;
}




