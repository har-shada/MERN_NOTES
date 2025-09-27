/*x=10; //global variable
console.log(x);
let y=5;
const z=12;
var w=15;
{
    var y1=6;
    const y2=17;
    console.log("var inside block scope:",y1);
    console.log("const outside block scope:",y2);

}

function sayHi(){
    for(let i=0;i<x;i++) console.log("HI",i);
}
sayHi();

//nested scopes
function nestedScopes(){
    let value = 145;
    for(let i=0;i<5;i++){
        if(i%2==0){
            let value2=35;
            console.log(value, value2);
        }
    }
}

/*let arr=[1,[1,2,3],4,5,[6,95,71],80];
for(let i=0;i<i.length;i++){
    for(let j=0;j<3;j++){
        console.log(arr[i][j]);
    }
}*/


//print all array element

const arrr=  [1,[2,3,4],5,6,[7,8]];
//print the nested array
for(let i=0;i<arrr.length;i++){
    console.log(arrr[i]);

}

// we know that the array will contain only numbers and array
//METHOD 1-using undefined keyword (as a variable which is not array, will have,length= undefined)
console.log("Printing nested array using undefined keyword");
let ar=[1,[2,3],[3,4],5];
for(let i=0; i<ar.length;i++){
    if(ar[i].length===undefined){
        console.log(ar[i]);
    }else 
        for(let j=0;j<ar[i].length;j++){
          console.log(ar[i][j]);
        }
    }
    //this 

// Method-2 using typeof keyword
console.log("Printing all elements of array using typeOf");
let a=[1,[2,4],[6,4],5];
for(let i=0;i<a.length;i++){
    if(typeof a[i]=="number"){
        console.log(a[i]);
    }else 
        for(let j=0;j<a[i].length;j++){
            console.log(a[i][j]);
        }
}
//Method -3-using isArray()method isArray returns boolean value 
//isArray(arr)-> returns boolean value determing if a variable "arr"is an array or not
const arr = [1, [1, 2, 3], 4, 5, [6, 95, 71], 80];
for(let i=0;i<arr.length;i++){

if(Array.isArray(arr[i]))console.log(arr[i]);
else{
    for(let j=0;j<arr[i].length;j++){
        console.log(arr[i][j]);

    }
}

   }
//Q:-write a function that takes a nested array as an argument & tells 
// if this nested array is a matrix or not
function isMatrix(arr){
    if(!Array.isArray(arr)) return false; // if arr = 5; or arr='a'   Arrray.isArray returns boolean values
    if(!Array.isArray(arr[0]))return false;//arr =[1,2,3,4]
    let colSize = arr[0].length;
    for(let array of arr)
        if(array.length !=colSize)
            return false;

    return true;
};
console.log("Single Dimensional array" , isMatrix([1,2,3,4,5]));
console.log("An Acutal Array "+ isMatrix(
                     [
                     [1,2,3],
                      [2,3,7],
                      [1,4,5]
                    ]
                  
));
console.log("An nested array with diffrent no of rows " + isMatrix(
                                                   [ [2,4,5],
                                                    [2,3],
                                                    [4]])
                                                );



//Q:- write a function to calculate product of sum of each rows
function calRowProduct(arr){
    let ans=1;
    let sum=0;
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr[i].length;j++){
            sum+=arr[i][j];


        }
        ans *=sum;
    }
    return ans;
}
// Q
function calSum(num){
    for(let i=0;i<array.length;i++){
        for(let j=0;j<array[i].length;j++){
            sum+=array[i][j];
        }
        return sum; 
    }
}
//Q :-print all subarray  (hw)
//Q2:-print sum of all subarrrays(hw)
//1st aug assignment
 







function sumOfArrays()
{
        
        let total=0;
        let sum=0;
        for(let i=0;i<ar.length;i++){
           for(let j=i;j<ar.length;j++){
            sum+=a[j];
            total+=sum;
        }
       return total;
    }
        let a=[2,8,9];
        console.log("sum of all sub arrys:",sumOfArrays(a));
}

