//Given an N x M matrix, print it row by row (left to right).
function printMtxByRow(a){
let rows=a.length;
let cols=a[0].length;
for(let i=0;i<rows;i++){
    for(let j=0;j<cols;j++){
        console.log(a[i][j]);

    }
}
}
let matrix=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
console.log(printMtxByRow(matrix));
//Given an N x M matrix, print it column by column (top to bottom).
function printMtxByCol(mat){
    let  rows=mat.length;
    let cols=mat[0].length;
    for(let j=0;j<cols;j++){
        for(let i=0;i<rows;i++){
            console.log(mat[i][j]);
        }
    }
}
let mat=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
console.log(printMtxByCol(mat));
// Print the transpose of the given matrix (M x N → N x M).
function transposeOfMtx(mat){
let result=[];
let rows=mat.length;
let cols=mat[0].length;
for(let j=0;j<cols;j++){
    let newRow=[];
for(let i=0;i<rows;i++){
 
 newRow.push(mat[i][j]);
    }
    result.push(newRow);
}
}
let mt=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
console.log(transposeOfMtx(mt));


