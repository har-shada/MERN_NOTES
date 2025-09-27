///Q:-write a recursive function to find  the sum of first N natural numbers
//naturalSum(5)-> should return 15
//naturalSum (-5)-> should return 0;
// naturalSum (0)->should return 0
function naturalSum(N){
    if(n<=0)

return N + naturalSum(N-1);

}
console.log(naturalSum(5));
console.log(naturalSum(-5));
console.log(naturalSum(0));
console.log(naturalSum(10));

/* GCD(8,32)=8;  GCD is the greatest common divisor the greater  value that divide both values 
   GCD(9,15)=3
   GCD(10,25)=5
   GCD(0,20)=20 always remember GCD(0,x)=X*/
   // Iterative Gcd

   
   function GCD(a,b)
   
{


    while(a!=0){
        let temp=a;
        a=b%a;
        b=temp;
        
        }
        
        console.log(b);
    }
let a=5,b=25;
GCD(a,b);

// recursive
function rGcd(a,b){
    //base condition
    if(a==0) return b;
    // recursive call
    return(b%a,a); // imp note: this function will handle the case when a>b
}
   
//gcd(a,b,c)= gcd(gcd(a,b),c)=gcd(a,gcd(b,c))=gcd(b,gcd(a,c))
let arr=[27,12,18,24,30];
let gcdArr= 0;
for(let i=0;i<arr.length;i++){
    gcdArr=rGcd(gcdArr,arr[i]); // time and space calculation is not more than 10^7 or 10^8 always remember
}


// write a function to find pow of A raised to pow B without using math.pow () e.g 2^10
function findPow(a,b){
    let result=1;
    
    for(let i=0;i<b;i++)
    result*=a;
return result;

}
let a1=2,b1=10
console.log(findPow(a1,b1));

function binaryExponentiation(a,n){
    if(n==0) return 1;
    if(n==1)return a;
    let temp= binaryExponentiation(a,Math.floor(n/2));
    return temp*temp*a**(n%2);

}
console.log(binaryExponentiation (2,10));
console.log(binaryExponentiation(5,15));

// // hw :- Nth fibonacii number using recursion
function fibonnaci(n){
    if(n===0)
        return 0;
    if(n===1)
        return 1;
    
    return fibonnaci(n-1)+ fibonnaci(n-2);

}
let n=8;
console.log(fibonnaci(n));