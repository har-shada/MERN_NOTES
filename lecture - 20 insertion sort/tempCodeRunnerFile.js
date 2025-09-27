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