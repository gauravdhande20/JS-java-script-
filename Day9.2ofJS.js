// Number Methods in javaScript
console.log("Number Methods in javaScript")
// output: Number Methods in javaScript         

// toString() method
let num8 = 45;
console.log(num8.toString());   
// output: 45

// toExponential() method
let num9 = 123456;
console.log(num9.toExponential());
// output: 1.23456e+5

// toFixed() method
let num10 = 5.6789;
console.log(num10.toFixed(2)); // it will round the number to 2 decimal places
// output: 5.68

// toPrecision() method
let num11 = 7.123456;
console.log(num11.toPrecision(4)); // it will round the number to 4 significant digits
// output: 7.123

// valueOf() method
let num12 = 89;
console.log(num12.valueOf()); // it will return the primitive value of the number
// output: 89   

// Number() method  
let str6 = "123";
let str7 = "hello";
console.log(Number(str6));  
console.log(Number(str7));
// output: 123  
// NaN

// parseInt() method
let str8 = "456.78";
console.log(parseInt(str8)); // it will convert the string to integer
// output: 456  

// parseFloat() method
let str9 = "456.78";
console.log(parseFloat(str9)); // it will convert the string to floating point number
// output: 456.78   

// isNaN() method   
let str10 = "hello";
let num13 = 123;
console.log(isNaN(str10));  
console.log(isNaN(num13));
// output: true  
// false    

// isFinite() method
let num14 = 123;
let num15 = Infinity;
console.log(isFinite(num14));
console.log(isFinite(num15));
// output: true
// false    

// Math object in javaScript

console.log("Math properties and methods")
// output: Math properties and methods  

// Math.PI property     
console.log(Math.PI); // it will return the value of PI
// output: 3.141592653589793

// Math.E property
console.log(Math.E); // it will return the value of Euler's number
// output: 2.718281828459045

// Math.round() method
let num16 = 4.7;
console.log(Math.round(num16)); // it will round the number to the nearest integer
// output: 5  

// Math.ceil() method
console.log(Math.ceil(num16)); // it will round the number to the next integer
// output: 5                

// Math.floor() method
let num17 = 4.4;
console.log(Math.floor(num17)); // it will round the number to the previous integer
// output: 4
   