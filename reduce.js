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
                      {id:3,productName:'Sofa',price:4800},
                      {id:4,productName:'TV Unit',price:8078},
                      {id:5,productName:'Wardrobe',price:13260}
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

let priceList=[{id:1,productName:'Pen',price:30,quantity:2},
                      {id:2,productName:'Eraser',price:10,quantity:1},
                      {id:3,productName:'Box',price:40,quantity:4},
                      {id:4,productName:'Scale',price:10,quantity:2},
                    ];

let cost= priceList.reduce((a,b)=>{
    return a + b.price*b.quantity
},0)
console.log('4.Cost of all objects:',cost)
console.log('------------------------------------------');


// 5. Write a function that takes an array of strings and returns an object where the keys are the strings, 
// and the values are the number of times each string appears in the array. Use the reduce method to accomplish this.

let arrString=['uma','maha','maha','uma','saravana','muthu','marudhu','marudhu']

let occurrance=arrString.reduce((a,b)=>{
   if(b in a){
    a[b]=a[b]+1
   }
   else{
    a[b]=1
   }
   return a
},{})
console.log('5.Number of times each string appears in the array:',occurrance)
console.log('------------------------------------------');