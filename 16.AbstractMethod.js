/**************************   Abstract Method  *******************/
// class Animal{                       //  Normal class
//     eat():void{                     //  Normal Method
//         console.log("Animal is eating")
//     }
// }
class Animal {
    eat() {
        console.log("Animal is Eating");
    }
}
class Dog extends Animal {
    sound() {
        console.log("Dog make Sound");
    }
}
let dog = new Dog;
dog.sound(); // Dog make sound
dog.eat(); // Animal is Eating
// example 2
class Vehicle {
    stop() {
        console.log("Vehicle is stopped");
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
// let travel = new Vehicle;    /// we can't create object with the vehicle
//because the Vehicle class is a abstract class 
// we only can use this by inheriting as a parent class
let veh = new Car;
veh.start();
veh.stop();
let hev = new morotCycle;
hev.start();
veh.stop();
export {};
