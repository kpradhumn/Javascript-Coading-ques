//Find Max and Min in an array

const array = [1,2,3,8,2,88,4];
function findMax(array){
    return array.reduce((prev,curr)=>{
        return prev>curr ? prev : curr;
    })
}

function findMin(array){
    return array.reduce((prev,curr)=>{
        return prev>curr ? curr : prev;
    })
}
console.log("Min" +" "+ findMin(array));
console.log("Max" +" "+ findMax(array));