// 1. Write a function that takes an array of numbers and returns the sum of all the numbers.
//  Use the reduce method to accomplish this.

let array=[1,2,3,6,8];
let sumOfAllNumbers=array.reduce((a,b)=>{
    return a+b
},0)
console.log('1.Sum of all the numbers:',sumOfAllNumbers);
console.log('------------------------------------------');


// 2. Write a function that takes an array of objects with a price property and returns the total cost of all the objects. 
// Use the reduce method to accomplish this.

let productPriceList=[{id:1,productName:'Table',price:3260},
                      {id:2,productName:'Chair',price:1060},
                      {id:1,productName:'Sofa',price:4800},
                      {id:1,productName:'TV Unit',price:8078},
                      {id:1,productName:'Wardrobe',price:13260}
                    ];
let totalCost= productPriceList.reduce((a,b)=>{
    return a + b.price
},0)
console.log('2.Cost of all objects:',totalCost)
console.log('------------------------------------------');


// 3. Write a function that takes an array of numbers and returns the average of all the numbers. 
// Use the reduce method to accomplish this.

let avgArr=[1,1,1,5];
let average= avgArr.reduce((a,b,index,array)=>{
     a=a+b
    if(index===array.length-1){
      return  a=a/array.length
    }
    else{
    return a
    }
},0)
console.log('3.Average of numbers in a array:',average)
console.log('------------------------------------------');


// 4. Write a function that takes an array of objects with a quantity and price property and 
// returns the total cost of all the objects, considering the quantity of each object. 
// Use the reduce method to accomplish this.