// the purpose of the Alias is 
// we can do this both ways 
let studentName_1 = "Adhithya"; // the normal way
let studentName_2 = "Aloke"; // the alias way
console.log("student-1 name is :", studentName_1);
console.log("student-2 name is :", studentName_2);
let StudentAge = 45;
console.log("student age is :", StudentAge);
let student = {
    id: 4001,
    name: "yashwa"
};
console.log("the object student alias like :", student);
let employee = {
    id: 101,
    name: "yuva",
    salary: 45000,
    city: "Mumbai"
};
console.log("the employee details :", employee);
function displayProduct(product) {
    console.log("the product id :", product.id);
    console.log("the product name :", product.name);
    console.log("the product price :", product.price);
}
// function calling
displayProduct({
    id: 3002,
    name: "nazario",
    price: 47000
});
let order = {
    orderId: 3001,
    productName: "Mobile",
    amound: 60000,
    isDelivered: true
};
console.log("the order details :", order);
export {};
