//### Maimum in an array ###
//Method 1
const arr = [12,34,11,76,345];
function findMax1(arr){
    return Math.max(...arr);
}
console.log(findMax1(arr));
//Method 2
let max = 0;
function findMax2(arr){
    arr.forEach(element => {
        if(element > max){max = element}
    });
    return max;
}
console.log(findMax2(arr));