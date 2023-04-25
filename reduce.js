// 1. Write a function that takes an array of numbers and 
// returns the sum of all the numbers.
//  Use the reduce method to accomplish this.

// let array=[1,2,3,6,8];
// let sumOfAllNumbers=array.reduce((a,b)=>{
//     return a+b
// },0)
// console.log('1.Sum of all the numbers:',sumOfAllNumbers);
// console.log('------------------------------------------');


// 2. Write a function that takes an array of objects with a price property and 
// returns the total cost of all the objects. 
// Use the reduce method to accomplish this.

// let productPriceList=[{id:1,productName:'Table',price:3260},
//                       {id:2,productName:'Chair',price:1060},
//                       {id:3,productName:'Sofa',price:4800},
//                       {id:4,productName:'TV Unit',price:8078},
//                       {id:5,productName:'Wardrobe',price:13260}
//                     ];
// let totalCost= productPriceList.reduce((a,b)=>{
//     return a + b.price
// },0)
// console.log('2.Cost of all objects:',totalCost)
// console.log('------------------------------------------');


// 3. Write a function that takes an array of numbers and 
// returns the average of all the numbers. 
// Use the reduce method to accomplish this.

// let avgArr=[1,1,1,5];
// let average= avgArr.reduce((a,b,index,array)=>{
//      a=a+b
//     if(index===array.length-1){
//       return  a=a/array.length
//     }
//     else{
//     return a
//     }
// },0)
// console.log('3.Average of numbers in a array:',average)
// console.log('------------------------------------------');


// 4. Write a function that takes an array of objects with a quantity and price property and 
// returns the total cost of all the objects, considering the quantity of each object. 
// Use the reduce method to accomplish this.

// let priceList=[{id:1,productName:'Pen',price:30,quantity:2},
//                       {id:2,productName:'Eraser',price:10,quantity:1},
//                       {id:3,productName:'Box',price:40,quantity:4},
//                       {id:4,productName:'Scale',price:10,quantity:2},
//                     ];

// let cost= priceList.reduce((a,b)=>{
//     return a + b.price*b.quantity
// },0)
// console.log('4.Cost of all objects:',cost)
// console.log('------------------------------------------');


// 5. Write a function that takes an array of strings and returns an object where the keys are the strings, 
// and the values are the number of times each string appears in the array. Use the reduce method to accomplish this.

// let arrString=['uma','maha','maha','uma','saravana','muthu','marudhu','marudhu']

// let occurrance=arrString.reduce((a,b)=>{
//    if(b in a){
//     a[b]=a[b]+1
//    }
//    else{
//     a[b]=1
//    }
//    return a
// },{})
// console.log('5.Number of times each string appears in the array:',occurrance)
// console.log('------------------------------------------');


// 6. Write a function that takes an array of objects with a 
// name and age property and returns the average age of all
// the objects. Use the reduce method to accomplish this.

// let people=[{id:1,name:'uma',age:20},
//             {id:2,name:'marudhu',age:20},
//             {id:1,name:'yc',age:20},
//             ]
// let averageOfAge= people.reduce((a,b,index,array)=>{
//     a=a+b.age
//    if(index===array.length-1){
//      return  a=a/array.length
//    }
//    else{
//    return a
//    }
// },0)
// console.log('6.Average age of all the objects:',averageOfAge)
// console.log('------------------------------------------');


// 7. Write a function that takes an array of strings and
//  returns the longest string in the array. 
// Use the reduce method to accomplish this.

// let strings=['mahaaaaaaaaaaaaa','uma','marudhu','entertainment','antidisestablishmentarianism']
// let longestString=strings.reduce((a,b)=>{
//     if(b.length > a.length){
//         a=b
//     }
//     return a
// },'')
// console.log('7.Longest String in the array:',longestString)
// console.log('------------------------------------------');


// 8. Write a function that takes an array of objects with a name 
//  and salary property and returns
//  the total salary of all the employees. Use the reduce method to accomplish this.

// let employeeSalaryList=[{id:1,employeeName:'Table',salary:10000},
//                       {id:2,employeeName:'Chair',salary:10000},
//                       {id:3,employeeName:'Sofa',salary:30000},
//                       {id:4,employeeName:'TV Unit',salary:40000},
//                       {id:5,employeeName:'Wardrobe',salary:10000}
//                     ];
// let totalSalary= employeeSalaryList.reduce((a,b)=>{
//     return a + b.salary
// },0)
// console.log('8.Total salary of all the employees:',totalSalary)
// console.log('------------------------------------------');


// 9. Write a function that takes an array of numbers and 
// returns the product of all the numbers. 
// Use the reduce method to accomplish this.

// let num=[1,2,4];
// let productOfAllNumbers=num.reduce((a,b)=>{
//     return a*b
// },1)
// console.log('9.Product of all the numbers:',productOfAllNumbers);
// console.log('------------------------------------------');

// 10. Write a function that takes an array of objects with a category 
// property and returns an object where the keys are the categories, and
// the values are the total cost of all the objects with that category. 
// Use the reduce method to accomplish this.

let arr=[
          {id:1,name:'Carrot',category:'Vegetable',cost:1000},
          {id:2,name:'Urad Dhal',category:'Groceries',cost:7000},
          {id:3,name:'Milk',category:'Dairy',cost:2000},
          {id:4,name:'Curd',category:'Dairy',cost:1000},
          {id:5,name:'Mango',category:'Fruit',cost:6000},
          {id:6,name:'Pen',category:'Stationary',cost:9000},
          {id:7,name:'Jack fruit',category:'Fruit',cost:8000},
          {id:8,name:'Banana',category:'Fruit',cost:1000}]
let obj={}
let list=arr.reduce((v,e)=>{
    if(e.category in v){
        v[e.category]+=e.cost
        // v[e.category].push({id:e.id,name:e.name})
    }
    else{
        v[e.category]=e.cost
    }
    return v
},{})
console.log(list)