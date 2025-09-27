/*const isDivisibleBy3= (num)=>{
    if(num%3==0) return true;
    else return false;
}*/
const isDivisibleBy3=(num)=>!(num%3);
console.log(isDivisibleBy3(6));
//arrow funmction is not  hoisted 
// NOTE: Arrow function do not have thier own this keywod are they uses parents  this
const  student={
    fullname: "harshda pohane",
    age:2,
    result1:function (resultStatus){
        console.log(this.fullname+ "has"+resultStatus+ " the  exam");
        console.log(this);//show the  object properties
    },
    result2: (resultStatus)=>{
        console.log(this.fullname  + "has"+ resultStatus + "the exam");
        console.log(this)//does not show the property of object
    }

};
student.result1("passed");
student.result2("failed");
////===========anonymous function=============
/* basically a function with no name*/

/*=======higher order functions(Hofs)=========*/
//these functions are either function  that takes  functions  as  a arguemtn or return a function

//types of higher order function
//1.forEach
//- applies the callback function on each element
//- iterates over  each eleemnt and doesnt  brreak like   other for loops
//doesnt change the original arraay
//e.g
let arr= [2,1,6,3,9];
console.log(
    arr.forEach((value,index,array)=>{
    value *= 2;
    array[index]= value;
    console.log(value,index,array);
})
);
console.log({arr});



let users = [
    {name: "Ramesh", age: 20},
    {name:"Suresh",age: 10},
    {name: " Rani", age:40},
];
//print name and age  of users array using  forEach\
users.forEach((value)=>{
    console.log(value.name  + " is "+ value.age);
});

/*map()
//- transform the array
//-returns an array
//-does not chnage the original array*/

arr=[2,4,3,5];
let squaredArr= arr.map((value,index,array)=>{;
return value*value;
});
console.log({squaredArr});

users = [
    {name:"ramesh", age:20},
    {name:"suresh",age:20},
    {name:"Rani", age:40},
];
//transform the name of each user  to uppercase

const updatedUsers = users.map((value) => {
return {name : value.name.toUpperCase(),age: value.age};
});

console.log(updatedUsers);
console.log({users});
/*map()
//- keeps the elements that passes the condition 
//-returns an array
//-does not chnage the original array
// -num.filter((value,index,array)=> condition)
// */
let nums = [2,12,9,18,27];
const oddNums= nums.filter((value,index,array)=>value%2);
console.log({oddNums});

//hw
let names =["pranjal", "Bavesh","Uday","siddhart",  "neha"];
//print the name that are less than 5 letters 
const newNames= names.filter((value)=> value.length>5);
console.log({newNames});
