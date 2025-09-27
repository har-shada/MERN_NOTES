//trim method it remove unwanted spaces

let userIN="      hello wrold    ";
console.log(userIN.trim());

// trim also removes tabs , newlines etc not just space

let messy= "\n\t  clean me \t\n";
console.log(messy.trim());

//replace method  replace only change first match
let statement = "I love cats cats cats ";
console.log(statement.replace("cats","dogs"));
///replace all chnges all matches
let str="hi,i'm Harshada";

console.log(str.substring(3,9));
console.log(str.substring(3));//
console.log(str.substring("3"));
console.log(str.substring(-3)); 
                               
console.log(str.substring(-3,-10));
console.log(str.substring(-3,1000));
//example 
let substring=" Hello world";
console.log(substring.substring(0,5));
console.log(substring.substring(5,1));
