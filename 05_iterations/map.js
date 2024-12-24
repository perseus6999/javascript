//  map allows you to create a new array by applying
//  a function to each element of the original array.

const Nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 

// const myNums = Nums.map((item) => item + 10)

// console.log(myNums)

// we could use nesting in map and filter also 

const MyNestedNums = Nums
                    .map((item) => item * 10) 
                    .map((item) => item + 5) 
                    .filter((item) => item < 50)

            console.log(MyNestedNums) 


