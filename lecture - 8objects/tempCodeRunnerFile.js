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