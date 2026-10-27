/*********************************    class in typescript ************************/
class Student {
    constructor() {
        this.id = 1008;
        this.name = "Ragav";
    }
}
let student = new Student();
console.log(student);
console.log(student.id);
console.log(student.name);
// Example 2
class Employee {
    constructor() {
        this.id = 3008;
        this.name = "Gowdam";
    }
    display() {
        console.log("access the id from outside using this keyword :", this.id);
        console.log("access the name from outside using this keyword :", this.name);
    }
}
let employ = new Employee();
employ.display();
class Product {
    constructor() {
        this.id = 0;
        this.name = "";
        this.price = 0;
    }
}
let product_1 = new Product;
product_1.id = 101;
product_1.name = "laptop";
product_1.price = 3999;
let product_2 = new Product;
product_2.id = 102;
product_2.name = "mobile";
product_2.price = 2777;
console.log(product_1);
console.log(product_2);
// Example - 6
class Car {
    constructor() {
        this.brand = "BMW";
        this.model = "X5";
    }
    start() {
        console.log(this.brand + " " + this.model + "  Started");
    }
}
let car = new Car();
car.start();
export {};
