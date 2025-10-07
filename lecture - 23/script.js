const { use } = require("react");

 /* reduce() => Hofs*/
 let arr = [ 2,5,3,10,34];
 arr.reduce((acc,val,arr)=>()=>);

 function sumOfArrays(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];


    }
    console.log(sum);
 }
  let arr = [ 2,5,3,10,34];
  console.log(sumOfArrays(arr));

  // find the count of even numbers
    let count =arr.reduce((acc,val,index,array)=>{
        acc =+ val%2==0;
        return acc;

    },0);
    


  //find the frequency of each element 
  let fruits = ["apple", "guava","kiwi","guava","kiwi","Apple","Guava"];

  let freFruits = fruits.reduce((acc,val,index,array)=>{

    acc[val.toLowerCase()] = (acc[val.toLowerCase()]||0)+1;
    return acc;

  },{})
  console.log({freFruits});

  /*function freObj(fruits){
      
    let obj= {};
    for(let i in fruits){
       ( obj[fruits[i].toLowerCase()])= (obj[fruits[i].toLowerCase()]||0)+1;
    }
    return obj;
  }
  fruits = ["apple", "guava","kiwi","guava","kiwi","Apple","Guava"];
  console.log(freObj(fruits));*/


  // find()
  /*
  -returns value
  -returns the first element that matches the condition*/
  let  findKiwi = fruits.find((val,index,arr)=>val.toLowerCase()==="kiwi");
  console.log(findKiwi);

  /*given an array of object , containing details of users,console the name of first user aged above 30*/
  const users =[
    {name: "Alice", age:25, isActive:true},
    {name: "Bob", age : 30,  isActive:false},
    {name:"Charlie", age :22,isActive:true},
    { name:"Diana" , age: 28,isActive:false},
    {name: "Ethan", age : 35,isActive:true}
  ];
let updated = users.find((value)=> value.age>30)
console.log({updated});

  /*print the name and age of each user*/
  users.forEach((value)=>{
  console.log(value.name + ' '+ value.age);
  });
  /*Q3: function to create an array of names from above users
  o/p: ["Alice","Bob","Charlie","Diana","Ethan"]*/
 
let newUpdatedd= users.map((value )=>value.name)
console.log(newUpdatedd);

  /*Q4: function to dispaly all the active users from above array*/
  let newUsers = users.filter((value) => value.isActive==true)
   // if(value.isActive===true)
        console.log({newUsers});
   /*Q5:function to find the sum of age  for all users below 30 used reduce
*/
let newww = users.filter((value)=> value<30).reduce((acc,val)=>{
    acc += val.age;
    return acc;
},0);
console.log({newww});
/*Q6: function to get the names of all active users*///filter map

//=====passing aa function as an argument & returning a function======
function calculator(a,b,operation)
{
    return operation(a,b);
}
function multiply(a,b){
    return a*b;
}
function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
let sum34 = calculator(3,4,add);
console.log({sum34});

/*=====ERROR HANDLING=============*/

/*Once ==> restrict the function to be called more than once*/
/* memoization ==> if a function is called with same args  as before, it will not calculate the result */


try{
console.log(studentName);
let studentName = "pratik ";
console.log(studentName);
if(studentName==="pratik") throw new Error("pratik found!!!");

}catch(error){
console.log(error.message);

}
finally {
    console.log("in finally block");//finally block always run and note that finally block run in the sequence after catch block
}
