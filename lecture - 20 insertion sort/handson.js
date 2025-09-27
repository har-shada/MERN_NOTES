//explore localecompare() mehtod  for string comparison
let students =[
    {  name: "kiran" , age: 20},
    {name:" sumit", age :24},
    { name: " suresh", age: 34} ,
];
students.sort((a,b)=> a.age-b.age);
console.log(students);
 
//locale compare is the string method 
// syntax: str1.localecompare(str2,[locales],[options]) str2 comapre with string 1