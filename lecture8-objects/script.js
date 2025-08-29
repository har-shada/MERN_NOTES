/*create variables to store name,age ,class, address of student*let const="piyush";*/
/*const name="piyush";
const age=20;
const address="pune";
const standard=12;

const studentObj={
    name: "piyush",
    age:17,
    address:"pune",
    standard:12
};
*/
/*create varibale to store name ,age,address of parents*/
/*const parentObj={
    name:"Riya",
    age:35,
    address:"pune"
};
//Access properties in Object
console.log("Student's name",studentObj.name);
console.log("students name",studentObj["name"]);
const studentNameProperty="name";
console.log("students name",studentObj[studentNameProperty]);

//Updating a value of an object
studentObj.name="Prateek";
console.log("Student's name",studentObj.name);

//add any property to an object
parentObj.gender="female";
console.log(parentObj);
parentObj.standard=12;

//delete any property from oobject

delete parentObj.standard;
console.log("parent obj",parentObj);

//Q:create a person  object-> name,age , city={Raj,18,pune}
//1. add hobby ->singing 2.update city-> nagpur 3.print the age of this person
const personObj={
    name: "Raj",
    age: 18,
    city:"Pune"
};
personObj.hobby="singing";
personObj.city="Nagpur";
console.log("Age of the person",personObj["age"]);

if(personObj && personObj.address && personObj.address.firstLine)
    console.log(personObj.address.firstLine);
console.log(personObj);
//Nested Objects
const employeeObj={
    name:"Raju",
    company:"Acciojob",
    salary:"10LPA",
    address:{

        addressLine1:"Bhumkar Chowk",
        addressLine2:"Wakad",
        city:"pune"
    
    }
}
console.log("City of", employeeObj.name,"is", employeeObj.address.city);
*/
//Array of Objects

/*const studentObjArr=[
    studentObj,{
        name:"sam",
        age:30,
        address:"Hydrabad",
        standard:10
    }
];
 const studentObjn={
        name:"pulkit",
        age:27,
        address:"Nashik",
        standard:10
    }
const studentObjArr2=[studentObj,studentObjn]
console.log(studentObjArr);
console.log(studentObjArr);
 for(let i in studentObj)
{
    console.log(i, ":" , studentObj[i]);
}
console.log("Keys",Object.keys(studentObj));
console.log("Values", Object.values(studentObj));*/
//task:- create a classroom array of 4 students each students will have:
// student -> name,age,gender,grade,
// addree->addLine1 ,addressLine 2,city,house No.
//print the namee age and student residing in  pune city
/* const studentObj1= { 
    name:" Soham",
    age: 23,
    gender: "male",
    grade:"A",
    address:{
        addressLine1:"vidnyan nagar",
        addresssLine2:"manewada",
        city:"nagpur",
        houseNo:123

    }
 };
const studentObj2={
    name:"hardik",
    age:24,
    gender:"male",
    grade:"A",
    address:{
        addressLine1: "samarth Chowk",
        addressLine2:"kothrud",
        city:"pune",
        houseNo:432
    }

 };
 const studentObj3={
    name:"kriti",
    age: 21,
    gende:"female",
    grade:"B",
    address:{
        addressLine1:"sunshine Appartment ",
        addressLine2:"Baner Road",
        city:"pune",
        houseNo: 234
    }

 };
 const studentObj4={
    name:"Gaurav",
    age:22,
    gender:"male",
    grade:"A",
    address:{
        addressLine1:"seasons mall",
        addressLine2:"hadapsar",
        city:"pune",
        houseNo:543
    }
 }
const classRoomAr=[studentObj1,studentObj2,studentObj3,studentObj4];
console.log(classRoomAr);
for(let i in classRoomAr){
    if(i&& i.address && i.address.city=="pune"){
        console.log(i.name,":" ,i.address.city);
    }
}
//functions inside objects
const carObj = {
    car:"mercedes GLS",
    color: "White",
    mileage: 10,
    currentSpeed:20,

    running: function running(){
        console.log("The car is running!!",this.currentSpeed);

    }

}
carObj.running();*/
//obj->name-> piyush
    //skills->array->["c++,"javascript","mern"]
    //showSkills()->shows each skill in one line,comma seperated
    //addskill(skillName)-> add a skill to skills array
    const portfolio={
        name:"piyush",
        skills:["c++","javascript","mern"],
         
        showSkill:function showSkill(){
            let allSkills="";
            for(let skill of this.skills)
                allSkills+= skill+",";
                console.log(allSkills);
        },
            addSkill: function addSkill(skillName){
                
                this.skills.push(skill);

            }
        }
       portfolio.showSkill();
       portfolio.addSkill("React");
       portfolio.showSkill();
    