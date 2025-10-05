//  Operation in JS

console.log("Arithmatic operation in js")
 let a=5;
 let b=3;

 console.log("addition of two number is : ",a+b)
 console.log("subtraction  of two number is : ",a-b)
 console.log("multiplication of two number is : ",a*b)
 console.log("divison of two number is : ",a/b)
 console.log("Modules of two number is : ",a%b)
 console.log("Increment of  a is : ",++a)
 console.log("Decrement of  a is : ",--a)


//  Output:

// Arithmatic operation in js
// addition of two number is :  8
// subtraction  of two number is :  2
// multiplication of two number is :  15
// divison of two number is :  1.6666666666666667
// Modules of two number is :  2
// Increment of  a is :  6
// Decrement of  a is :  5


// Assignment operators

console.log("Assignment operators in js")

let c=a
console.log(c)

c=c+a
console.log(c)

c=c-a
console.log(c)

c=c/a
console.log(c)

c=c/a
console.log(c)


// output :

// Assignment operators in js
// 5
// 10
// 5
// 1
// 0.2



// condition operation 

console.log("condition operation")


let d=a==b  //equal to operation
console.log(" a is equal to  b: ",d)

d=a!=b    //Not equal to operation
console.log(" a is equal to b : ",d) 

d=a===b    // equal to value and datatype 
console.log(" a equal to value and datatype to  b: ",d) 

d=a>b    // Greater than
console.log(" a is Greater than b : ",d) 

d=a<b    // Less than 
console.log(" a is Less than  b: ",d) 

d=a>=b    // Greater than equal to
console.log(" a is Greater than equal to b : ",d) 

d=a<=b    // Less than equal to
console.log(" a is Less than equal to b : ",d) 

// output :
// condition operation
//  a is equal to  b:  false
//  a is equal to b :  true
//  a equal to value and datatype to  b:  false
//  a is Greater than b :  true
//  a is Less than  b:  false
//  a is Greater than equal to b :  true
//  a is Less than equal to b :  false


// logical operators

console.log("logical operators in ja")

let first =true
let second=false

let thired=first&&second
console.log("logical AND  operation of first and second is : ",thired)

 thired=first||second
console.log("logical OR operation of first and second is : ",thired)

 thired=!second

console.log("logical NOT operation of  second is : ",thired)

// output :
// logical operators in ja
// logical AND  operation of first and second is :  false
// logical OR operation of first and second is :  true
// logical NOT operation of  second is :  true
