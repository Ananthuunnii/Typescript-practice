export{}

/**************************    inheritance    *******************************/
// basic inheritance
class Animal{
    eat():void{
        console.log("Animal is eating")
    }
}

class Dog extends Animal{
    dogType:string = "black"
}
let animal = new Dog;
animal.eat()

// parant and child property

class Person{
    name:string = "rohini";
}
class Student extends Person{
    course:string="Maths"
}
let stu = new Student;
console.log(stu.name)
console.log(stu.course)


class Emloyee{
    work():void{
        console.log("Employ where working")
    }
}
class Manager extends Emloyee{
    manager():void{
        console.log("Manager is managing the team")
    }
}
let mng = new Manager;
mng.manager;
mng.work;
