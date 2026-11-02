//****************  Enums ********************* */

export{}



enum Weekdays{
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday
}
console.log(Weekdays.Monday);
console.log(Weekdays.Tuesday);
console.log(Weekdays.Wednesday);
console.log(Weekdays.Thursday);
console.log(Weekdays.Friday);


// numberc by  default
enum status{
    done = 301,
    inprogress = 302,
    pending = 304,
    cancled = 305,
    Rejected = 306
}

console.log("the status code of the enum.done :",status.done);

// example - 2
enum paymentStatus{
    Pending,        //0
    Success,        //1
    Failed          //2
}
console.log("the payment details check : ",paymentStatus.Failed)

// example - 2
enum paymentStatus_1{
    Pending = 1000,         //1000
    Success,                //1002
    Failed                  //1003
}
console.log("the secont payment details check : ",paymentStatus_1.Failed)


// example 
enum orderStatus {
    Ordered = "Ordered",
    Shipped = "Shipped",
    Delivered = "Delivered",
    Cancelled = "Cancelled" 
}

let order = orderStatus.Delivered
console.log("the order status is :",order)









