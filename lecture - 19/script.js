// MERGE SORT
// Q:- given two sorted array A & B merge both  of them 
//i/p: A=[1,3,4,7,10]
//     B:-[2,9,12]
function mergeSortedAr(arr1,arr2){


    let ans=[];
    let n= arr1.length;
    let m=arr2.length;
    let i=0; // pointer of current element from arr1
    let j=0;//pointer of  current  element from arr2
    while(i<n && j<m){
        if(arr1[i]<arr2[j]){
            ans.push(arr1[i]);
            i++;
        }else{
            ans.push(arr2[j]);
            j++;

        }
    } 
    while(i<n){
        ans.push(arr1[i]);
        i++;
    }
    while(j<m){
        ans.push(arr2[j]);
        j++
    }
    return ans;
}
let arr1=[1,3,4,7,10];
let arr2=[2,9,12];
console.log(mergeSortedAr(arr1,arr2).join(" "));
//method 2
function mergeSortedAr2(arrr,arrr1){
    let n1= arrr.length;
    let m1=arrr1.length;
    let i=0;//pointer of current element from arrr
    let j=0;//pointer of current element from arrr1
    let k=0;//pointer that tells where to insert an eleement an ans array
    let ans1 =  new Array(n1 + m1);
    while(i<n1 && j<m1){
        if(arrr[i]<arrr1[j]){
            ans1[k]=(arrr[i]);
            i++;    
        }else{
            ans1[k] = arrr1[j];
            j++;

        }
        k++;
    }
    while(i<n1){
        ans1[k] = arrr[i];
        i++;
        k++;
    }
    while(j<m1){
        ans1[k] = arrr1[j];
        j++;
        k++ 
    }
    return ans1;
}
let arrr=[1,3,4,7,10];
let arrr1=[2,9,12];
console.log(mergeSortedAr2(arrr,arrr1).join(" "));


 

// All arrays that has length 1 are sorted 
//TC of merge sot => O(NlogN) worst case
//Sc=> O(N)
function merSort(arr,low,high)
{
//base case
if(low==high){
    return [arr[low]];
}
//recursive calls
let mid = Math.floor(low+high)/2;
let leftSortedArray=merSort(arr,low,mid);
let rightSortedArray=merSort(arr,mid+1,high);
//merging
let mergedArr=mergeSortedAr(leftSortedArray,rightSortedArray);
return mergedArr;


}

/* i/p:-arr=[1,2,7,9],6
o/p:-a22=[1,2,6,7,9];*/
    

