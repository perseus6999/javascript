
// this -> referse the current context

const user = {
    username : "Pritam",
    price : 999,
    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`)
        console.log(this)
    }
}

    // user.welcomeMessage()
    // user.username = "Mohanta"
    // user.welcomeMessage()
    // console.log(this)


    const greenchai = function() {
        let username = "Pritam Mohanta" 
        console.log(this)
    }

    const blackchai = () => {
        let username = "Pritam Mohanta"
        console.log(this)
    }

    // greenchai()
    // blackchai()

    // const addTwo = (num1, num2) => {
    //     return num1 + num2 
    // }

    // implicite return 

    const addTwo = (num1, num2) => (num1 + num2 )
    console.log(addTwo(4, 5))