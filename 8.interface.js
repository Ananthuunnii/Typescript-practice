let student = {
    id: 101,
    name: "donald",
    isPassword: true
};
console.log("the result", student);
let employee = {
    id: 101,
    name: "yuva",
    salary: 45000,
    city: "Mumbai"
};
console.log("the interface print", employee);
let customer_1 = {
    id: 2034,
    name: "arjith",
    salary: 52000
};
let customer_2 = {
    id: 2034,
    name: "arjith",
    salary: 52000,
    WFH: true
};
console.log("the customer 1 value check of optional property in interface :", customer_1);
console.log("the customer 2 value check of optional property in interface :", customer_2);
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
displayProduct({
    id: 3003,
    name: "gebrial",
    price: 70000
});
// 
let user = {
    id: 1,
    name: "emrik",
    address: {
        city: "londan",
        state: "west bengal"
    }
};
let order = {
    orderId: 3001,
    productName: "Mobile",
    amound: 60000,
    isDelivered: true
};
console.log("realworld example interface :", order);
export {};
