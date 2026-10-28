export{}

/***************************    Interface with Class      ***********************/


// interface
interface Ipayment{
    pay():void;     // only defining the method without implementation
}


//here UPI taking the contract i.e. Ipayment  so here  should implement  the pay() method
//contractor takes the contract of road. then he need to work on that need to complete
// class calling the interface
class UPI implements Ipayment{
    pay():void{
        console.log("UPI payment Sucessfull")
    }
}
class Creaditcard implements Ipayment{
    pay():void{
        console.log("Creaditcard payment Sucessfull")
    }
}

let upi = new UPI();
upi.pay();

let crtcrd = new Creaditcard();
crtcrd.pay();


// multiple interface in class
interface Iprinter{
    Printer():void
}
interface Iscanner{
    Scanner():void
}
class MultipleFunctionalPrinter implements Iprinter,Iscanner{
    Printer(): void {
        console.log("the printer print Document")
    }
    Scanner(): void {
        console.log("the Scanner scan the Document")
    }
}

let mulfp = new MultipleFunctionalPrinter();
mulfp.Printer();
mulfp.Scanner();



// interface with methods and properties

interface IEmployee{
    id:number;
    name:string;
    DisplayDetails():void
}

class Manager implements IEmployee{
    id = 301;
    name = "Gowda"
    DisplayDetails(): void {
        console.log("Id is :",this.id)
        console.log("Name is :",this.name)
    }
}

let manager = new Manager();
manager.DisplayDetails();



// interface with inheritance

interface person{
    getName():string;
}
interface Developer extends person{
    getSalary():number
}

class SoftwareEngineer implements Developer{
    getName(): string {
        return "Kareena"
    }
    getSalary(): number {
        return 68000
    }
}

let SE = new SoftwareEngineer();

console.log("the name is :",SE.getName());
console.log("the Salary is :",SE.getSalary());



















