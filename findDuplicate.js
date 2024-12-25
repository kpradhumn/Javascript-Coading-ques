// Find duplicate in an array

const array = [1,2,3,8,2,8,4];
function findDuplicate(array){
    const duplicate = array.filter((ele,index,arr) => {
        return arr.indexOf(ele) !== index;
    })
    return duplicate;
}
console.log(findDuplicate(array));