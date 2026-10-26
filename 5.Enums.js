//****************  Enums ********************* */
var Weekdays;
(function (Weekdays) {
    Weekdays[Weekdays["Monday"] = 0] = "Monday";
    Weekdays[Weekdays["Tuesday"] = 1] = "Tuesday";
    Weekdays[Weekdays["Wednesday"] = 2] = "Wednesday";
    Weekdays[Weekdays["Thursday"] = 3] = "Thursday";
    Weekdays[Weekdays["Friday"] = 4] = "Friday";
})(Weekdays || (Weekdays = {}));
console.log(Weekdays.Monday);
console.log(Weekdays.Tuesday);
console.log(Weekdays.Wednesday);
console.log(Weekdays.Thursday);
console.log(Weekdays.Friday);
// numberc by  default
var status;
(function (status) {
    status[status["done"] = 301] = "done";
    status[status["inprogress"] = 302] = "inprogress";
    status[status["pending"] = 304] = "pending";
    status[status["cancled"] = 305] = "cancled";
    status[status["Rejected"] = 306] = "Rejected";
})(status || (status = {}));
console.log("the status code of the enum.done :", status.done);
// example - 2
var paymentStatus;
(function (paymentStatus) {
    paymentStatus[paymentStatus["Pending"] = 0] = "Pending";
    paymentStatus[paymentStatus["Success"] = 1] = "Success";
    paymentStatus[paymentStatus["Failed"] = 2] = "Failed"; //2
})(paymentStatus || (paymentStatus = {}));
console.log("the payment details check : ", paymentStatus.Failed);
// example - 2
var paymentStatus_1;
(function (paymentStatus_1) {
    paymentStatus_1[paymentStatus_1["Pending"] = 1000] = "Pending";
    paymentStatus_1[paymentStatus_1["Success"] = 1001] = "Success";
    paymentStatus_1[paymentStatus_1["Failed"] = 1002] = "Failed"; //1003
})(paymentStatus_1 || (paymentStatus_1 = {}));
console.log("the secont payment details check : ", paymentStatus_1.Failed);
// example 
var orderStatus;
(function (orderStatus) {
    orderStatus["Ordered"] = "Ordered";
    orderStatus["Shipped"] = "Shipped";
    orderStatus["Delivered"] = "Delivered";
    orderStatus["Cancelled"] = "Cancelled";
})(orderStatus || (orderStatus = {}));
let order = orderStatus.Delivered;
console.log("the order status is :", order);
export {};
