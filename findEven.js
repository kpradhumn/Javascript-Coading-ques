//Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers. 

const arr = [23,44,2,65,69,78,31]
function findEven(arr){
    
   return arr.filter((ele)=>ele % 2 == 0);

}
console.log(findEven(arr));