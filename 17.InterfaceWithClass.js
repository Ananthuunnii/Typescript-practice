//here UPI taking the contract i.e. Ipayment  so here  should implement  the pay() method
//contractor takes the contract of road. then he need to work on that need to complete
// class calling the interface
class UPI {
    pay() {
        console.log("UPI payment Sucessfull");
    }
}
class Creaditcard {
    pay() {
        console.log("Creaditcard payment Sucessfull");
    }
}
let upi = new UPI();
upi.pay();
let crtcrd = new Creaditcard();
crtcrd.pay();
class MultipleFunctionalPrinter {
    Printer() {
        console.log("the printer print Document");
    }
    Scanner() {
        console.log("the Scanner scan the Document");
    }
}
let mulfp = new MultipleFunctionalPrinter();
mulfp.Printer();
mulfp.Scanner();
class Manager {
    constructor() {
        this.id = 301;
        this.name = "Gowda";
    }
    DisplayDetails() {
        console.log("Id is :", this.id);
        console.log("Name is :", this.name);
    }
}
let manager = new Manager();
manager.DisplayDetails();
class SoftwareEngineer {
    getName() {
        return "Kareena";
    }
    getSalary() {
        return 68000;
    }
}
let SE = new SoftwareEngineer();
console.log("the name is :", SE.getName());
console.log("the Salary is :", SE.getSalary());
export {};
