//last class
/*const value=4+("34"* " ")/17;
console.log({value});
const space=" ";
console.log(space *1);
//Given a NaN grid(matrix),find the primary diagonal sum
const arr= [
    [1,2,3],
    [4,5,6],
    [7,8,9],
]; // 3*3 grid
//primary diagonal-> i==j
let sum=0;//1
for(let i=0;i<arr.length;i++){//n
        //if(i==j){//1
            sum+=arr[i][i];
        }
        console.log({sum});*/


//TC:-O(n)
//secondary digonal -> i+j==n-1     idenotes rows j denotes columbs
/*n=arr.length;
sum=0;
for(let i=0;i<n;i++){
    for(let j=0;j<n;j++){
        if(i+j==n-1){
            sum+=arr[i][j];
                }
    }

}*/

/*n=arr.length;
sum=0;
for(let i=0;i<n;i++){
    sum+=arr[i][n-i-1];
}
console.log({sum});
//TC:-O(n*n)
//SC:-O(1)*/


//write a function to calculate the odd-numbered column
/*function sumOfArray(a){
    for(let i=0;i<a.length;i++){
        for(let j=0;j<a[i].length;j++){
            if(j%2!=0){
                sum+=arr[i][j];
                
            }
            return sum;

        }
    }
       
    }
     let arrr=[
            [1,10,3],
            [3,20,5],
            [5,6,7],
            [5,8,6],
        ];


        console.log(sumOfArray(arrr));*/

//write a function to print the odd-numbered column element of a matrix

const arr2=[
    [1, 2, 3,  4, 5, 6],
    [2, 6, 12, 43, 3, 5],
    [8, 10, 34, 23,12, 8],
];
//output :- 2 6 10 4 43 23 6 5 8
function printOddNumberdColElements(arr)
{
    let rows=arr2.length;
    let cols=arr2[0].length;
   
    for(let j=0;j<cols;j++){   
         let ans= ""; //jo constant hai vo bahar vale lloop me ayega
        if(j%2==1)continue;
        for(let i=0;i<rows;i++){
            
            ans+= arr[i][j] + " ";
        }

       console.log(ans); 
    }
}
printOddNumberdColElements

// hw given a 2d matrix,reverse each odd columns and print it



function reverseColumn(arr){
    let rows=arr.length;

    let column=arr[0].length;
    for(let j=0;j<column.length;j++){
        if(column%2==1){
        let firstEle=0;
        let bottomEle=rows-1;
        while(firstEle<bottom){
            let temp=arr[firstEle][j];
            arr[firstEle][j]=arr[bottom][j];
            arr[bottom][j]=temp;
            firstEle++;
            bottomEle--;
        }
    }
    }
    return arr;

}
let arrr=[
    [1,2],
    [2,3],
    [2,5]
]
console.log(reverseColumn(arrr));

//]
//3*3 
/*[
    [(0,0), (0,1), (0,2)],
    [(1,0), (1,1), (1,2)],
    [(2,0), (2,1), (2,2)]

]*/