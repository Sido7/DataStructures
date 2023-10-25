const arr1 = [1, 2, 3, 6, 8, 9];
let arr2 = [];
var arr3 = [1, 2, 3, "ram", true, false, "moham"]; // JS arrays are hetrogenious in nature,i.e we can store different types of values in the same array

let str = "radharamMohanRoy";
let arr = ["a", 2, 3, 4, 2, "r"];

console.log(str[2]);
console.log(arr[2]);

str[2] = "P";
arr[2] = "P";

console.log(str); //string are immutable i.e they can not be changed
console.log(arr); //Arrays are mutable i.e they can be changed
