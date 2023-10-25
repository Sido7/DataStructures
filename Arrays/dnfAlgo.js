//Problem
// Sort an array of 0s, 1s and 2s | Dutch National Flag problem
// Given an array A[] consisting of only 0s, 1s, and 2s. The task is to write a function that sorts the given array.
// The functions should put all 0s first, then all 1s and all 2s in last.
// Input: {0, 1, 2, 0, 1, 2}
// Output: {0, 0, 1, 1, 2, 2}

//Approach 1

function arraySorterOne(arr) {
  let count0 = 0;
  let count1 = 0;
  let count2 = 0;
  let i = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      count0++;
    } else if (arr[i] == 1) {
      count1++;
    } else {
      count2++;
    }
  }

  for (i = 0; i < arr.length; i++) {
    if (i < count0) {
      arr[i] = 0;
    } else if (i >= count0 && i < count0 + count1) {
      arr[i] = 1;
    } else {
      arr[i] = 2;
    }
  }
  return arr;
}

function arraySorterTwo(arr) {}

var input = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1];
var input2 = [2, 1, 0, 0, 2, 1];
var input3 = [1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0];

console.log(arraySorterOne(input3));
