export{}

/**************************   Abstract Method  *******************/

// class Animal{                       //  Normal class
//     eat():void{                     //  Normal Method
//         console.log("Animal is eating")
//     }
// }
abstract class Animal{              //  abstract class
    abstract sound():void           //  abstract method we can override this method into child
    eat():void{
        console.log("Animal is Eating")
    }
}


class Dog extends Animal{
    override sound():void{
        console.log("Dog make Sound")
    }
}

let dog  = new Dog;
dog.sound();  // Dog make sound
dog.eat();    // Animal is Eating


// example 2

abstract class Vehicle{                 // WE CAN'T CREATE OBJECT WITH THIS CLASS
    abstract start():void
    stop():void{
        console.log("Vehicle is stopped")
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


// let travel = new Vehicle;    /// we can't create object with the vehicle
//because the Vehicle class is a abstract class 
// we only can use this by inheriting as a parent class

let veh = new Car;
veh.start();
veh.stop();

let hev = new morotCycle;
hev.start();
veh.stop();




















