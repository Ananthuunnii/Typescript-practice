let customerName = "JCB";
let customerSalary = 85000;
let customerJobStatus = true;
// console.log(customerName);
// console.log(customerSalary);
// console.log(customerJobStatus);
// the datatypes are 
// string, number, boolean, any, unknown, null,undefined
let myname = "Sparrow";
let myphone = 9876543210;
let ismypassword = true;
let myPaddress = "bangalore"; // we can use string bool number
let myTaddress = "kolkatta"; // we can use string bool number
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
let mysalary = [2000, 1800, 900, 1200];
let myhobbies = ["singing", "dancing", "coding", "thinking"];
let mychecklist = [true, false];
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
mysalary.forEach(salary => {
    // console.log(salary)
});
// iteration by value excatly in array
for (let salary of mysalary) {
    // console.log(salary);
}
// normal for loop return the index of the array
for (let i = 0; i < mysalary.length; i++) {
    // console.log(mysalary[i]);
}
/*******************   Tuple  ******************/
let companydetails = ["KOM pvt", 1980];
let mydetails = ["barath", 27, "M", true, 9876543210];
// console.log(mydetails)
let companyemployees = ["ramu", [1, 2, 3, 4]];
/*******************   Enums  ******************/
// used to define a set of named constants
var Weekdays;
(function (Weekdays) {
    Weekdays[Weekdays["Monday"] = 1] = "Monday";
    Weekdays[Weekdays["Thursady"] = 2] = "Thursady";
    Weekdays[Weekdays["Wednesday"] = 3] = "Wednesday";
    Weekdays[Weekdays["Turesday"] = 4] = "Turesday";
    Weekdays[Weekdays["Friday"] = 5] = "Friday";
})(Weekdays || (Weekdays = {}));
// console.log(Weekdays)
// console.log(Weekdays.Monday)
// by default 
var usertype;
(function (usertype) {
    usertype[usertype["Admin"] = 0] = "Admin";
    usertype[usertype["Manager"] = 1] = "Manager";
    usertype[usertype["BA"] = 2] = "BA";
    usertype[usertype["TL"] = 3] = "TL";
    usertype[usertype["Tester"] = 4] = "Tester";
    usertype[usertype["Developer"] = 5] = "Developer"; // 5
})(usertype || (usertype = {}));
// console.log(usertype)
// by default one and it's continue the number patten
var status;
(function (status) {
    status[status["Sucess"] = 1000] = "Sucess";
    status[status["Pending"] = 1001] = "Pending";
    status[status["Progress"] = 1002] = "Progress";
    status[status["Failed"] = 1003] = "Failed"; // 1003
})(status || (status = {}));
// console.log(status)
// also assign string values for those named words in enum
// eg:
var Delivery;
(function (Delivery) {
    Delivery["Ordered"] = "Ordered";
    Delivery["shipped"] = "Shipped";
    Delivery["delivered"] = "Delivered";
    Delivery["cancelled"] = "Cencelled";
})(Delivery || (Delivery = {}));
export {};
// console.log(Delivery)
