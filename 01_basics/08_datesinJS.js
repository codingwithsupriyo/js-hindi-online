"use strict";
//let MyDate = new Date();
//console.log(typeof MyDate);
//console.log(MyDate.toString());
//console.log(MyDate.toDateString());
//console.log(MyDate.toLocaleDateString());

//let myCreatedDate = new Date(2023, 0, 23, 5, 3);
//console.log(myCreatedDate.toDateString());
//console.log(myCreatedDate.toLocaleDateString());
//console.log(myCreatedDate.toLocaleString());

/*let myCreatedDate2 = new Date(2023, 0, 23)
console.log(myCreatedDate2.toLocaleString());*/

//timestamp
//let myTimestamp = Date.now();
//console.log(myCreatedDate.getTime());
//console.log(myTimestamp);

//Return milisecond to second
//console.log(Math.floor(myTimestamp/1000));

//method object customization

/*let myObj = new Date();
let result= myObj.toLocaleString('default',{
    weekday:"long"
});
console.log(result);
console.log(typeof result);*/

let MyDate = new Date();
//console.log(MyDate.getFullYear());
//console.log(MyDate.getMilliseconds());
let myTimestamp = Date.now();
console.log(myTimestamp);
console.log(MyDate.getTime());