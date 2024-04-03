"use strict";

const str1 = "hello";
const str2 = "world";

//console.log(`First code write to execute in the world . this executed code is ${str1} ${str2}`);
//console.log(`concat function example ${str1.concat('-',str2)}`);
const nameStringobj = new String(`hello world`);
/*console.log(nameStringobj); 
console.log(typeof nameStringobj);
console.log(nameStringobj.toString());
const convertNamestr = nameStringobj.toString();
console.log(typeof convertNamestr);*/

/*console.log(nameStringobj[6]);
console.log(nameStringobj.__proto__);*/
/*let typeCheck = nameStringobj.__proto__;
console.log(typeof typeCheck);*/

//use function
const paragraph = "a quick brownfox jumps over the!";

//charAt()
//console.log(paragraph.charAt(2));

//indexOf()
//console.log(paragraph.indexOf('q'));

//toUppercase()
//console.log(paragraph.toUpperCase());
//toLowercase()
//console.log(paragraph.toLowerCase());

//substring()
//console.log(paragraph.substring(0,8));

//slice()
//console.log(paragraph.slice(-8));
//console.log(paragraph.slice(2,-8));

//trim()
let name_Trim_string = "       hello world       ";
//console.log(name_Trim_string.trim());
//trimStart()
//console.log(name_Trim_string.trimStart());
//console.log(name_Trim_string.trimStart().length);
//trimEnd()
//console.log(name_Trim_string.trimEnd());
//console.log(name_Trim_string.trimEnd().length);
//console.log(name_Trim_string.length);

//replace()
//let replaceString = `My Name is Supriyo. this Car owner name is Supriyo`;
//console.log(replaceString.replace("Supriyo","lopamudra"));
//replaceAll
//console.log(replaceString.replaceAll("Supriyo","Lopamudra"));

//repeat
/*let mood = "Happy!";
console.log(`My Current Mood is ${mood.repeat(3)}`);*/

//split()
/*let splitStringToArray = "Hello-World";
console.log(splitStringToArray.split('-'));*/

//startsWith()
let strName = "Sunday";
//console.log(strName.startsWith("Sun"));
//console.log(strName.endsWith("da",5));

//lastIndexOf() //define the index no of character
//console.log(paragraph.lastIndexOf("jumps"));

//localeCompare()
let strName2 = "sunday";
//console.log(strName.localeCompare(strName2));

/*normalize ::::: problem occured
let nameCompareConversion = "supriyo";
let comparisionwithconversion = "supriyo sarkar";
//console.log(nameCompareConversion === comparisionwithconversion);
let str3 = nameCompareConversion.normalize('NFC');
let str4 = comparisionwithconversion.normalize('NFC');
//console.log(str3.length === str4.length);
console.log(str4);*/

//padEnd()
//console.log(strName2.padEnd(10,'*'));

//padStart()
//console.log(strName2.padStart(10,'*').concat(strName2.padEnd(10,'*')));

let fullnumber = "9874064797";
let sliceNumber = fullnumber.slice(-4);
let maskedNumber = sliceNumber.padStart(fullnumber.length,"*");
console.log(maskedNumber);