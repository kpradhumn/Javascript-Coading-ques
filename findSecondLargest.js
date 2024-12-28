//Find second Largest in an array

const array = [1,2,3,8,2,88,89,4];
function findSecondLargest(array){
    const uniqueArray = [...new Set(array)] // Convert the array to a Set to remove duplicates spred operator(...) convert set back to array
    const sorted = uniqueArray.sort((a,b)=> b-a)
    return sorted[1];

}

console.log(findSecondLargest(array));