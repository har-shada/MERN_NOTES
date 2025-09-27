function printAllSubArrays(ar){
    let res=[];
    for(let i=0;i<ar.length;i++){
        for(let j=i;j<ar.length;j++){
   let a=ar.slice(i,j+1);
   res.push(a);
        }
    }
}
//
function print(arr){
    let res=[];
    let subArr=[];
    for(let i=0;i<arr.length;i++){
        for(let j=i;j<arr.length;j++){
            subArr.push(arr[j]);
           res.push(subArr);

        }
    }
    return res;

}
let aar=[1,2,3,4,5];
 console.log(print(aar));
 // find the sum of all sub Arrays
 function SumOfSubArray(ar){
    let res=[];
    let max=ar[0];
    for(let i=0;i<ar.length;i++){
let sum=0;
    for(let j=i;j<ar.length;j++){
        sum+=ar[j];
        res.push(sum);

    }
} 
return res;
 }
 let arrr=[1,2,3];
 console.log(SumOfSubArray(arrr));
 //find the maximum subArry sum
 function maxSubArrySum(ar){
    let res=[];
    let max=ar[0];
    for(let i=0;i<ar.length;i++){
        let sum=0;
        for(let j=i;j<ar.length;j++){
            sum+=ar[j];
           res.push(sum);
            //if(max<sum)
              //  max=sum;

        }
    }
    return res;
 }
 let arrrr=[1,2,3,4,5];
 console.log(maxSubArrySum(arrrr));
 //find the min of subarray
 function  minOfsubArray(a){
    
    let min=a[0];
    for(let i=0;i<a.length;i++){
        let sum=0;
        for(let j=0;j<a.length;j++){
            sum+=a[j];
            min=Math.min(min,sum);
            
        }
    }
    return min;
 }
 let a5=[1,2,3,4,5];
 console.log(minOfsubArray(a5));
 //count total number of subarrays 
 function counting(a){
    let count=0;
    let n=a.length;
    /*for(let i=0;i<n;i++){

        for(let j=0;j<n;j++){*/
            count=n*(n+1)/2;

        
        

        
    
    return count;
 }
 
 let a6=[2,3,4,5];
 console.log(counting(a6));

 //find the subArray with the largest product
 function product(a){
    let res=[];
    let max=a[0];
    for(let i=0;i<a.length;i++){
        let product=1;
        for(let j=i;j<a.length;j++){
            product*=a[j];
            res.push(product);
            max=Math.max(max,product);

        }
        
    }
    return max;
 }
 let a2=[2,3,4,5];
 console.log(product(a2));
 //Q:-Maximum sum subarray of size K (fixed size).
 function maxSumSizek(arr,k){
    //let res=[];                  2 3 4 5 6 7 8     k=3
    let max=arr[0];                          //i=1 j=1 j<1+2=3

    for(let i=0;i<=arr.length-k;i++){
        let sum=0;
        for(let j=i;j<i+k;j++){
            sum+=arr[j];
            max=Math.max(max,sum);
        }

    }
    return max;
 }
 let a3=[2,3,4,5];
 console.log(maxSumSizek(a3,2));

 
