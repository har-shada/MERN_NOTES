// IMPLEMENT SELECTION SORT
//SELECTION SORT    selection sort is not sbale  bcz , may be the minimum value should come after the seq take 7a,7b,1a example
// what happend with:- 7a 7b 1a ==>1a 7b 7a(using selection sortb(not stable ))
 /// here in selcetion sort we take min elemnt through out the array and min element may come after stable element
 //  thats why selection sort is not stable
 // --  SELECTION SORT IS EXACTLY OPPOSITE OF BUBBLE SORT in buble sort we start from last like first largest number is placed at last 
 //like wise and so on 
 /// -- in selection sort we have to put minimum element first and then 2nd minimum and so on ....
//


/// TC:- O(N^2 ) selection sort is not stable but inplace 
 function selectionSort(arr){
    
    let n= arr.length;


for (let i = 0; i < n-1; i++) {      
  let minIndex = i;
  for (let j = i+1; j < n; j++) {
    if (arr[j] < arr[minIndex]) minIndex = j;
  }
  [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
}
return arr;
 }
 let arr =  [4,1,3,7,5];
console.log(selectionSort(arr));