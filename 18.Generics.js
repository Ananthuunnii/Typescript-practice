/*****************************     Generics    ***************************/
// function always will return number
function display(val) {
    return val * 10;
}
let dis = display(25);
console.log(dis);
// the Generics way
function displayTest(val) {
    return val;
}
// same function but we can only use different type datatype values pass, like below
let dtest_1 = displayTest("Manu");
console.log(dtest_1);
let dtest_2 = displayTest(10001);
console.log(dtest_2);
let dtest_3 = displayTest(true);
console.log(dtest_3);
//// or 
function getData(val) {
    return String(val);
}
getData(10);
getData("Thudarum");
// example 1   to understand  the "T" for a datatype referance  we can initialise the datatype
// while we calling the function so we can reuse the code and avoid the dulication of the function
function printArray(item) {
    for (let i of item) {
        console.log(i);
    }
}
printArray([101, 102, 103, 104]);
printArray(["kkd", "kchi", "tvm", "tcr"]);
// realtime example
// browser storage concept -- Generics
// key is in stringvalue is in string
// class with generics
class datastore {
    constructor(value) {
        this.data = value;
    }
    display() {
        console.log(this.data);
    }
}
// one class and we can resuse this code with different datatype parameters
let employeePlace = new datastore("India");
employeePlace.display(); //india
let employeeSalary = new datastore(82000.58);
employeeSalary.display(); //82000.58
let employeeID = new datastore(101);
employeeID.display(); //101
// calling the interface 1 way
let employeeResponce = {
    Success: true,
    data: "Employee Created Successfully"
};
console.log(employeeResponce.data);
console.log(employeeResponce.Success);
console.log(employeeResponce);
// calling the interface 2 way
let employeeSalaryi = {
    Success: true,
    data: 80000
};
console.log(employeeSalaryi.data);
console.log(employeeSalaryi.Success);
console.log(employeeSalaryi);
export {};
