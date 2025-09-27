function insertionSort(arr){
    let n= arr.length;
    let ind =0;
    for(let i=1; i<n;i++) {
         let firstEleOfUnsortedPart = arr[i];
         let indexToInsertAt = 0;
         for(let j=ind; j >=0;j--){
            if(arr[j] > firstEleOfUnsortedPart){
                arr[j+1]= arr[j];
            
            }else {
                indexToInsertAt =j+1;
                break;
            }
         }
         arr[indexToInsertAt] = firstEleOfUnsortedPart;
         ind++;
    }
    return arr;

}
let arr= [3,1,6,2,8,7,4]
console.log("Sorted Array using insertion sort",insertionSort(arr));

/// QUICK SORT raw 
//GIVEN an array ,place its last element at aposition  such that  all smaller or equal  elements 
//  are in the  left and all greater element are in the right
//input:[2,1,7,5,4]
//output:[1,2,4,7,5] NOTE if there are multiple answers print any of them
function sort(arr2){
let n= arr2.length;
let ind=0;
  let lastelem=arr2[n-1];
    for(let i=0;i<n;i++){
        if(arr2[i]<lastelem){
            [arr2[i],arr2[ind]]=[arr2[ind],arr2[i]];
        }

    }
return arr2;
}
let ar=[2,1,7,5,4];
console.log(sort(ar))
//QUICK SORT=======================
//in quick sort consier last element as pivot element 
//e.g[3,1,6,2,8,7,4]=>4 is pivot elemeent put the pic=vot element to its place such that 
// all elements smaller goes to left and greater element goes to right
 

//sort () mehtod in js=========================
//eg
let a=[2,1,7,5,4];
a.sort();//ascending order
console.log({a});

a.sort().reverse();
console.log({a});


function insertionSort(arr){
    let n= arr.length;
    for(let i=1;i<n;i++){
        let firstEleOfUnsortedPart = arr[i];
        for(let j=i-1;j>=0;j--){
            if(arr[j]> firstEleOfUnsortedPart){
                arr[j+1]= arr[j];
            }
        }
    }
}