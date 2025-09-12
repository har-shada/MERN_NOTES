function anagrams(s1,s2){
 for(let i=0;i<s1.length;i++){
    for(let j=0;j<s2.length;j++)
    if(s1[i].include(s2[j]))
    
        console.log(s1[i].join(''));
  //  for(let j=0;j<b.length;j++)

 }return -1;

}
let a="cat";
let b="act";
console.log(anagrams(a,b));