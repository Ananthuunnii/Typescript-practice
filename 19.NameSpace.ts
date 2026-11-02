export{}

/**************************   namespace **********************************/



namespace Company{
    function display():void{
        console.log("welcome to BIG BUCKET Company")
    }
    export function printName():void{// export is used to export the function to outside of namespace
        console.log("Company name is BIG BUCKET")
    }
}


// we can call the exported function using the namespace "name" so

Company.printName()


// namespace with class

namespace EmployeeManagement{
    export class employee{
        display():void{
            console.log("employee details showed the fun inside namespace inside class")
        }
    }
}

let Demployee = new EmployeeManagement.employee()
Demployee.display();


// example with multiple - namespace

namespace HR{
    export function recruit():void{
        console.log("HR Recrutment...");
    }
}

namespace Finance{
    export function salary(): void{
        console.log("Salary Processed...")
    }
    // No error or No issue
    // HR.recruit()   // we can use here too  because the function is exported
}

HR.recruit()
Finance.salary()


//namespace with interfaces


namespace PaymentSystem{
    
    interface payment{
        pay(amount:number):void
    }
    export class UPI implements payment{

        pay(amount:number):void{
            console.log("Paid $",amount)
        }
    }

}

let payment = new PaymentSystem.UPI();
payment.pay(2500)





























