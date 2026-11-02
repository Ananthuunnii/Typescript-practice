export{}
/**************************    Applay the access modifiers in this class **********************/
// access modifiers

// by default every menber in class is public

//Public
class Student{
    public name:string = "petter";

}
let  stu = new Student;
console.log("the public variable outside class :",stu.name)
// i can access the public value outside the class



// Private 
class Employee{
    private password:string = "#@#@#@@#";

    displayPassword():void{
        console.log("the private password :", this.password)
    }
}
let  emp = new Employee;

// console.log("the privet variable outside class :",emp.password) 
// i can't access the private value outside the class

// but using the method we can call inside the class only 

emp.displayPassword()



//Protected

// means we use protected for parent class variable for only we want to show with child class not outside the class
class Person{
    protected age:number = 45;
}

class Teacher extends Person{
    displayage():void{
        console.log("the age is :",this.age)
    }
}
let tech = new Teacher;
tech.displayage()


// Real time example

class BankAccount {
    
    public accountHolder:string="ram";
    private balance:number = 50000;

    showBalance():void{
        
        this.balance +=300;
        console.log("Balance :",this.balance)
    }
}
let account = new BankAccount;
console.log("the public variable account holder is :",account.accountHolder);

account.showBalance()  // USING FUNCTION WE CAN SEE THE BALANCE

//Error
// console.log("private variable balance is ",account.balance)



//readonly

class AxisBankAccount {
    
    public readonly accountHolder:string="ram";   //use readonly here 
    
    showBalance():void{
        
        console.log( "accound holder name is ",this.accountHolder)
    }   
}
let Ax_acc = new AxisBankAccount;
console.log("the public variable account holder is :",Ax_acc.accountHolder);
// we can't able to change this readonly using object
// Ax_acc.accountHolder = "abdul"   // this get error
account.showBalance() 







