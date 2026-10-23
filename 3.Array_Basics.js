/**************************  Array  **************** */
let marks = [1, 2, 3, 4, 5]; // we can't use string, bool inside this array
let names = ["kavya maran", "anurudh"]; // we can't use number, bool inside this array
let check = [true, false]; // we can't use number, string inside this array
console.log("marks", marks[5]); // output is undefined
let data = names.push("kannya maran");
console.log("data :", data, "datatype of data is :", typeof (data));
console.log("the array print :", names);
export {};
