try{
console.log(studentName);
let studentName = "pratik ";
console.log(studentName);
if(studentName==="pratik") throw new Error("pratik found!!!");

}catch(error){
console.log(error.message);

}
finally {
    console.log("in finally block");
}