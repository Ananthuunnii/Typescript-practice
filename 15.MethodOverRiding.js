/*****************************    Method overriding ****************************/
class Animal {
    sound() {
        console.log("Animal make Sound");
    }
}
class Dog extends Animal {
    sound() {
        console.log("Dog make Sound");
    }
}
let dog = new Dog;
dog.sound(); // dog make Sound
class Vehicle {
    start() {
        console.log("vehicle start");
    }
}
class Car extends Vehicle {
    start() {
        console.log("Car Start");
    }
}
class morotCycle extends Vehicle {
    start() {
        console.log("motor cycle start");
    }
}
let veh = new Car;
veh.start();
let hev = new morotCycle;
hev.start();
// example 3
class Payment {
    pay() {
        console.log("");
    }
}
class CreditCardPayment extends Payment {
    pay() {
        console.log("using Creditcard payment Done");
    }
}
let payment = new CreditCardPayment;
payment.pay(); // using creditcard payment Done
export {};
