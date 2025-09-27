
//intersection
let intersection =[];
let arr4Set=new Set(arr4);

for(let i=0;i<arr5.length;i++){
    if(arr4Set.has(arr5[i]))
        intersection.push(arr5[i]);


}
intersection =[...new Set(intersection)];
/*Another way to execute abouve line
let intersectionSet = new Set (intersection);
intersection = [...intersectionSet];
*/
console.log({intersection});

//QW to find frequncyof each element in the arr
let arr3=[2,3,4,1,0,1,2,3,4,5,10];
let map=new Map();
for(let i=0;i<arr3.length;i++){
    if(mep.has(arr3[i])){
        map.set(arr3[i],map.get(arr3[i]+1));
    }else{
        map.set(arr3[i],1);
    }
}


let obj={};
console.log("Method 2 of printing");    
for(let key of map.keys())
    obj[`${key}`]=map. get(key);
console.log(obj);


console.log("Method 3 of printing");
for(let [key,value]of map)
    console.log({key,value});
/*about rest operator and destructing*/

//Q: remove duplicates from an array and print the arrar
arr2=[1,2,3,2,3,5,1,3,2];
console.log([...new Set(arr2)]);

//Q Anagram
//find frequency of all words in a paragraph(onlyspaces,A-Z & a-zletters wiill be there)
let paragraph="Hello how are you  How was your day Did you eat hoW did you find that" ;

let words=paragraph.trim().toLowerCase().split(" ");

console.log({words});

let wordsMap=new Map();

for(let i=0;i<words.length;i++){
    wordsMap.set(words[i],(wordsMap.get(words[i])||0) + 1);
   /* if(wordsMap.has(words[i])){
        wordsMap.set(words[i],wordsMap.get(words[i])+1);
    }else{
        wordsMap.set(words[i],1);

    }*/
}
let wordsFreq={};
for(let[key,value]of wordsMap) wordsFreq[key]=value;
console.log(wordsFreq);
//============Anagrams=======
//when twos have exact same letters but order may change
//e.g mad- dam
//listen-silent
//applee-aplee(not freq is not  same when thought letters are same)
let a="silent" ,  b=" listen";
// create a map of silent, then traverse in listen  and start decrementing the freq of each element
//if it exists in map
let  freqObj={};
for(let i=0;i<a.length;i++){
    freqObj[a[i]]=(freqObj[a[i]]||0)+1;


}
console.log(freqObj);
//==================recursion===============
// TWO THINGS  to look correct recursive code
//A. a base condition must always get hit 
//B. combining a return value of recursive  function and current function

//TC O(N) 
// SC: O(1) However it uses some stack space,but this is not considered  in space complexcity
function factorial(N){
    //must have a  base condition
    if(N==0)
        return 1;
    
    let fact = N * factorial(N-1);
    return fact;
}
console.log(factorial(5));
console.log(factorial(2)); 
//Print numbers from 1 to n
function print1toN(N){
  if(N==0)
    return ;
     print1toN(N-1);
     console.log(N);
    return next;
 }
