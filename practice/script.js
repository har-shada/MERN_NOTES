// Take an integer input and calculate the sum of the cubes of its digits.
 /*let count=0;
 let num=123;
  // TODO: Compute sum of cubes of digits
  while(num>0){
    
  let s = num%10;
  count+=Math.pow(s,3);
   
    num =Math.floor(num/10);
  }
 console.log(count);*/

function isprime(num){
  if(num==1)return false;
  for(let i=2;i<=Math.floor(Math.pow(num,0.5));i++){
    if(num%i==0){
      return false;
    }
  }
  return true;
}
console.log(isprime(num));
function hollowDiamond(n){
  let totalRows= 2*n-1;
  for(let i=1;i<=totalRows;i++){
    let rows = i<=n ? i: totalRows-i+1;

   let line= '';
   for(let s=1;s<=n-rows;s++){
    line+= ' ';
   }
   for(let j=1;j<=2*rows-1;j++){
    if(j===1||j===2*rows-1){
      line+= '*';

    }else{
      line+= ' ';
    }
   }
   console.log(line);
  }
}
hollowDiamond(4);

function subaray(arr,k){

  let n = arr.length;
  for(let i=0;i<n;i++){
    let sum=0;
for(let j=i;j<n;j++){
//console.log(arr.slice(i,j+1));
sum+= arr[j];
if (sum===k){
  console.log(arr.slice(i,j+1));
}
}
  }
}
let arr=[1,2,3,4,7,4];
let k = 3
subaray(arr,k);

function deleteAllElements(cart) {
    cart.length = 0;
    return cart; // return the emptied array
}
let cart=[["Product A", "Product B", "Product C"],]
console.log(deleteAllElements(cart)); // []



//to deleete posts key and chnage with totalposts
const userData = {
  name: "John Doe",
  age: 25,
  posts: 50
};
userData.totalposts= userData.posts;
delete(userData.posts);
console.log({userData});

 function renameKey(obj, oldKey, newKey) {
 // if(oldKey in obj){
    obj[newKey]= obj[oldKey];
    delete obj[oldKey];
    
  }

const userData = {
  name: "John Doe",
  age: 25,
  posts: 50
};
renameKey(userData,"posts","totalposts")
console.log({userData});
 
//The series is defined as: S = 1 + 2/(1+2) + 3/(1+2+3) + 4/(1+2+3+4) …….n/(1+2+3...n).
function series(n){
  let sum=0;
  for(let i=1;i<=n;i++){
  let denominator= (i*(i+1))/2;
  sum+=i/denominator;
}
return sum;
}
let n=3;
console.log(series(n))
// function is prime
function isPrime(n){
  if(n===1)return false;
  for(let i=2;i<=Math.floor(Math.pow(n,0.5));i++){
    if(n%i===0){
      return false;

    }

  }
  return true;
}
console.log(isPrime(3));
//isPrime(3);
//dscending pattern 
function pattern(n1){
  //let n1 =5
  for(let i=1;i<=n1;i++){
    let line = '';
    for(let j=i;j>=1;j++){
      line+= j+ " ";
    }
    console.log(line.trim());
  }
}
  let n1 =5
console.log(pattern(n1));
// fre of arr element


let arr1=[1,2,3,4,4,3,3,5];
let freq =  new Map();
  for (let num of arr1){
    freq.set(num,(freq.get(num)||0)+1);
  }
  for(let num  of arr1){
     if(freq.get(num)>1){

       console.log(num);
       break;
     }
  }
