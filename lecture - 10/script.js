//Q:-String question 
//1.given a variable name , seperated by space write two functions 
//1.cinvert this variablename to camel case
//2.convert this variable name to snake case
const camelCaseObj={
 convertToCamelCase:function  convertToCamelCase(str){
let ccase="";
 
    for(let i=0;i<str.length;i++){
        if(str[i]===" "){
         
      ccase+= str[i+1].toUpperCase();
      i++;
        } else ccase += str[i];
}
ccase = ccase.replaceAll(" ","");
return ccase;
//console.log("camel case of :"+str+"is:",convertToCamelCase(str))

},
snakeCase: function snakeCase(str){
    return str1.trim().replaceAll(" ","_");
}

}
const str1="student first name";
console.log("camel case of "+str1+"is:",camelCaseObj.convertToCamelCase(str1));

console.log("snake case of "+str1+"is:",camelCaseObj.snakeCase(str1));





//reverse a string
//2.check if the string is palindromw or not
//3.find the no of words in a string
//4.find the longest word in a string
//5.function to find the first non repeating character
/*function revString(str){
    let reverse="";
    for(let i=str.length-1;i>=0;i--)

revser+= str[i];
return reverse;
 }

 //palindrome
 function isPalindrome(str){
    let n=str.length;
    for(let i=0;i<Math.floor(n/2);i++){
        if(str[i]!=str[n-i-1])
            return false;

    }
    return true;
 }
 function numberOfWords(str){
    return.str.trim().split(" ").length;
 }
 function largestWordString(str){
    str=str.trim();
    str=str.plit(" ");
    let largestWord=str[0];
    for(let word of )

    )
 }
 functionfirstNonRepeatingChar(str){
    str=str.trim();

    let n= str.length;
    for(let character of str){
        if
    }
 }

/*let str1="abcd";
let start=str1[0];
let end=str1.length-1;;
for(let i=str1.length-1;i>=0;i--){
//  str1+= str1.reverse(); 
  /// console.log(str1);
   let temp=str1[start];
    str1[start]=str1[end];
    str1[end]=temp;
console.log(str1);
*/
//}
/*let str3="abcd";
reverse="";
for(let i=0;i<str3.length;i++){
    reverse+=str3[i];
    console.log(reverse);
}*/


//find number of words in string
/*let str2="Hi im harshada";
let count=1;
str2.trim();
for(let i=0;i<str2.length;i++){
    if(str2[i]==" " ){
       count++;   
 }

    }
     console.log(count);*/

//find longest word in string
/*let str4=" This is class room where javascript clases are held";
let longest;
for(let i =0;i<str4.length;i++){
    

}*/
//H.W reverse each word of a string 
//str=" Hi i'm Vaibhav";
//op:-"iH ma
//reverse the string 
function revserString(str){
    let revString="";
    //for(let i=str.length-1;i>=0;i--)
    //revString+=str[i];
    for(let i=0;i<str.length;i++){
        revString+=str[str.length-i-1];
      
    }
      return revString;
}
const str="Hello world ";
console.log(revserString(str));

//palindrome check
function isPalindrome(str){

    let n= str.length;
    for(let i=0;i<Math.floor(n/2);i++){ //n=4 helo 
        if(str[i]!=str[n-i-1])
            return false;
    }
    return true;
}
const str2="Hello world ";
console.log(isPalindrome(str2));
//find number of words in a string

function numberOfWords(str){
    return str.trim().split(" ").length;
}
function largestWordInString(str){
    str=str.trim();
    str=str.split(" ");
    let largestWord= str[0];
    for(let word of str){
        if(word.length>largestWord.length){
            largestWord=word;
        }
    }
    return largestWord;
}
const str3="Hi, harshada welcome ";
console.log(largestWordInString(str3));

function firstNonRepeatingCharacter(str){
    str=str.trim();
    let n= str.length;
    for(let character of str){
        if(str.indexOf(character)===str.lastIndexOf(character))
            return character;
        }
}
const str4="abceabdc";
console.log(firstNonRepeatingCharacter(str4)); 