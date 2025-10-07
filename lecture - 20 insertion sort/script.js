function insertInSortedArray(arr) {
  let n = arr.length;
  let lastElem = arr[n - 1];
  let indexToInsertAt = 0;
  for (let i = n - 2; i >= 0; i--) {
    if (arr[i] > lastElem) {
      arr[i + 1] = arr[i];
    } else {
      indexToInsertAt = j + 1;
      break;
    }
  }
  arr[indexToInsertAt] = lastElem;
  return arr;
}

arr = [3, 4, 7, 9, 2];

console.log(insertInSortedArray(arr));

function insertionSort(arr) {
  let n = arr.length;
  let ind = 0;

  //this loop goes over all elements from unsorted part of array
  // to be inserted in sorted part of the array
  for (let i = 1; i < n; i++) {
    let firstElemOfUnsortedPart = arr[i];
    let indexToInsertAt = 0;
    for (let j = ind; j >= 0; j--) {
      if (arr[j] > firstElemOfUnsortedPart) {
        arr[j + 1] = arr[j];
      } else {
        indexToInsertAt = j + 1;
        break;
      }
    }
    arr[indexToInsertAt] = firstElemOfUnsortedPart;
    ind++;
  }

  return arr;
}

arr = [3, 1, 6, 2, 8, 7, 4];
console.log(
  "sorted array using insertion sort: " + insertionSort(arr).join(" ")
);

/// QUICK SORT raw 
//GIVEN an array ,place its last element at aposition  such that  all smaller or equal  elements 
//  are in the  left and all greater element are in the right
//input:[2,1,7,5,4]
//output:[1,2,4,7,5] NOTE if there are multiple answers print any of them
function sort(arr2){
let n= arr2.length;
let ind=0;
  let lastelem=arr2[n-1];
    for(let i=0;i<n;i++){
        if(arr2[i]<lastelem){
            [arr2[i],arr2[ind]]=[arr2[ind],arr2[i]];
        }

    }
return arr2;
}
let ar=[2,1,7,5,4];
console.log(sort(ar))
