export{}
/***************************     Constructors   ************************/


class Student{
    id:number;
    name:string;

    constructor(){
        this.id = 20;
        this.name = "krish"
    }
}

let student = new Student()


// in here the (10002,"gowtham"); the data will  assign to the constructor and assign to the respective
class Employee{
    id:number;
    name:string;
    
    //parameter constructors
    constructor(eid:number,ename:string){// <----------
        this.id = eid;//                              |
        this.name = ename;//                          |
    }//                                               |
} //                                                  |
let emp = new Employee(10002,"gowtham");// -------

console.log("employ id data :",emp.id)
console.log("employ name data :",emp.name)


class Products{
    id:number;
    name:string;
    price:number;
    constructor(pid:number,pname:string,pprice:number){
        this.id = pid;
        this.name = pname;
        this.price = pprice;
    }
}

let produc_1 = new Products(607,"IPhone17",231000)
let produc_2 = new Products(608,"tablet-IBall",134000)



class Car{
    brand:string;
    model:string;
    constructor(ibrand:string,imodel:string){
        this.brand = ibrand;

        
    }
}














