/************************ datatype **************************/
//string
//number
//boolien
// any
// unknown
// void -- functions we can use only 
// null 
// undefined
export{};

var studentName :string = "Rahul";

let age : number = 24;

let isPassed:boolean = true;

let someDetails : any = "Rahul";   //any value we can use number, string, bool

let customerData: unknown = true;  // any value we can use number, string, bool


let nothing:null = null;   //nothing

let notAssigned: undefined = undefined //the undefined 

/*********any */

let value_1:any = "bmw"; 

console.log("name is :",value_1.toUpperCase())

value_1 = 300;
console.log("value is :",value_1.toFixed(2))


/*********unknown */

let value_2:unknown = "bmw";

// console.log("name is :",value_2.toUpperCase())   // here we get error we can't applay property like (toUpperCase,etc)


// we can do one things

let value_3:unknown = "bmw";

if (typeof(value_3)=="string"){
    console.log("we can do : ",value_3.toUpperCase())
}else{
    console.log("it's not string")
}





