"use strict";

//primitive datatype : 7 types of premitive datatype = String,Number,Boolean,Null,undefined,BigInt,symbol
/*
let nameString = "supriyo";
console.log(typeof nameString);

let studentId = 11;
console.log(typeof studentId);

let attendStudent = true
console.log(typeof attendStudent);

let studentSubject = null
console.log(typeof studentSubject);

let opd;
console.log(typeof opd);

*/
// Non primitive datatype : array , function , object   //function call function object
/*let arr = ["supriyo","sarkar"];
console.log(typeof arr);
console.log(arr);
*/
/*let func = function(){
   console.log("hello world") ;
}
console.log(typeof func);
console.log(func);*/

/*let obj = {
    name : "supriyo",
    age : 22
}
console.log(typeof obj);
console.log(obj);*/


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Memory ++++++ two types of memory 1:stack 2:heap 
// stack use for primitive and heap use for non primitive/reference

//stack is used to carry copy data one variable to another variable
// stack example

/*let userName = "hitesh";
let anotherName = userName;
anotherName = "supriyo";
console.log(anotherName); //if we comment anotherName then output: hitesh or else output: supriyo 
console.log(userName); // doesNot change original value. output: hitesh
*/

/*heap used for non primitive type heap use to access references so we use non primitive datatype and change a value then change 
    original reference value */

    let userOne = {
        email:"hitesh@google.com",
        upi:"yono@ybl"
    }

    let userTwo = userOne;
    userTwo.email = "supriyo@google.com";
    
    console.log(userTwo.email);             //object call using '.' eg: userTwo.email
    console.log(userOne);                      //after change email, change original reference
    // after change email output : supriyo@google.com
