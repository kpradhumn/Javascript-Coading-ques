//Write a JavaScript program to convert a string to title case (capitalize the first letter of each word). 

const str = "this is an apple"
function tittleCase(){
    // let str1 = str.split( " ");
    // str1.forEach((ele)=>{        
    // });
    return str
        .toLowerCase()
        .split(" ")
        .map(ele => ele.charAt(0).toUpperCase() + ele.slice(1))
        .join(' ')
        ;

}
console.log(tittleCase(str));