/* SORTING 
data is arranged in a specific manner such that we can knoww & take decisions about data*/

 
function sort(N){
A=[4,1,3,7,5];
for(let i=0;i<A.length;i++){
    for(let j=A.length-1;j>i;j--){
       // let sort=A[i];
        if(A[i]>A[j]){
          let temp=A[i];
          A[i]=A[j];
          A[j]=temp;  
        }
 }
 return A;
}
}

/*BUBBLE SORT
in one pass : swap adj elemt if current element > next element

 -After 1st pass the greater element will be at the last position
 -After each pass,one element will be planned @ it  correct sorted position
 - Refer optimization for  not checking elements already  placed @ their  correct sorted position

 stable sorting=> yes(equal element  maintain their relative order)
 inplace sorting=> yes(not using any extra space)
  //======TC====
// - BEST CASE TC= O(N)
// - WORST CASE:-t.c O(N^2)
// -  AVERAGE CASE : hw

//sc: O(1)=>constant fot bubble sort */
//tc of bubble sort :- O(n^2)
// bubble sort is stable and inplace

function BubbleSort(arr){
  let swap;
  let n= arr.length;
    for(let i = 0; i < n; i++){
        for(let j = 0; j + 1 < n - i; j++){
    if(arr[j] > arr[j + 1]){
      swap ++; 
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
  
    }
  }
}
return arr;
}
let arr =  [4,1,3,7,5];
console.log(BubbleSort(arr));

//stable sorting :- [1a,1b,1c.2a,3a,2b,2c] =>[1a,1b,1c.2a,2b,2c,3a]
// inplace sorting:- sorting the same array (without using any any extra space)

//SELECTION SORT    selection sort is not sbale may be the minimum value should come after the seq take 7a,7b,1a examplwe
 /// here in selcetion sort we take min elemnt through out the array and min element may come after stable element
 //  thats why selection sort is not stable
 // --  SELECTION SORT IS EXACTLY OPPOSITE OF BUBBLE SORT in buble sort we start from last like first largest number is placed at last 
 //like wise and so on 
 /// -- in selection sort we have to put minimum element first and then 2nd minimum and so on ....
