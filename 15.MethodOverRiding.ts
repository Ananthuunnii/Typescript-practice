export{}
/*****************************    Method overriding ****************************/


class Animal{
    sound():void{
        console.log("Animal make Sound")
    }
}

class Dog extends Animal{
    override sound():void{                  // this override key is importent
        console.log("Dog make Sound")
    }
}
let dog = new Dog;
dog.sound()   // dog make Sound


class Vehicle{
    start():void{
        console.log("vehicle start");
    }
}
class Car extends Vehicle{
    override start():void{                  // this override key is importent
        console.log("Car Start")
    }
}
class morotCycle extends Vehicle{
    override start():void{                           // this override key is importent
        console.log("motor cycle start")
    }
}

let veh = new Car;
veh.start();


let hev = new morotCycle;
hev.start();



// example 3

class Payment{
    pay():void{
        console.log("")
    }
}
class CreditCardPayment extends Payment{
    override pay():void{
        console.log("using Creditcard payment Done")
    }
}
let payment = new CreditCardPayment;
payment.pay() // using creditcard payment Done



















