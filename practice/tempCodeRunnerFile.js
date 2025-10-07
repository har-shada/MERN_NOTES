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
