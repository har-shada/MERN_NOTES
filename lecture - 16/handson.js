
// Map concepts
//basic question for mapp
// guven an array and multiplied  that numbers by three 
let numbers= [ 2,3,4,5,6];
let m = numbers.map(num=>num*3);
console.log(m);

// convert to uppercase

let animals=["cat","dogs","birds",];
let map1= animals.map(animals=>animals.toUpperCase());
console.log(map1);

//square each number
let square= [2,4,6];
let map2= square.map(sqr=> sqr*sqr);
console.log(map2);

// length of string
let string= ["apple", "banana", "kiwi"];
let map4= string.map(str=>str.length);
console.log(map4);

//add index
let number=[10,20,30];
let map6= number.map((num,index)=>num+index);
console.log(map6);

// conditional tranformation
let result= [ 45,60,75];
let map7=result.map(marks=>marks>=60 ? "Pass": "Fail");
console.log(map7);

//Create a Map and store these pairs:

/*"name" → "Harshada"

"age" → 22

"city" → "Pune"
Then retrieve and print the value of "city".*/

let m1 = new Map();
m1.set("name", " Harshada");
m1.set("age","21");
m1.set("city"," pune");
console.log(m1.get("city"));

/*Level 2: Iteration & Size
Make a Map with student marks:
"Alice" → 85
"Bob" → 72
"Charlie" → 90
Print the size of the Map.*/
let m2= new Map();
m2.set("Alice",85);
m2.set("Bob", 72);
m2.set("Charlie",90);
console.log(m2.size);

/*Create a Map with fruits and their colors:
"apple" → "red"
"banana" → "yellow"
"grape" → "purple"
Update "banana" to "green".*/
let m3= new Map();
m3.set("apple","red")
m3.set("banana", "yellow");
m3.set("grapes","purple");
m3.set("banana","green");
console.log(m3.get("banana"));
for(let [key,value] of m3){
    console.log(key, ":" , value);
}




