/**************************    Applay the access modifiers in this class **********************/
// access modifiers
// by default every menber in class is public
//Public
class Student {
    constructor() {
        this.name = "petter";
    }
}
let stu = new Student;
console.log("the public variable outside class :", stu.name);
// i can access the public value outside the class
// Private 
class Employee {
    constructor() {
        this.password = "#@#@#@@#";
    }
    displayPassword() {
        console.log("the private password :", this.password);
    }
}
let emp = new Employee;
// console.log("the privet variable outside class :",emp.password) 
// i can't access the private value outside the class
// but using the method we can call inside the class only 
emp.displayPassword();
//Protected
// means we use protected for parent class variable for only we want to show with child class not outside the class
class Person {
    constructor() {
        this.age = 45;
    }
}
class Teacher extends Person {
    displayage() {
        console.log("the age is :", this.age);
    }
}
let tech = new Teacher;
tech.displayage();
// Real time example
class BankAccount {
    constructor() {
        this.accountHolder = "ram";
        this.balance = 50000;
    }
    showBalance() {
        this.balance += 300;
        console.log("Balance :", this.balance);
    }
}
let account = new BankAccount;
console.log("the public variable account holder is :", account.accountHolder);
account.showBalance(); // USING FUNCTION WE CAN SEE THE BALANCE
//Error
// console.log("private variable balance is ",account.balance)
//readonly
class AxisBankAccount {
    constructor() {
        this.accountHolder = "ram"; //use readonly here 
    }
    showBalance() {
        console.log("accound holder name is ", this.accountHolder);
    }
}
let Ax_acc = new AxisBankAccount;
console.log("the public variable account holder is :", Ax_acc.accountHolder);
// we can't able to change this readonly using object
// Ax_acc.accountHolder = "abdul"   // this get error
account.showBalance();
export {};
