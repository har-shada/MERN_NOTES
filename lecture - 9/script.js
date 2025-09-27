
///*another way to create obj
const newObj = new Object();
newObj.a="a";
newObj.b="b";
newObj.c="c";
console.log({newObj});
//==============================Strings========================

let str='a';
console.log(typeof str);

str='abc';
console.log(typeof str);

str="abe";
console.log(typeof str);
 
str=['a','b','c','d'];
console.log(typeof str);
console.log(typeof str[0]); 
// string using backticks
str=`abc`;
console.log(typeof str);
//case when we must use double codes
str= "Hi,i'm Harshada";
console.log(typeof str);

//case when we must use single codes

str='Hi you must take "javascript" classes'
console.log(str);
//case when we must use back tickss
str = `Hi,i'm Harshada and you must takke "javascript" classes`;
console.log(str);
// some more features of back ticks - we can insert any variable inside backticks
let personName="Harshada";
str = `Hi i'm ${personName} andyou must take "javascript" classes`
console.log(str);

//some methods in string
str ="  We're going to use some methods of strings W  ";
//includes function-> returns if the given string is present in str or not
console.log(str.includes('going'));

//replace function-> replaces only the first occurence of "W " with "X"
console.log(str.replace("W","X"));
console.log(str);
//replaceAll function -> replace all "W" with "X"
console.log(str.replaceAll("W","X"));
console.log({str});// replaceAll() doesent changes  the original string

//trim()-> removes all leading and trailing spaces
console.log(str);
console.log(str.trim());
console.log({str});

// substring ()-> gives substring -> doesnt change the original string 
console.log(str.substring(3,9));//gives substring starting from 3 to 9-1
console.log(str.substring(3));//gives substring starting from index=3 to till end
console.log(str.substring("3"));//gives substring starting from index=3 to till end
console.log(str.substring(-3)); //substring consider negative number as a zero it starts 
                               //from zero to till end
console.log(str.substring(-3,-10));// gives emppty string
console.log(str.substring(-3,1000));// behaves as (0 to n)

//slice()-> almost same as substring , but changes (-)ves  handle diffrently

console.log(str.slice(3));//////gives substring starting from index=3 to till end
console.log(str.slice(3,5))//gives element from 3 to 4 i.e 5-1
console.log(str.slice(-3));//gives last 3 elemnt 

console.log(str.slice());///gives full string
console.log(str.slice(-100))//gives all element in case the number greater than the length of the string
console.log(str.slice(-9,-3)); //it will print from rings  
console.log(str.slice(-3,0));//gives empty string as end is smaller than start

//splits()->splits the stirng based on given character
console.log(str.split(","));
const  line="Hello welcome to MERN stack course "; //the space last gives empty str
console.log(line.split(" "));
//toUpperCase()
console.log("hello".toUpperCase());

/*================================== Wrapper object=============*/

const string = "Harshada";
const number = 67;
const bool= true;
const object={
    name :"Harshada",

};
console.log(string.__proto__);
console.object(number.__proto__);
console.log(bool.__proto__);
console.object(object.__proto__);
console.log(Number("123"));

/*=========================Spread and rest operator ======================*/
//Rest operator-> ... combines all the arguemtns and transform them into arrray
function addStudent(students,studentName)
{
    console.log(studentName)
    for(let student of studentName)
    students.push(student);
    console.log({students});

}
const students=["Rahul","Riya","Prem"];
addStudent(students,"Abhishek","pratik","Surbhi");

//desctructing
const [hi,...bye]=["Hi","Bye","Byee","Byeee"];
console.log({hi,bye});

//spread operator
const arr1=[1,3,5,6];
console.log({arr1});
console.log("Spreaded array: ",[0,...arr1,67,678,68]);
//Hm use spread oprator with object

