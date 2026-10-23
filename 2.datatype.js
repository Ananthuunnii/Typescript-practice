var studentName = "Rahul";
let age = 24;
let isPassed = true;
let someDetails = "Rahul"; //any value we can use number, string, bool
let customerData = true; // any value we can use number, string, bool
let nothing = null; //nothing
let notAssigned = undefined; //the undefined 
/*********any */
let value_1 = "bmw";
console.log("name is :", value_1.toUpperCase());
value_1 = 300;
console.log("value is :", value_1.toFixed(2));
/*********unknown */
let value_2 = "bmw";
// console.log("name is :",value_2.toUpperCase())   // here we get error we can't applay property like (toUpperCase,etc)
// we can do one things
let value_3 = "bmw";
if (typeof (value_3) == "string") {
    console.log("we can do : ", value_3.toUpperCase());
}
else {
    console.log("it's not string");
}
export {};
