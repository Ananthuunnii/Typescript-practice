export{}

////////////////////         new revision for this part it's pretty confusing    /////////////////////

interface Student{
    id:number,
    name:string,
    isPassword:boolean 
}

let student:Student = {
    id :101,
    name :"donald",
    isPassword : true 
}
console.log("the result",student)


// example 2

interface Employee{
    id:number,
    name:string,
    salary:number,
    city:string
}

let employee:Employee = {
        id:101,
        name:"yuva",
        salary:45000,
        city:"Mumbai"
    };

console.log("the interface print",employee)

//interface option property
interface Customer{
    id:number,
    name:string,
    salary:number,
    WFH?:boolean
}
let customer_1 :Customer ={
    id:2034,
    name:"arjith",
    salary:52000
}
let customer_2 :Customer ={
    id:2034,
    name:"arjith",
    salary:52000,
    WFH:true
}

console.log("the customer 1 value check of optional property in interface :",customer_1)
console.log("the customer 2 value check of optional property in interface :",customer_2)



// interface with function                      ---- very importent
interface Product{              // interface
    id:number,
    name:string,
    price:number
}
function displayProduct(product:Product):void{              // function declare with pass the interface
    console.log("the product id :",product.id);
    console.log("the product name :",product.name);
    console.log("the product price :",product.price);
}

// function calling
displayProduct({
    id:3002,
    name:"nazario",
    price:47000
})
displayProduct({
    id:3003,
    name:"gebrial",
    price:70000
})


// Nested interface                     -- very very importent part

interface Adress{
    city:string,
    state:string
}

// nest assign
interface User{
    id:number,
    name:string,
    address:Adress              // we assign the first Adress interface to the user specific interface
}

// 
let user:User = {
    id:1,
    name:"emrik",
    address:{
        city:"londan",
        state:"west bengal"
    }
}

//*********************    Real Time Example  ******************/

interface Order {
    orderId:number,
    productName:string,
    amound:number,
    isDelivered:boolean 
}
let order :Order = {
    orderId:3001,
    productName:"Mobile",
    amound:60000,
    isDelivered:true
}
console.log("realworld example interface :",order)


// we can create property and methods in interface

interface ICustomerService{
    id : number,
    FetchCustomer():string,             // decalre the method inside interface
    CreateCustomer():number,
    UpdateCustomer():number,
    DeleteCustomer():number
}











