"use strict";

//using number
const score = 100;
//console.log(score);

//Number syntax with new keyword
/*const balance = new Number(100);
console.log(balance);
console.log(typeof balance);*/

//convert number to string
//console.log(score.toString().length);
//console.log(typeof (score.toString()));
//using number function()

/*const decimalafterval = 100;
console.log(decimalafterval.toFixed(3));*/

//use precision value with under the length
/*const precisionValue = 23.8966
console.log(precisionValue.toPrecision(3));
const precisionValue1 = 123.8966
console.log(precisionValue1.toPrecision(3));
const precisionValue2 = 1123.8966
console.log(precisionValue2.toPrecision(3));
console.log(precisionValue2.toPrecision(4));*/

//check number using comma easy way
/*const hundrads = 1000000;
console.log(hundrads.toLocaleString()); //bydefault us standard
console.log(hundrads.toLocaleString('en-IN')); //Indian standard */

//++++++++++++ Math function +++++++++++++
//console.log(Math); Math is Object

//Convert Negetive Value TO Positive value
/*let Num1 = -4
console.log(Math.abs(Num1));*/

//round of value
let num2 = 4.6;
let num3 = 4.3;
//console.log(Math.round(num2));
//console.log(Math.round(num3));

//console.log(Math.abs(Math.round(-4.6)));

//using floor
//console.log(Math.floor(4.9));

//using ceil
//console.log(Math.ceil(4.2));

//Using min() and max()
/*console.log(Math.min(2,3,4,5,7,8));
console.log(Math.max(2,9,11,13,15,6));*/

//random function
//console.log(Math.random()); // 0 to 1 
//console.log((Math.random()*10) + 1); //avoid 0

//console.log(Math.floor(Math.random()*10)+1); //randomly change down value

//formula for use custom minimum number to custom maximum number
let min = 10
let max = 20

//Math.floor(Math.random() * (max-min+1))+min
//console.log(Math.floor(Math.random()*(max-min+1))+min);