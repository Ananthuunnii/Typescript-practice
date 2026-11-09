export{}

let customerName : string = "JCB";
let customerSalary : number = 85000
let customerJobStatus : boolean = true
// console.log(customerName);
// console.log(customerSalary);
// console.log(customerJobStatus);


// the datatypes are 
// string, number, boolean, any, unknown, null,undefined

let myname: string = "Sparrow";
let myphone : number = 9876543210;
let ismypassword:boolean = true;
let myPaddress:any = "bangalore";  // we can use string bool number
let myTaddress:unknown = "kolkatta"; // we can use string bool number

/**************   difference between any and unknown   ********* */
// we can use the variable with any we can apply propertys (toUpperCase,etc)
// console.log(myPaddress.toUpperCase()) // no error

// we can use the variable with unknown we can't apply propertys (toUpperCase,etc);
// console.log(myTaddress.toUpperCase())  // THIS get a runtime error


// array is a collection multiple values of data with same datatype
// store the multiple value
// same datatype
// accessed using the index
// zero based index
// dynamic size

//defference between js and ts array
// ts array - collection of same datatype multiple value
// js array - collection of mix of datatypes  values    


/****************  Array ********************/


let mysalary    : number[]  = [2000,1800,900,1200];
let myhobbies   : string[]  = ["singing","dancing","coding","thinking"]
let mychecklist : boolean[] = [true,false];

// let mycars : (string[],number[]) = []



// array methods are
// Push(), pop(), slice(),splise(),unshift(), shift()

// console.log(mysalary.push(2500)) // adding the value to array
// console.log(mysalary.pop()) // remove last value from array

// console.log(mysalary.unshift(3999)) // add a value to first of a array
// console.log(mysalary.shift())  // remove the first value from array
// console.log(mysalary)
// console.log("sPlice: ",mysalary.splice(1,1,4567)) // (start,end,adding element perticular position)
// console.log(mysalary)
// console.log("slice: ",mysalary.slice(0,3)) // slice the array


// foreach loop       // iteration using arrow function
mysalary.forEach(salary=>{
    // console.log(salary)
})

// iteration by value excatly in array
for(let salary of mysalary){
    // console.log(salary);
}

// normal for loop return the index of the array
for(let i = 0;i<mysalary.length;i++){
    // console.log(mysalary[i]);
}

/*******************   Tuple  ******************/

let companydetails : [string,number] = ["KOM pvt",1980];
let mydetails : [string, number, string, boolean, number] = ["barath",27,"M",true,9876543210];
// console.log(mydetails)

let companyemployees : [string,number[]] = ["ramu",[1,2,3,4]]



/*******************   Enums  ******************/

// used to define a set of named constants
enum Weekdays{
    Monday    = 1,
    Thursady  = 2,
    Wednesday = 3,
    Turesday  = 4,
    Friday    = 5
}
// console.log(Weekdays)
// console.log(Weekdays.Monday)

// by default 

enum usertype{      // the default value
    Admin,          // 0
    Manager,        // 1
    BA,             // 2
    TL,             // 3
    Tester,         // 4
    Developer       // 5
}
// console.log(usertype)

// by default one and it's continue the number patten
enum status{
    Sucess = 1000,
    Pending,            // 1001  // this value automaticaly assign
    Progress,           // 1002
    Failed              // 1003
}
// console.log(status)

// also assign string values for those named words in enum

// eg:
enum Delivery{
    Ordered = "Ordered",
    shipped = "Shipped",
    delivered = "Delivered",
    cancelled = "Cencelled"
}
// console.log(Delivery)

// enum 
// enum orderstatus{
//     order = "order ready",
//     recived = "order is recived",
//     cancel = "order cancled",
//     shiped = "order on the way"
// }

enum delivered{
    orderplcaed = 101,
    ordershipped = 102,
    ordercancled = 103,
    orderarraved = 104,
}

// console.log(delivered)
// console.log(delivered.orderarraved)

function greetings():void{
    console.log("hello there")
}

// greetings()
function salarytotal(a:number,b:number):number{
    return a+b
}

// console.log(salarytotal(60000,15000))

function jiocompanydetsils(name:string,age:number):void{
    // console.log(`the name is ${name} and age is ::; ${age}`);
}
var jiocumdata:any = jiocompanydetsils("koya",59)

// console.log(jiocumdata)


const mycompanydata:any = (a:number,b:number):number =>{
    return a+b;
}
// console.log(mycompanydata(10,50))

function calculatecombill(salary:number,bornus:number):number{
    return salary+bornus 
}
let theTotalBill:number = calculatecombill(90000,8000)
// console.log(theTotalBill)

//object
let laptopdetails :{id:number,name:string,problem:string}={
    id:5671001,
    name:"asuze",
    problem:"sound not working good"
}
// console.log(laptopdetails)


let mycusdataout :{myid:number,name:string,age:number}={
    myid : 1001,
    name : "guru",
    age : 30
}
// console.log(mycusdataout)

function displayempdata(emp:{id:number,name:string}):void{
    console.log("the id is",emp["id"])
    console.log("the id is",emp.name)
}
// displayempdata({id:2002,name:"amegos"})

let some1course :{coursename:string,students:string[]}={
    coursename:"fullstack engineer",
    students:["wrongs","seeding","shark"]
}

