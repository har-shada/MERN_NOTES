//Q:- given a parenthisis sequence , determine if its valid or not
//s ="() () (())":-valid 
// =  " () ( ()" -> invalid
//  = " ())((())("-> invalid
 function parenthisisSeq(str){
let res="";
  for(let i=0;i<str.length;i++){
if(str[i]!==")("){
    res.push(str[i]);
    console.log("valid");
}else{
console.log("invalid");
}
  }
}
 
let str="() () (())";
console.log(parenthisisSeq(str));


//whenever closing brakets is encountered wwe must have atleast one opening brackt 


function isValidParenthisi(str)
{
    let n =str.length; 
    if(n%2)return false;
    let isValid= true;
    let op=0;
    for(let i=0;i< n;i++){
        if(str[i]==='(')
            op++;
        else{
            if(op>0)
                op--;
            else return false;
        }
    
}
if(op!=0)
     return false;



    return true;
}
console.log("((()))",isValidParenthisi("((()))"));

//generate all valid parenthisi of length imp
//t.c:-O(2^N)
//s.c:- O(N)
let allValidParenthisis=[];
function generateParenthisis(n, str="",ind=0,op=0,cl=0){
    if(op<cl){
        return;
    }
    
    if(ind==n){
        if(op==cl){
            allValidParenthisis.push(str);

        }
        return ;
    }
generateParenthisis(n,str+'(',ind+1,op+1,cl);
generateParenthisis(n,str+')',ind+1,op,cl+1);


}
generateParenthisis(4);
console.log({allValidParenthisis});

// function to print all the permutation of a string impquestion for recurion
//tc ~ O(N!)
function swapingString(str,i,j){
     let arr= str.split("");
     [arr[i],arr[j]]=[arr[j],arr[i]]
     return arr.join("");

}
let strPermutations=[];
function permutations(str,ind=0){
    if(ind==str.length-1){
        strPermutations.push(str);
    return;

}
    for(let i=ind;i<str.length;i++){
       let swappedStr= swapingString(str,ind,i);//creating a new swappedstr,inorder to keep unchanged after swapping 
permutations(swappedStr,ind+1)
    }
}
permutations("abc");
console.log({strPermutations});