let customerName = "JCB";
let customerSalary = 85000;
let customerJobStatus = true;
// console.log(customerName);
// console.log(customerSalary);
// console.log(customerJobStatus);
// the datatypes are 
// string, number, boolean, any, unknown, null,undefined
let myname = "Sparrow";
let myphone = 9876543210;
let ismypassword = true;
let myPaddress = "bangalore"; // we can use string bool number
let myTaddress = "kolkatta"; // we can use string bool number
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
let mysalary = [2000, 1800, 900, 1200];
let myhobbies = ["singing", "dancing", "coding", "thinking"];
let mychecklist = [true, false];
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
mysalary.forEach(salary => {
    // console.log(salary)
});
// iteration by value excatly in array
for (let salary of mysalary) {
    // console.log(salary);
}
// normal for loop return the index of the array
for (let i = 0; i < mysalary.length; i++) {
    // console.log(mysalary[i]);
}
/*******************   Tuple  ******************/
let companydetails = ["KOM pvt", 1980];
let mydetails = ["barath", 27, "M", true, 9876543210];
// console.log(mydetails)
let companyemployees = ["ramu", [1, 2, 3, 4]];
/*******************   Enums  ******************/
// used to define a set of named constants
var Weekdays;
(function (Weekdays) {
    Weekdays[Weekdays["Monday"] = 1] = "Monday";
    Weekdays[Weekdays["Thursady"] = 2] = "Thursady";
    Weekdays[Weekdays["Wednesday"] = 3] = "Wednesday";
    Weekdays[Weekdays["Turesday"] = 4] = "Turesday";
    Weekdays[Weekdays["Friday"] = 5] = "Friday";
})(Weekdays || (Weekdays = {}));
// console.log(Weekdays)
// console.log(Weekdays.Monday)
// by default 
var usertype;
(function (usertype) {
    usertype[usertype["Admin"] = 0] = "Admin";
    usertype[usertype["Manager"] = 1] = "Manager";
    usertype[usertype["BA"] = 2] = "BA";
    usertype[usertype["TL"] = 3] = "TL";
    usertype[usertype["Tester"] = 4] = "Tester";
    usertype[usertype["Developer"] = 5] = "Developer"; // 5
})(usertype || (usertype = {}));
// console.log(usertype)
// by default one and it's continue the number patten
var status;
(function (status) {
    status[status["Sucess"] = 1000] = "Sucess";
    status[status["Pending"] = 1001] = "Pending";
    status[status["Progress"] = 1002] = "Progress";
    status[status["Failed"] = 1003] = "Failed"; // 1003
})(status || (status = {}));
// console.log(status)
// also assign string values for those named words in enum
// eg:
var Delivery;
(function (Delivery) {
    Delivery["Ordered"] = "Ordered";
    Delivery["shipped"] = "Shipped";
    Delivery["delivered"] = "Delivered";
    Delivery["cancelled"] = "Cencelled";
})(Delivery || (Delivery = {}));
// console.log(Delivery)
// enum 
// enum orderstatus{
//     order = "order ready",
//     recived = "order is recived",
//     cancel = "order cancled",
//     shiped = "order on the way"
// }
var delivered;
(function (delivered) {
    delivered[delivered["orderplcaed"] = 101] = "orderplcaed";
    delivered[delivered["ordershipped"] = 102] = "ordershipped";
    delivered[delivered["ordercancled"] = 103] = "ordercancled";
    delivered[delivered["orderarraved"] = 104] = "orderarraved";
})(delivered || (delivered = {}));
// console.log(delivered)
// console.log(delivered.orderarraved)
function greetings() {
    console.log("hello there");
}
// greetings()
function salarytotal(a, b) {
    return a + b;
}
// console.log(salarytotal(60000,15000))
function jiocompanydetsils(name, age) {
    // console.log(`the name is ${name} and age is ::; ${age}`);
}
var jiocumdata = jiocompanydetsils("koya", 59);
// console.log(jiocumdata)
const mycompanydata = (a, b) => {
    return a + b;
};
// console.log(mycompanydata(10,50))
function calculatecombill(salary, bornus) {
    return salary + bornus;
}
let theTotalBill = calculatecombill(90000, 8000);
// console.log(theTotalBill)
//object
let laptopdetails = {
    id: 5671001,
    name: "asuze",
    problem: "sound not working good"
};
// console.log(laptopdetails)
let mycusdataout = {
    myid: 1001,
    name: "guru",
    age: 30
};
// console.log(mycusdataout)
function displayempdata(emp) {
    console.log("the id is", emp["id"]);
    console.log("the id is", emp.name);
}
// displayempdata({id:2002,name:"amegos"})
let some1course = {
    coursename: "fullstack engineer",
    students: ["wrongs", "seeding", "shark"]
};
let mysmallworld = {
    id: 4001,
    worldname: "little kerala",
    age: 32,
    place: "underground",
    working: true
};
function personalDetiails(pdetails) {
    console.log("the person id", pdetails.id);
    console.log("the person name", pdetails.name);
    console.log("the person age", pdetails.age);
}
let age = 45;
let mystudent_1 = {
    id: 3004,
    name: "ajay",
    age: 39
};
let mystudent_2 = {
    id: 3005,
    name: "vysh",
    age: 29
};
// console.log(mystudent_1)
// console.log(mystudent_2)
let mysecstudent;
mysecstudent = "abcdfeg";
function displayuniortype1(userid) {
    console.log("the user id", userid);
}
// displayuniortype1("onetwothree")
let myvaluearr;
myvaluearr = [1, "abc", "rty", 1995];
let myfirstorder = "pending";
class myclassroom {
    constructor() {
        this.id = 1;
        this.name = "don";
        console.log(this.id, this.name);
    }
}
// let mcr1 = new myclassroom
class employeejio {
    constructor() {
        this.id = 4000;
        this.name = "ambani";
    }
    display() {
        console.log("the id is :", this.id);
        console.log("the id is :", this.name);
    }
}
// let empjio = new employeejio()
// empjio.display();
// constructor
class myjiostudent {
    constructor(cid, cname) {
        this.id = cid;
        this.name = cname;
    }
    display() {
        console.log("inside the constructor id :", this.id);
        console.log("inside the constructor name :", this.name);
    }
}
let mjs = new myjiostudent(3001, "selena james");
// mjs.display()
// in class access modifiers
class indianbank {
    constructor(cbalance = 0, caccoundtype = "savings") {
        this.balance = cbalance;
        this.accounttype = caccoundtype;
    }
    display() {
        console.log("the display out of balance :", this.balance);
        console.log("the display out of account type :", this.accounttype);
    }
}
let idbk = new indianbank();
// idbk.display()
// console.log(idbk.accounttype)
class bankperson {
    constructor() {
        this.accountholder = "kridhik";
        this.usercode = 2345432;
    }
}
class bankowner extends bankperson {
    display() {
        console.log("the bankperson :", this.usercode);
    }
}
let bkor = new bankowner();
// bkor.display()
// console.log(bkor.accountholder)
// -- abstract method
class Animal {
    eat() {
        console.log("animal eating");
    }
}
class dog extends Animal {
    sound() {
        console.log("dog making sound");
    }
}
let someonedog = new dog;
// someonedog.sound()
// abstract method
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
class computershop {
    constructor() {
        this.size = "50cm";
    }
    printer() {
        console.log("printing");
    }
    scanner() {
        console.log("scanning ");
        console.log("scanning size :", this.size);
    }
}
let comshop = new computershop();
// comshop.printer()
// comshop.scanner()
function displayTV(name, age) {
    return name;
}
let tvdis = displayTV("manu", 32);
console.log(tvdis);
function printmyarray(items) {
    for (let i of items) {
        console.log(i);
    }
}
// printmyarray<number>([1,2,3,4,5,6])
var grate_company;
(function (grate_company) {
    function display() {
        console.log("welcome to big bucket company");
    }
    function printcompanyname() {
        console.log("big baskect");
    }
    grate_company.printcompanyname = printcompanyname;
})(grate_company || (grate_company = {}));
grate_company.printcompanyname();
let customerDetails = ["vasu", 37, "M", "single"];
customerDetails.forEach((i) => {
    console.log(i);
});
let subjects = ["html", "css", "typescript"];
for (let i = 0; i < subjects.length; i++) {
    console.log(subjects[i]);
}
// array be like
let wildanimals = [1, "lion", "elephand", "tiger", "deer"];
// tuple
let wildbirds = ["crow", "eggel", "pegion"];
var cargarage;
(function (cargarage) {
    cargarage[cargarage["bmw"] = 1] = "bmw";
    cargarage[cargarage["audi"] = 2] = "audi";
    cargarage[cargarage["benz"] = 3] = "benz";
    cargarage[cargarage["toyato"] = 4] = "toyato";
    cargarage[cargarage["lembo"] = 5] = "lembo";
})(cargarage || (cargarage = {}));
export {};
