const teams=["CSK","mi","RCB","SRH","KKR","GT"];
let gtIndex = teams.indexOf("GT");
if(gtIndex!=-1)
{
    teams[gtIndex]="LSG";
}
console.log(teams);
 
 //-------------------------------------------------------

/* const n = 5;
 let fact=1;
 for(let i=1;i<=n;i++){
    fact=fact*i;
 }
 console.log(fact);*/
//------------------------------------------------------------
function factorial(num){
    let fact=1;
    for(let i=1;i<=num;i++){
        fact=fact*i;
       
    }
     return fact;
   
}
function nCr(n,r){
    if(n-r<0) reutrn -1;
    const nfact=factorial(n);
    const rfact= factorial(r);
    const nrfact= factorial(n-r);
    const result= nfact/(rfact*nrfact);
    return result
}
function nCrOfAnArray(arr){
    const n = arr.length;
    const r = 4;
    const ans= [];

    for (let number of arr){
        const ncr = nCr(number,r);
        ans.push(ncr);

    }
    return ans;
}
let arr=[4,10,8,6];
console.log(nCrOfAnArray(arr));








//-----------------------------------------------------------------
//calculate average
/*    function calculateAverage(num){
        let sum=0;
        for(let i=0;i<=arr.length;i++){
            sum =sum+arr[i];
            
           
               
        } return sum/arr.length;

    }
    let arr=[4,8,3,5];
      console.log(calculateAverage(arr));*/

       
 

       
