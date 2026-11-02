function greet() {
    console.log("hello, welcome to function Test");
}
greet();
function Displaynumber() {
    console.log("hello, welcome to function Test");
    return 1;
}
Displaynumber();
let disnumber = Displaynumber();
console.log("calling the function and the result", disnumber); // above function return number i get
// example 2
function displayStudentDetails(name, age) {
    console.log("name", name);
    console.log("age", age);
}
let displayData = displayStudentDetails("alex", 35);
console.log(displayData);
// function with return value
function add(num1, num2) {
    return num1 + num2;
}
let rdata = add(30, 20);
console.log("sum :", rdata);
//function with return string
function getFullName(firstname, lastname) {
    return firstname + " " + lastname;
}
var fullname = getFullName("Ananthu", "unni");
console.log(fullname);
// optional parameter function
//use void as a no return type function
function showEmployees(name, city) {
    console.log("Name :", name);
    console.log("city :", city);
}
showEmployees("arun");
showEmployees("Das", "kochi");
//Default parameters
function calculateSalary(Salary, bonus = 5000) {
    return Salary + bonus;
}
var totalSalary = calculateSalary(25000);
console.log("monthly salaty :", totalSalary);
var totalSalary_2 = calculateSalary(25000, 10001);
console.log("monthly salaty and 10001 bonus :", totalSalary_2);
//Arrow function
const multiply = (a, b) => {
    return a * b;
};
var theMultiple = multiply(3, 4);
console.log("the multiply answer :", theMultiple);
// arrow function with realtime example
function calculateBill(price, quantity) {
    return price * quantity;
}
var billAmount = calculateBill(35, 5);
console.log("the bill amount is :", billAmount);
export {};
