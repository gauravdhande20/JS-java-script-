// Number in javaScript
console.log("Number in javaScript")
// output: Number in javaScript

// number can be writen with oor without decimal
let num1 = 34;
let num2 = 56.67;
console.log(typeof num1);
console.log(typeof num2);
//  output: number
//           number


// large or small number can be written in exponent form
let num3 = 23e5; 
let num4 = 23e-5;
console.log(num3);
console.log(num4);

// output: 2300000
// 0.00023


// Integer precision
let num5 = 999999999999999; // 15 digit precision
let num6 = 9999999999999999;    // 16 digit precision
console.log(num5);
console.log(num6);

// output: 999999999999999
// 10000000000000000


// floating point precision     `````
let num7 = 0.1 + 0.2; // it should be 0.3 but due to floating point precision it gives 0.30000000000000004
console.log(num7);
//   output: 0.30000000000000004

// Addition of string and number
let str1 = "hello";
let str2 = "world";
let str3 = 5;
let str4 = 10;
let str5="35";
console.log(str1 + str2); // it will concatenate the two strings
console.log(str3 + str4); // it will add the two numbers
console.log(str1 + str3); // it will concatenate the string and number  
console.log(str3 + str5); // it will concatenate the number and string
// output:helloworld
// 15
// hello5
// 535
// hello i am javascript

