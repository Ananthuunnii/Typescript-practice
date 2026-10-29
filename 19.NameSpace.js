/**************************   namespace **********************************/
var Company;
(function (Company) {
    function display() {
        console.log("welcome to BIG BUCKET Company");
    }
    function printName() {
        console.log("Company name is BIG BUCKET");
    }
    Company.printName = printName;
})(Company || (Company = {}));
// we can call the exported function using the namespace "name" so
Company.printName();
// namespace with class
var EmployeeManagement;
(function (EmployeeManagement) {
    class employee {
        display() {
            console.log("employee details showed the fun inside namespace inside class");
        }
    }
    EmployeeManagement.employee = employee;
})(EmployeeManagement || (EmployeeManagement = {}));
let Demployee = new EmployeeManagement.employee();
Demployee.display();
// example with multiple - namespace
var HR;
(function (HR) {
    function recruit() {
        console.log("HR Recrutment...");
    }
    HR.recruit = recruit;
})(HR || (HR = {}));
var Finance;
(function (Finance) {
    function salary() {
        console.log("Salary Processed...");
    }
    Finance.salary = salary;
    // No error or No issue
    // HR.recruit()   // we can use here too  because the function is exported
})(Finance || (Finance = {}));
HR.recruit();
Finance.salary();
//namespace with interfaces
var PaymentSystem;
(function (PaymentSystem) {
    class UPI {
        pay(amount) {
            console.log("Paid $", amount);
        }
    }
    PaymentSystem.UPI = UPI;
})(PaymentSystem || (PaymentSystem = {}));
let payment = new PaymentSystem.UPI();
payment.pay(2500);
export {};
