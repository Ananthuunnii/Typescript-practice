export{}


// example 1 : Alias for string

type srtName = string;

// the purpose of the Alias is 
// we can do this both ways 

let studentName_1 : string = "Adhithya";            // the normal way
let studentName_2 :srtName = "Aloke"                // the alias way
console.log("student-1 name is :",studentName_1)
console.log("student-2 name is :",studentName_2)


// Example 2 :
type Age = number;

let StudentAge :Age = 45;
console.log("student age is :",StudentAge)


// Alias in Objects

type Student={
    id:number,
    name:string 
}

let student:Student={
    id:4001,
    name:"yashwa"
}

console.log("the object student alias like :",student)

//Example 4 : Alias for employees

type Employee = {      //object in alias      // this is alias not interface , this is employe alias object
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

console.log("the employee details :",employee)


// Example 5 :
type Product = {             
    id:number,
    name:string,
    price:number
}
function displayProduct(product:Product):void{
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


// Example : realworld 
type Order ={
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
console.log("the order details :",order)

















