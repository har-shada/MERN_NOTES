/*write a function to print all the panlindromic substrings of a strings*/
//time complexities
// const a =5; this all line upto a+=5 takes constant unit of time to execute
//if(true)
// console.log(hi);
//a+=5;


// for(let i=0;i<N;i++)
//for(let j=0;j<M;j++)
//--------line of code-----time complexitiy O(N*M) N an M are not constants
// 

// space complexity
//in js only  these valuses are considered  false ->0,false,null,undefined,NaN
//("") -> empty string alll other values except this are true
//  for logical AND && :- in short circuiting,first falsey value or last truthy value will be the output
//for logical  or(||)-> first truthy value or last flasey
//
let obj={
    a:{
        c:1,
        d:2
    },
    b:2
}
if(obj && obj.aa &&obj.aa.c==1){
    console.log("hi");
}else
    console.log("Invalid property");
    
    const x= true && 45 && 32 && NaN;
    const y=(x==NaN) && 34;// need to see why its giving false
     console.log({x,y});
     console.log(Number("123"));
     console.log(String(123));
     console.log(Boolean(NaN));
     
     //create an arrary  ->1 to 100
     //search(57)&print its index
     let arr=[];
     for(let i=0;i< 100 ; i++){
        arr.push(i+1);
     }
      for(let i=0;i<100;i++){
        if(arr[i]==57){
            console.log(i); 
        }
      }

      // arr=[1,2,4,4,6,6,6,8]
      //find last index of 6
      //finde first index of 6
      arr=[1,2,4,4,6,6,6,8];
      let firstIndexOf6= -1;
      let lastIndexOf6=-1;
      let N= arr.length;
      for(let  i=0;i<N;i++){
        if(arr[i]==6){
            if(firstIndexOf6==-1)
              firstIndexOf6=i;
        }
        lastIndexOf6=i;
      }
      console.log({firstIndexOf6,lastIndexOf6});