// ----------------  wwe way to  declare data type

interface Mysmallworld{
    id:number,
    worldname:string,
    age:number,
    place:string,
    working:boolean
}

let mysmallworld:Mysmallworld = {
    id:4001,
    worldname:"little kerala",
    age :32,
    place :"underground",
    working:true
}
// console.log(mysmallworld)

interface PersDetails{
    id:number,
    name:string,
    age:number
}
function personalDetiails(pdetails:PersDetails){
    console.log("the person id",pdetails.id)
    console.log("the person name",pdetails.name)
    console.log("the person age",pdetails.age)
}

// let persDetiails :PersDetails = {
    
// }
// personalDetiails({id: 701, name:"lion", age:88})


// the object in alias 
type Age = number;

let age:Age = 45;

type student = {
    id:number,
    name:string,
    age:number
}
let mystudent_1 :student={
    id:3004,
    name:"ajay",
    age:39
}
let mystudent_2 :student = {
    id:3005,
    name:"vysh",
    age:29
}
// console.log(mystudent_1)
// console.log(mystudent_2)

let mysecstudent : number | string;
mysecstudent = "abcdfeg";

function displayuniortype1(userid:number | string):void{
    console.log("the user id",userid)
}
// displayuniortype1("onetwothree")


let myvaluearr :(number | string)[];
myvaluearr = [1,"abc","rty",1995]


//applay union type to type alieas


type mypaymentstatus = "pending" | "failed" | "success";

type orderstatuss = "pending" | "faile" | "success";

let myfirstorder :orderstatuss = "pending"


class myclassroom{
    id:number;
    name:string;
    constructor(){
        this.id = 1
        this.name = "don"
        console.log(this.id,this.name)
    }
}

// let mcr1 = new myclassroom


class employeejio{
    id:number = 4000;
    name:string="ambani"
    display():void{
        console.log("the id is :",this.id);
        console.log("the id is :",this.name);
    }
}

// let empjio = new employeejio()
// empjio.display();



// constructor

class myjiostudent{
    id:number;
    name:string;
    constructor(cid:number,cname:string){
        this.id = cid;
        this.name = cname
    }
    display():void{
        console.log("inside the constructor id :",this.id)
        console.log("inside the constructor name :",this.name)
    }
}

let mjs = new myjiostudent(3001,"selena james")
// mjs.display()

// in class access modifiers

class indianbank{
    private balance:number;
    public accounttype:string;
    constructor(cbalance = 0,caccoundtype = "savings"){
        this.balance = cbalance
        this.accounttype = caccoundtype
    }
    display():void{
        console.log("the display out of balance :",this.balance)
        console.log("the display out of account type :",this.accounttype)
    }
    
}
let idbk = new indianbank()
// idbk.display()
// console.log(idbk.accounttype)

class bankperson{
    public readonly accountholder:string = "kridhik"
    protected usercode:number | string = 2345432;

}

class bankowner extends bankperson{
    display():void{
        console.log("the bankperson :",this.usercode)
    }
}
let bkor = new bankowner()
// bkor.display()
// console.log(bkor.accountholder)


// -- abstract method

abstract class Animal{
    abstract sound():void
    eat():void{
        console.log("animal eating")
    }
}
class dog extends Animal{
    override sound():void{
        console.log("dog making sound")
    }
}

let someonedog = new dog;
// someonedog.sound()


// abstract method

abstract class Vehicle{             
    abstract start():void
    stop():void{
        console.log("Vehicle is stopped")
    }
}
class Car extends Vehicle{
    override start():void{                  
        console.log("Car Start")
    }
}
class morotCycle extends Vehicle{
    override start():void{                         
        console.log("motor cycle start")
    }
}

// let veh = new Car;
// veh.start();
// veh.stop();

// let hev = new morotCycle;
// hev.start();
// hev.stop();




// interface

interface myiscanner{
    scanner():void,
    size:string
}

interface myiprinter{
    printer():void
}

class computershop implements myiscanner,myiprinter{
    size = "50cm"
    printer():void{
        console.log("printing")
    }
    scanner(): void {
        
        console.log("scanning ")
        console.log("scanning size :",this.size)
    }
}

let comshop = new computershop()
// comshop.printer()
// comshop.scanner()



function displayTV<T1,T2>(name:T1,age:T2):T1{
    return name
}
let tvdis:string | number = displayTV<string,number>("manu",32)
console.log(tvdis)


function printmyarray<T>(items:T[]){
    for(let i of items){
        console.log(i)
    }
}
// printmyarray<number>([1,2,3,4,5,6])


namespace grate_company{
    function display():void{
        console.log("welcome to big bucket company")
    }
    export function printcompanyname():void{
        console.log("big baskect")
    }
}
grate_company.printcompanyname()

let customerDetails : any[]=["vasu",37,"M","single"]

customerDetails.forEach((i)=>{
    console.log(i)
})
let subjects:string[] = ["html","css","typescript"]
for(let i:number = 0;i<subjects.length;i++){
    console.log(subjects[i]);
}

// array be like

let wildanimals:(string|number)[] = [1,"lion","elephand","tiger","deer"]


// tuple
let wildbirds:[string,string,string] = ["crow","eggel","pegion"]

enum cargarage{
    bmw = 1,
    audi = 2,
    benz = 3,
    toyato = 4,
    lembo = 5
}