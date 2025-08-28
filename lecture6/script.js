//Q:-Delete last element  
let a=[1,4,3,7,9];
//let newAr=[];
//for(let i=0;i<a.length;i++){
    a.pop();
   // a.push(newAr);
   

console.log(a);
//using slice doesnt change the array until assigned to array itself
let arr1=[1,2,3,4,5,6];
arr1.slice(0,arr1.length-1);
console.log({arr1});
//using splice()-> chnages the exact array

let arr2=[1,2,3,4,5,6];
arr2.splice(arr2.length-1,1);
console.log(arr2);

//Q:-delete the element from start
let arrr=[1,2,3,4];
arrr.shift(); // it is not necessary to store this  method in  any variable,
                        //for push and unshift length dispaly and 
console.log(arrr);      // for pop and shift diplays deleted value

//Using loop 
/*just shift all the elements left by one index and decrease */
const newar=[1,2,3,4,5];
for(let i=0;i<newar.length-1;i++ ){

    newar[i] = newar[i+1];
}
newar.length=newar.length-1;
    console.log(newar);
    
    

/*=================ROTATIONS IN ARRAY===================*/


let array=[10,20,30,40];
let result=[];
array.pop();
//array.unshift(40);
result.unshift(40);
let add=result.concat(array);

console.log(add);

//using for loop
for(let i=0;i<array.length;i++){

}

//NOTE :-NEVER CHANGE THE FUTURE ELEMENT,THAT WE ARE GOING TO USE


/*Homework  */
    /*Do each deletion  question and instead of deletion , do insertion*/
    /*Rotate array  right(clockwise) by 1 element*/
    /* Rotate array left (anti-clockwise) by 1 element*/
//========================INSERTION IN ARRAY==================================
//Q:-insert element in last
let arr=[1,2,3,4];
arr.push(5);
console.log(arr);
//Q:-INSERTION USING SLICE does not happen 

//Q:-using splice splice not want to store in any variable like concat
let   nextAr=[10,20,30,40];
nextAr.splice(nextAr.length,0,70);
console.log(nextAr);

//Q: INSERTING ELEMENT FROM START 
let firstAr=[20,30,50,60];
firstAr.unshift(70);
console.log(firstAr);
//Q:-rotate element right by one elemeent
let Array=[2,30,4,50];

