export{}
function greet() : void{                                // void
    console.log("hello, welcome to function Test")
}
greet()


function Displaynumber() : number{                     //number so return a number is mandatery
    console.log("hello, welcome to function Test")
    return 1
}
Displaynumber()
let disnumber: number = Displaynumber()
console.log("calling the function and the result",disnumber)  // above function return number i get





// example 2
function displayStudentDetails(name : string,age : number ) : void{
    console.log("name",name);
    console.log("age",age)
}

let displayData:any = displayStudentDetails("alex",35)
console.log(displayData)


// function with return value

function add(num1:number,num2:number):number{
    return num1 + num2;
}
let rdata:number = add(30,20)
console.log("sum :",rdata)


//function with return string
function getFullName(firstname :string,lastname :string){
    return firstname +" "+ lastname;
}

var fullname :string = getFullName("Ananthu","unni")
console.log(fullname)

// optional parameter function
//use void as a no return type function
function showEmployees(name:string, city?:string): void {        // use city?  as a optional parameter
    console.log("Name :",name);
    console.log("city :",city)
}

showEmployees("arun");
showEmployees("Das","kochi");

//Default parameters
function calculateSalary(Salary:number, bonus:number = 5000):number{
    return Salary + bonus;
}
var totalSalary : number = calculateSalary(25000)
console.log("monthly salaty :",totalSalary)
var totalSalary_2 : number = calculateSalary(25000,10001)
console.log("monthly salaty and 10001 bonus :",totalSalary_2)


//Arrow function
const multiply =(a:number, b:number):number =>{
    return a*b
}
var theMultiple:number = multiply(3,4)
console.log("the multiply answer :",theMultiple)


// arrow function with realtime example

function calculateBill(price:number,quantity:number):number{
    return price*quantity
}
var billAmount:number = calculateBill(35,5)
console.log("the bill amount is :",billAmount); 
