//map()
//Q:  double the numbers in array
let numbers = [ 2,4,5,6,7];
let doubledNum = numbers.map(num=>num*2);;
console.log({doubledNum});

//Q:Mr.before each name
let namee=["John","Alex","sam"];
let updatedNames= namee.map(names=> "Mr." + names);
console.log({updatedNames});

//Q:add greeting to each name
let greetName= [ "Harshada", "Priya","Gaurav","tejas"];
let addGreeting = greetName.map(names => " Hello "  + names);
console.log({addGreeting});
//Q: chnage every number to its squared

let num=[1,3,4,7,6];
let updatedNum= num.map(number=> number*number);
console.log({updatedNum});
//Q: get the length of each name
let Name= [ "Harshada", "Priya","Gaurav","tejas"];
let nameLength= Name.map(namelengthh=>namelengthh.length>5);// this gives true false value
console.log({nameLength});


//filter 
let namess=["harshada","sujata","nehal","nirmit"];
let filterdName = namess.filter(filtered=> filtered.length>5);//this gives name wich are greater than 5
console.log({filterdName});

//Q filter property by age less than 30
//we are creating array of object here
const users=[
    {name: "Harshada", age: 30},
    {name: "Gaurav", age:23},
    {name: "Akash", age: 23},
    {name: "snehal", age : 13},
];
let updatedValues = users.filter(user=> user.age<30);//here filter gives name and age both ,
    console.log({updatedValues});                    // but if we use map instead filter then 
                                                    // it gives true false 

