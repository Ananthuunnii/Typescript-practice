export{}

let customerName : string = "JCB";
let customerSalary : number = 85000
let customerJobStatus : boolean = true
// console.log(customerName);
// console.log(customerSalary);
// console.log(customerJobStatus);


// the datatypes are 
// string, number, boolean, any, unknown, null,undefined

let myname: string = "Sparrow";
let myphone : number = 9876543210;
let ismypassword:boolean = true;
let myPaddress:any = "bangalore";  // we can use string bool number
let myTaddress:unknown = "kolkatta"; // we can use string bool number

/**************   difference between any and unknown   ********* */
// we can use the variable with any we can apply propertys (toUpperCase,etc)
// console.log(myPaddress.toUpperCase()) // no error

// we can use the variable with unknown we can't apply propertys (toUpperCase,etc);
// console.log(myTaddress.toUpperCase())  // THIS get a runtime error


// array is a collection multiple values of data with same datatype
// store the multiple value
// same datatype
// accessed using the index
// zero based index
// dynamic size

//defference between js and ts array
// ts array - collection of same datatype multiple value
// js array - collection of mix of datatypes  values    


/****************  Array ********************/


let mysalary    : number[]  = [2000,1800,900,1200];
let myhobbies   : string[]  = ["singing","dancing","coding","thinking"]
let mychecklist : boolean[] = [true,false];

// let mycars : (string[],number[]) = []



// array methods are
// Push(), pop(), slice(),splise(),unshift(), shift()

// console.log(mysalary.push(2500)) // adding the value to array
// console.log(mysalary.pop()) // remove last value from array

// console.log(mysalary.unshift(3999)) // add a value to first of a array
// console.log(mysalary.shift())  // remove the first value from array
// console.log(mysalary)
// console.log("sPlice: ",mysalary.splice(1,1,4567)) // (start,end,adding element perticular position)
// console.log(mysalary)
// console.log("slice: ",mysalary.slice(0,3)) // slice the array


// foreach loop       // iteration using arrow function
mysalary.forEach(salary=>{
    // console.log(salary)
})

// iteration by value excatly in array
for(let salary of mysalary){
    // console.log(salary);
}

// normal for loop return the index of the array
for(let i = 0;i<mysalary.length;i++){
    // console.log(mysalary[i]);
}

/*******************   Tuple  ******************/

let companydetails : [string,number] = ["KOM pvt",1980];
let mydetails : [string, number, string, boolean, number] = ["barath",27,"M",true,9876543210];
// console.log(mydetails)

let companyemployees : [string,number[]] = ["ramu",[1,2,3,4]]



/*******************   Enums  ******************/

// used to define a set of named constants
enum Weekdays{
    Monday    = 1,
    Thursady  = 2,
    Wednesday = 3,
    Turesday  = 4,
    Friday    = 5
}
// console.log(Weekdays)
// console.log(Weekdays.Monday)

// by default 

enum usertype{      // the default value
    Admin,          // 0
    Manager,        // 1
    BA,             // 2
    TL,             // 3
    Tester,         // 4
    Developer       // 5
}
// console.log(usertype)

// by default one and it's continue the number patten
enum status{
    Sucess = 1000,
    Pending,            // 1001  // this value automaticaly assign
    Progress,           // 1002
    Failed              // 1003
}
// console.log(status)

// also assign string values for those named words in enum

// eg:
enum Delivery{
    Ordered = "Ordered",
    shipped = "Shipped",
    delivered = "Delivered",
    cancelled = "Cencelled"
}
// console.log(Delivery)



