
const randomColor = function() {
    const hex = "0123456789ABCDEF";
    let color = '#' ;
    for( let i = 0 ; i < 6 ; i++) {
        color += hex[Math.floor(Math.random() * 16)] ;
    }
    return color ;
} 

console.log(randomColor()) ;
    
let intervalId = null ;
    
const StartChangingColor = function() {
    if(intervalId == null) {
        intervalId = setInterval(function(){
            document.body.style.backgroundColor = randomColor() ;
    }, 1000) ;
}
} ;

const StopChangingColor = function() {
        clearInterval(intervalId) ;
        intervalId = null ;
        console.log("color changing stopped") ;
};

document.querySelector('#START').addEventListener
('click', StartChangingColor ) ;

document.querySelector('#STOP').addEventListener
('click' , StopChangingColor) ;