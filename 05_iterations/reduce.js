const Nums = [1, 2, 3, 4] 


// const mytot = Nums.reduce(function (acc, curr) {
//     return acc + curr ;
// },0)

// another way 

const mytot = Nums.reduce((acc, curr) => acc + curr , 0)

console.log(mytot)


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]


const totBill = shoppingCart.reduce((acc, curr) => acc + curr.price , 0) 

console.log(totBill) 