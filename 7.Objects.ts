export{}
// notmal object would be like this
// let customerdata ={
//     name : "shaym",
//     age : 45,
//     job :true
// }

//in TS object would be like
let customerdata :{name:string,age:number,job:boolean}={
    name:"Dev",
    age :32,
    job :true
}
console.log("the Ts object  custumer details :",customerdata)

// assessing the customer property like

console.log(customerdata.name);
console.log(customerdata.age);
console.log(customerdata.job);

//updating the object name
customerdata.name = "kishor";
console.log("object after updating the name:",customerdata)


//example 1
    let Employee :{
        id:number,
        name:string,
        salary:number,
        city:string
        }={
        id:101,
        name:"Dev",
        salary :32000,
        city :"Bangalore"
    }
    console.log("Employee :",Employee)

//example 2
    let Employee_1 :{
        id:number,
        name:string
        }={
        id:101,
        name:"Dev"
    }

    // function with object
    function displayEmployee(emp:{
        id:number,
        name:string
        })
    {
        console.log("object passing to function, so employee id:",emp.id)
        console.log("object passing to function, so employee name:",emp.name)
    }
    displayEmployee({id:201,name:"rohith"})   // this way the object pass throuth as a parameter




// Nested object 
let company = {
    name :"razh",
    address:{
        city:"bangalore",
        state:"karnataka"
    }
}
console.log("printing the nested object value 1.city:",company.address.city);
console.log("printing the nested object value 2. state: ",company.address.state);


// object with array
let course={
    coursename:"Data enginer",
    students:["rahul","kulbinth","ragave"]
}

console.log("object with array data showing of course variable :",course.students)








