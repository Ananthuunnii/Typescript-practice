export{}

/*****************************     Generics    ***************************/



// function always will return number
function display(val:number):number{
    return val*10;
}
let dis:number = display(25)
console.log(dis)

// the Generics way
function displayTest<T>(val:T):T{
    return val;
}

// same function but we can only use different type datatype values pass, like below
let dtest_1 = displayTest<string>("Manu")
console.log(dtest_1)

let dtest_2 = displayTest<number>(10001)
console.log(dtest_2)

let dtest_3 = displayTest<boolean>(true)
console.log(dtest_3)

//// or 

function getData<T1,T2>(val:T1):T2{
    return String(val) as T2
}
getData<number, string>(10); 
getData<string,number>("Thudarum");


// example 1   to understand  the "T" for a datatype referance  we can initialise the datatype
// while we calling the function so we can reuse the code and avoid the dulication of the function

function printArray<T>(item:T[]){   
    for(let i of item){
        console.log(i);
    }
}
printArray<number>([101,102,103,104]);
printArray<string>(["kkd","kchi","tvm","tcr"]);

// realtime example
// browser storage concept -- Generics

// key is in stringvalue is in string

// class with generics
class datastore<T>{
    data:T;
    constructor(value:T){
        this.data = value;
    }
    display():void{
        console.log(this.data)
    }
}

// one class and we can resuse this code with different datatype parameters
let employeePlace = new datastore<string>("India");
employeePlace.display(); //india
let employeeSalary = new datastore<number>(82000.58);
employeeSalary.display(); //82000.58
let employeeID = new datastore<number>(101);
employeeID.display(); //101


// Generics with interfaces
// one interface   use 2 ways below
interface IResponces<T>{
    Success:boolean;
    data : T 
}

// calling the interface 1 way
let employeeResponce : IResponces<string> = {
    Success:true,
    data:"Employee Created Successfully"
}
console.log(employeeResponce.data)
console.log(employeeResponce.Success)
console.log(employeeResponce)

// calling the interface 2 way
let employeeSalaryi : IResponces<number> = {
    Success:true,
    data:80000
}
console.log(employeeSalaryi.data)
console.log(employeeSalaryi.Success)
console.log(employeeSalaryi)













