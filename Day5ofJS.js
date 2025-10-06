// String in JS

console.log("String in JS")

let myname="Gaurav         "
let fridname="Rajesh"

// to access the perticular element from the string

console.log(myname[2])
console.log(myname[1])
console.log(myname[5])

// output:
// u
// a
// v


// to get the length of string

console.log("the length of mynameis : ",myname.length)

// output:  the length of mynameis :  15


// for single and adding both varible

console.log(`his name is ${myname} and his friend name is ${fridname}`)



// funcation of string

let str="hellow every one i am gaurav"

console.log(str.toUpperCase())
console.log(str.toLowerCase())
console.log(str.slice(1,14))
console.log(str.slice(4))   //it will print from index 4  to the end

console.log(str.replace("gaurav","Vaibhav")) // to replace a name or word
console.log(str.replace("a","V")) // it will "a" to "V" but only first occurance

console.log(str.concat(fridname,"  this is my friend name"))

// to remove whitespaces from string
console.log(myname)
let newstr=myname.trim()

console.log(newstr)

console.log(fridname.startsWith("G")) 
console.log(fridname.startsWith("R"))  


// output:
// HELLOW EVERY ONE I AM GAURAV
// hellow every one i am gaurav
// ellow every o
// ow every one i am gaurav
// hellow every one i am Vaibhav
// hellow every one i Vm gaurav
// hellow every one i am gauravRajesh  this is my friend name
// Gaurav         
// Gaurav
// false
// true
