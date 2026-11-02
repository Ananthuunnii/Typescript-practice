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
let data1:any = names.push("devi maran");
console.log("data :",data,"datatype of data is :",typeof(data))
console.log("data :",data1,"datatype of data is :",typeof(data1))
console.log("the array print :",names)


//Array pop  in TS

let data2:any = names.pop()
console.log("the array print after pop :",names)
console.log("data2 :",data2,"datatype of data is :",typeof(data2))



// string length in TS
let students:string[]=["varun","yash","ram","gokul"]
console.log("length of the student array",students.length)

let lenstr:number = students.length
console.log("the length :",lenstr)


// foreach loop in TS
let subjects:string[] = ["html","css","typescript"]
for (let subject of subjects){
    console.log(subject)
}

//Array with mix value

let customerDetails : any[]=["vasu",37,"M","single"]