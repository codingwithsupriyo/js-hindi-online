"use strict";
//declear array 
const myArr = [0, 1, 2, 3, 4, 5];
const myArr2 = ["shaktiman","adhira",50,54];
//console.log([myArr2[1],myArr2[2],myArr2[3]]);
//console.log(typeof myArr2);
//console.log(myArr);


const myArr3 = new Array(1,2,3,4);
//console.log(myArr3[2]);
//console.log(typeof myArr3);

//Array methods
//myArr.push(6);
//console.log(myArr);

//myArr.pop();
//console.log(myArr);

//myArr.unshift(7);
//console.log(myArr);

//myArr.shift()
//console.log(myArr);

//console.log(myArr.includes(9));
//console.log(myArr.indexOf(9));

/*const newmyArr = myArr.join()
console.log(myArr);
console.log(newmyArr);
console.log(typeof newmyArr);*/

console.log("A", myArr);
console.log(myArr.slice(1,3)); //deep copy
console.log("B",myArr);
console.log(myArr.splice(1,3));// shalow copy
console.log("c",myArr);