// 1. Get the sum of two arrays...actually the sum of all their elements.P.S. Each array includes only integer numbers. 
// Output is a number too.

function sumOfArray(array1,array2){
 let sum=0
  array1.forEach((e)=>{
    sum+=e
    return sum
  })
  array2.forEach((e)=>{
    sum+=e
    return sum
  })
  return sum
}
let a=[1,2,3]
let b=[1,4]
// console.log('1.Sum of two arrays:',sumOfArray(a,b));
// console.log('------------------------------------');


// 2. Using a forEach print all even numbers up to and including n. Don’t include 0. 

function printEvenNumbers(n){
let arr=[]
for(i=1;i<=n;i++){
    arr.push(i)
}
let evenNumbers=[]
 arr.forEach((e)=>{
    if(e%2===0){
       evenNumbers.push(e)
    }
 })
 return evenNumbers
}
// console.log('1.Print even numbers:',printEvenNumbers(50));
// console.log('------------------------------------');


// 3. Using a forEach output the elements in reverse order
r=[2,3,410,9,1]
let rev=r.forEach((element,index,array)=>{
    console.log('ertyui',array,'---')
    temp=[]
    temp.push(r[index])
    console.log(temp)
   
    // r[index]=r[array.indexOf(array.length--)]
    r[array.indexOf(array.length--)]=temp[index]
    return r
    
})
console.log(rev);