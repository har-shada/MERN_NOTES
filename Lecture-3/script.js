/*//let arr=[2,4,6,5,3];
let prefixSum=0;
for(let i=0;i<arr.length;i++){
    prefixSum+=arr[i];
    arr[i]=prefixSum;
}
console.log(arr);*/

let count=0;
for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]==arr[j]) {
            count++;

        } 
      }
}