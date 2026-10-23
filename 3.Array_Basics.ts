/**************************  Array  **************** */

// array is a collection of multiple values of same datatype stored in single variable


//Store multilple values
//same datatype
//accessed using index
//zero based indexing
//dynamic size
export{}
let marks:number[] = [1,2,3,4,5] // we can't use string, bool inside this array

let names:string[] = ["kavya maran","anurudh"] // we can't use number, bool inside this array

let check:boolean[] = [true,false] // we can't use number, string inside this array


console.log("marks",marks[5])  // output is undefined

let data:any = names.push("kannya maran");
console.log("data :",data,"datatype of data is :",typeof(data))
console.log("the array print :",names)

