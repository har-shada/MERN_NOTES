/*function check(a){
    let sum=0;
    for(let i=0;i<a;i++){
        for(let j=i;j<a.length;j++){
sum=Infinity;
for(let j=i;j<a.length;j++){
    sum+=a[j];
}

}    }
}*/
//
/*function chechkSubarray(arr){
    for(let i=0;i<arr.length;i++){
        let sum=0;
        for(let j=i;j<arr.length;j++){
            sum+=arr[j];
             console.log(sum) ;
        }
    }
   
}
let arr=[1,2,3,4];
chechkSubarray(arr);
//function to calculate max sum
function maxSumarray(arr){
    let startIndex=0;
    let endIndex=n-1;
    let maxSum=arr1[0];
    for(let i=0;i<arr.length;i++){
        let sum=0;
        for(let j=i;j<arrr.length;j++){
            sum+=arr[j];
            if(maxSum<sum){

    maxSum=sum;
    startIndex=i;
    endIndex=j;

     }
    }

}
console.log("maximum subarray for sum from ",startIndex,"to",endIndex,"is:",maxSum);
}
const array=[-1,5,-3,2,-1,3];
maxSumarray(array);*/
//
//count the number of subarray whose sum is k

function  checkCount(arr,k){
    
    let count=0;
    for (let i=0;i<arr.length;i++){
        let sum=0;
        for(let j=i;j<arr.length;j++){
            sum+=arr[j];
            if(sum==k){
                count++;

            }
            
        
        }
    }
    return count;
}
 let arrAy=[1,2,-3,0,1,-1,1];
 let k=0;
 console.log(checkCount(arrAy,k));
 ///Given a sum k,find the longest subarray whose sum is equal to k
 //(return the length of this subarrray)
 //i/n:- [1,2,-3,0,1,-1,1]
 //o/p:-6  //k=0;
function subArray(arr,k){

     let longlength=0;
    for(let i=0;i<arr.length;i++){
        let sum=0;
        for(let j=i;j<arr.length;j++){
            sum+=arr[j];
            if(sum==k){
               // if(longlength<arr.length){
               longlength=Math.max(longlength,j-i+1)
                   
                }
            } 
        
    }
    return longlength;
}
let Arrayy=[1,2,-3,0,1,-1,1];
let k2=0;
console.log(subArray(Arrayy,k2))
// write a function to print  all subarrays of size k
function printSubArrayOfk(arr,k){
    let subArrayOfSize=[];
    for(let i=0;i<arr.length;i++){
        if(i+k>arr.length){
            break;
        }
         let subAr="";
      
        for(let j=i;j<i+k;j++){
           
subAr+=arr[j]+" ";
        }      
        subArrayOfSize.push(subAr);
        
        }
        return subArrayOfSize;
      //tc:-O(n*n)
    }
    

let arrays=[1,2,3,4,5];

console.log(printSubArrayOfk(arrays,3));