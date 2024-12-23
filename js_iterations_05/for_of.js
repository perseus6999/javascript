
// we can not iterate object using for-of loop for that we have to use for-in loop 

const ar = [5,4, 3, 2, 1, 0]

for (const  el of ar) {
    console.log(el) ;
}


const map = new Map() ;

    map.set("IN", "INDIA")
    map.set("NZ", "NEWZELAND")
    map.set("CN", "CHINA")

for (const  [key, el] of map) {
    console.log(key , "->",  el) ;
}






