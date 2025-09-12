for(let i=1;i<=3;i++){
    let row="";
    for(let j=1;j<=3;j++){
        row+="* ";
    }
    console.log(row);
}
for(let i=1;i<=5;i++){
    let row="";
    for(let j=1;j<=i;j++){
        row+="*";
    }
    console.log(row);
}
for(let i=1;i<6;i++){
let row="";
for(let j=1;j<=6-i;j++){ // j<=n-i;
    row+="* ";
}
console.log(row);
}
// for printiting rightangled using spcae
for(let i=1;i<=5;i++){
    let row="  ";
    for(let s=1;s<=5-i;s++)
{
    row+=" ";
}
for(let j=1;j<=i;j++){
    row+="*";
}
console.log(row);
}
//find sum of eac natural numbers upto N
let n =50;
 let sum=0;
for(let i=0;i<=n;i++){
   
    sum+=i;
    console.log(sum);
}
// count the digits in a number
let n1=2345;
let digit;

for(let i=1;i<=n1;i++)
    {
digit = n1%10;
n1=Math.floor(n1/10);
digit++;
console.log(digit);
}

  // inverted right angled trianged
  for(let i=1;i<=5;i++){
    let row="";
    for(let j=1;j<=5-i;j++){
        row+="*";
    }
console.log(row);
  }
//pyramid
//let n3=5;
for(let i=1;i<=5;i++){
    let row="";
    for(let s=1;s<=5-i;s++){ //printing space
        row+=" ";
    }
        for(let j=1;j<=2*i-1;j++){// printing stars 
            row+="*";
        }
        console.log(row);
    }
// reverse a given number

let n4=3456;
let digit1;
let rev=0;
while(n4>0){
        digit1=n4%10;
    rev=rev*10+digit1;
    n4=Math.floor(n4/10);

}
console.log(rev);
//print all subarray of an array
let array=[1,2,3,4,5,6];
for(let i=0;i<array.length;i++){
    let sum;
    for(let j=i;j<array.length;j++){
        sum=array.slice(i,j+1);
        console.log(sum);
    }
    
}
///find max subarray
let arr=[1,2,3,4,5,6,7];
let max=arr[0];
for(let i=0;i<arr.length;i++){
    let sum=0;
    for(let j=i;j<arr.length;j++){
        sum+=arr[j];
        if(max<sum)
            max=sum;
        
    }
}

console.log(max);