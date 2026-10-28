/**************************    inheritance    *******************************/
// basic inheritance
class Animal {
    eat() {
        console.log("Animal is eating");
    }
}
class Dog extends Animal {
    constructor() {
        super(...arguments);
        this.dogType = "black";
    }
}
let animal = new Dog;
animal.eat();
// parant and child property
class Person {
    constructor() {
        this.name = "rohini";
    }
}
class Student extends Person {
    constructor() {
        super(...arguments);
        this.course = "Maths";
    }
}
let stu = new Student;
console.log(stu.name);
console.log(stu.course);
class Emloyee {
    work() {
        console.log("Employ where working");
    }
}
class Manager extends Emloyee {
    manager() {
        console.log("Manager is managing the team");
    }
}
let mng = new Manager;
mng.manager;
mng.work;
export {};
