
    // this instances in breif

const user = {
    username : "Pritam",
    LoginCount : 8, 
    SignedIn : true, 

    getUserDetails : function() {
        // console.log("Got user details from database") ;
     // console.log(`My username is ${username}`) -> wrong this will not execute as username is undefined
     console.log(`My username is ${this.username}`) 
    }
} ;

// console.log(user.username) ;
// // console.log(user.getUserDetails()) ;
// user.getUserDetails() ;

    // new instance in brief 

function User(username, id, password) {
    this.username = username ;
    this.id = id ;
    this.password = password ;

    return this ;
} 

    const userOne = User("Pritam" , 69 , "Pritam111#") ;
    const userTwo = User("Anwesha" , 34 , "Bhodai111#" ) ; // this will overwrite the userOne as there is same memory

    // that's why we use new instance for separte memory allocation

    // console.log(userOne) ;
    // console.log(userTwo) ;

    const UserOne = new User("Pritam" , 69 , "Pritam111#") ;
    const UserTwo = new User("Anwesha" , 34 , "Bhodai111#" ) ;

    console.log(UserOne) ; // these are separated now 
    console.log(UserTwo) ;


    



 


