function sumOfNestedArray(arr){
    let sum=0;
    let result=0;
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr[i].length;j++){
             sum+=arr[i][j];
              result+=sum;
        }
      
       return result;
    }
     
}
let ar= [[1,2],[4,5][6,7]];
console.log(sumOfNestedArray(ar));
/*sumOfNestedArray(ar));

//primary diagonal 
for(let i=0;i<arr.length;i++){     
    for(let j=0;j<arr[i].length;j++){
        if(i==j){
            console.log
        }
    }

}*/

    
    

/*
  [(0,0), (0,1), (0,2)],
  [(1,0), (1,1), (1,2)],
  [(2,0), (2,1), (2,2)]
   ]*/


/*[1,2,3],
[4,5,6],
[7,8,9]*/
//secondary diagonal
let n1=arr.length;
let sum1=0;
for(let i=0;i<n;i++){
    sum1+=arr[i][n-i-1];
    
}
function rotateByk(arr7,k){
    for(let i=0;i<k;i++){
        arr7.shift();
        arr7.push()
        


    }
}


