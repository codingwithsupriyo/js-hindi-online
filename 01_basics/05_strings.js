"use strict";
//use modern syntax of string
//concatenate
/*const nameUser = "supriyo"
const repoUser = 20

let concateString = `hello ${nameUser} your repo is ${repoUser}`;

console.log(concateString);
console.log(`Hello mr./mrs. ${nameUser}. Your total repository is ${repoUser}`);

//this is proper write syntax
*/

const newStringOne = new String("hitesh");

// **********  google inspect console then print this


//console.log(newStringOne);
//print in key .... this 2 is a key of hitesh 
//console.log(newStringOne[2]);
// print prototype syntax
//console.log(newStringOne.__proto__); //output: {} this is not a empty object

//use string object

//console.log(newStringOne.length);

//use function
// use uppecase
//console.log(newStringOne.toUpperCase());
// use lowercase
//console.log(newStringOne.toLowerCase());

// use charAt for display character position by its key
//console.log(newStringOne.charAt('2'));

//use indexOf for display position in keyvalue by its character
//console.log(newStringOne.indexOf('t'));


//to display strng value without whitespace character with line termination
//use trim() for bothside trim
/*const nameSpliting = "     supriyo    ";
console.log(nameSpliting);
console.log(nameSpliting.trim());*/

//use split() for convert string to array with specific delimeter
/*const splitStringName = "supriyo-sarkar-putu"
console.log(splitStringName.split('-'));
*/

// use replace method and includes method for searching character into string
//const url = "http://hitesh.com/hitesh%20choudhary"

//use replace
//console.log(url.replace('%20','-')); //output : http://hitesh.com/hitesh-choudhary

//use includes for searching character into string
//console.log(url.includes('sundar'));  //output : false


//use substring('starting key','ending key') //not include ending charcter
const splitStringName = "supriyo"
//console.log(splitStringName.length);
//console.log(splitStringName.substring(0,5));

//use slice('starting key','ending key') obey the nagetive value reverse
console.log(splitStringName.slice(0,4));
console.log(splitStringName.slice(-5,4));