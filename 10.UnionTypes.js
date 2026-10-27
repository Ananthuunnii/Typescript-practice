/*******************   Union Types  ******************** */
// this way we can use either number or string using multiple types insted using "any" datatype
// let employeeId :string | number = 123 or "Rohan";
let employeeId = 123;
let employeeAge = "seven";
// or 
let customerID;
customerID = 5001;
customerID = "Cus5001";
console.log("the customer ID :", customerID);
let status;
status = true;
console.log("the status is in boolean:", status);
status = 1;
console.log("the status is in number:", status);
// union type used in function
function printId(id) {
    console.log("the id is :", id);
}
printId(1);
printId("emp101");
// the typechecking in union type
function displayType(value) {
    if (typeof value == "string") {
        console.log("the value : string is :", value.toUpperCase());
    }
    else {
        console.log("the value : number is :", value.toFixed(2));
    }
}
displayType(12000.01223334444); // 12000.01
displayType("thaalam trip"); //THAALAM TRIP
// union type with array
let value_2; //easy way and we can use the both string and number in same array
value_2 = ["mumbai", 40002]; // we can do using this
let payment;
payment = "Fail"; // we need to assign the above values to the payment variable otherwise it get error
// payment = "abcd";        // get error
console.log(payment);
let tcsEmployee = 123;
let infosysEmployee = "ID_890";
console.log("the employ id like :", tcsEmployee);
console.log("the employ id like :", infosysEmployee);
export {};
