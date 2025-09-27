//Q:- Find the square root  of a number in O(logN) T.C
let N =82;

function squareRoot(N){
let low=0;
let high=N;
while(low<=high){
    let mid=Math.floor(low+(high-low)/2);
if(mid*mid==N){
    return mid;

}else if(mid*mid>N){
    high=mid-1;
}else{ // mid *mid<N
    low=mid+1;
}

}
return -1;

}
let sqrt= squareRoot(N);
if(sqrt!==-1)
console.log("Square Root  of : "+ N +" is "+ squareRoot(N));
else console.log(N+ " not a perfect squarre ");


//Q:- find the target element in the sorted array  and print its  index
//A=[1,2,3,5,7,9,11,15]; taget=11;
function targetValue(arr){
   
    let target =11;
    let low=0;
    let high=A.length;
    while(low<=high){
        let mid1=Math.floor (low+(high-low)/2);
         if(arr[mid1]==target){
            return mid1;
         }
         else if(arr[mid1]>target){
            high= mid1-1;
         }
         else 
            low=mid1+1;

    }
    return -1;
} 
let A=[1,2,3,5,7,9,11,15];
console.log(targetValue(A));
//Q:- find first occurance of targeted element 
// a=[1,2,6,6,11,11,11,15]
function firstIndexOfTarget(arr,target){
    let low=0;
    let index=-1;
   let  high=arr.length-1;
    while(low<=high){
        let mid=Math.floor(low+(high-low)/2);
        if(arr[mid]==target){
            index=mid;
        high= mid-1;
     } else if(arr[mid]>target){
        high=mid-1;
    }
    else {
         low=mid+1;
    }
}
return index;
}
let arr=[1,2,6,6,11,11,11,15];
let target=13;
console.log("first index of " + target +"  is  " + firstIndexOfTarget(arr,target));

// to  find lower Bound
function lowerBound(arr){
    let low=0;
    let high=arr.length-1;
    let index=arr.length;
     while(low<=high){
        let mid=Math.floor(low+(high-low)/2);

        if(arr[mid]>=target){
            index=mid;
            high=mid-1;

        }else low=mid+1;

     }
     return index;
}
let a=[1,2,6,6,11,11,11,15];
target = 11;
console.log(lowerBound(a));// lower bound is always greater than or eqaul to the target element 
                         

//h.w upperBound
function upperBound(arr){
    let low=0;
    let high= arr.length-1;
    let index=arr.lemgth;

    while(low<=high){
        let mid=Math.floor(low+(high-low)/2);
        if(arr[mid]== target){
            index=mid+1;
            high=mid-1;
        }else if(arr[mid]>target){
            high=mid-1;
}else low = mid+1;


    }
    return index;
}
let a5=[1,2,6,6,11,11,11,15];
target = 11;
console.log(upperBound(a5));

// SET in js
const set= new Set([1,2,4,4,5,6]);
console.log({set});
//method to add element in set
set.add(23);
set.add(8);
set.add(200);
console.log(set);
//method to check if the number is in the set or not
console.log(set.has(30));
  console.log  (set.has(200)); //has check is the element is in the set or not 
  console.log("Size of set" + set.size);
// deleteing the num from set
console.log(set.delete(4),set);
 //Removes duplicates from the array
 let array=[2,3,4,1,0,1,2,3,4,5,10];
 let set1= new Set(array);
 let arr1=[...set1];
 let arr11=Array.from(set1);

 let set2= new Set([...array]);
 let arr2=[...set2];
 //console.log({set1});
 console.log({array,arr1,arr11,arr2});


//Map in js
let map= new Map([
    ["name3","Mahesh"],
    ["name4", "Abhi"]
]);

map.set("name1","Sultan");
map.set("name2","Sunny");
console.log(map);
//checking if th key is present  or not
console.log(map.has("name1"));
//getting the value of specific key
console.log("Value of `name2` key",map.get("name2"));
//deleting akey in map
console.log("deleting `name4`" + map.delete("name4"));
//
for(let i of map){
    console.log("key" + i[0] + " Value "+ i[1]);
}
console.log("Printing keys");
for(let i of map.keys()){
    console.log(i);
}
map.set("name5"," Harshada");//map.set is the method used to add element in map

const mapArr=[...map];
console.log("Map converted into array ", {mapArr});
//union 
let arr4=[1,2,4,5,6,3],arr5=[2,5,6,3,1,3];
const unionSet= new Set([...arr4,...arr5]);
const unionArr=[...unionSet];
console.log({unionArr});

