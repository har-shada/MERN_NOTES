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
