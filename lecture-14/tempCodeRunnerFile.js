let a="silent" ,  b=" listen";
// create a map of silent, then traverse in listen  and start decrementing the freq of each element
//if it exists in map
let  freqObj={};
for(let i=0;i<a.length;i++){
    freqObj[a[i]]=(freqObj[a[i]]||0)+1;


}
console.log(freqObj);