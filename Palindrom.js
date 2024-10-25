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