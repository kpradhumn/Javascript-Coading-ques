console.log("Coading question and answers");

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

// ### Palindrom ###

//Method 1
const str1 = "abccba"
function findPalindrom1(str){
    let i = 0,j= str.length-1;
    while(i<j){
        if(str[i] !== str[j]){
            console.log("Not a Palindrome");
            return;
        }
        i++;
        j--
    }
    console.log("Palindrome")        
}
findPalindrom1(str1);

//Method 2
const str2 = "abccba"
function findPalindrom2(str){
    return str == str.split(").revrese().join(");    
}
console.log(findPalindrom2(str2));

// ### Factorial of anumber ###

function factorial(num){
    if(num == 0 || num ==1){
        return 1;
    }
    else{
        return num * factorial(num-1);
    }
}

console.log(factorial(5));