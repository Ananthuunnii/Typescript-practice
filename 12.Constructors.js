/***************************     Constructors   ************************/
class Student {
    constructor() {
        this.id = 20;
        this.name = "krish";
    }
}
let student = new Student();
// in here the (10002,"gowtham"); the data will  assign to the constructor and assign to the respective
class Employee {
    //parameter constructors
    constructor(eid, ename) {
        this.id = eid; //                              |
        this.name = ename; //                          |
    } //                                               |
} //                                                  |
let emp = new Employee(10002, "gowtham"); // -------
console.log("employ id data :", emp.id);
console.log("employ name data :", emp.name);
class Products {
    constructor(pid, pname, pprice) {
        this.id = pid;
        this.name = pname;
        this.price = pprice;
    }
}
let produc_1 = new Products(607, "IPhone17", 231000);
let produc_2 = new Products(608, "tablet-IBall", 134000);
class Car {
    constructor(ibrand, imodel) {
        this.brand = ibrand;
    }
}
export {};
