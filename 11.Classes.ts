export{}


/*********************************    class in typescript ************************/

class Student{
    id:number = 1008;
    name:string = "Ragav"
}

let student = new Student();

console.log(student)
console.log(student.id)
console.log(student.name)


// Example 2

class Employee{
    id:number = 3008;
    name:string = "Gowdam";
    display():void{
        console.log("access the id from outside using this keyword :",this.id)
        console.log("access the name from outside using this keyword :",this.name)
    }
}
let employ = new Employee()
employ.display()





class Product{
    id: number = 0;
    name:string = "";
    price:number = 0;
}

let product_1 = new Product;
product_1.id = 101
product_1.name = "laptop"
product_1.price = 3999



let product_2 = new Product;
product_2.id = 102
product_2.name = "mobile"
product_2.price = 2777


console.log(product_1)
console.log(product_2)



// Example - 6

class Car{
    brand:string="BMW";
    model:string="X5";
    start():void{
        console.log(this.brand+" "+this.model+"  Started")
    }
}

let car = new Car();
car.start()

















