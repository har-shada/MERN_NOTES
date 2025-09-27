let n=7;
for(let i=0;i<n;i++){
    let row=1;
    for(let j=i;j<n-i-1;j++){
        row+=j;
        console.log(row);
            }
}
function printPattern(){
    console.log("1");
    for(let i=2;i<N;i++){
        let str="";
        for(let j=i-1;j<i-1+i;j++){
                        str+=j;
    }
    console.log(str);
}
}
let N=5;
printPattern(N);


