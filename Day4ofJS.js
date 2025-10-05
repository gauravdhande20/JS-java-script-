// Function in  JS

// Funcation is a building block  in all programming


console.log("let's create first function ")

function youeName(name){
    console.log("hey " +name+ " how are you")
    console.log("hey " +name+ " can i help you")
    
}
youeName("Gaurav")



function sum(a,b){
    // console.log(a+b)
    return a+b;
}
result1=sum(8,9)
console.log("the sum of a and b is: ",result1)
result2=sum(3,9)
console.log("the sum of a and b is: ",result2)
result3=sum(9,9)
console.log("the sum of a and b is: ",result3)


// -----Funcation using  variable----------
// Arrow function

const fun1=(x)=>{
    console.log("the number is : ",x)
}
fun1(34)
fun1(314)
fun1(14)


// output:

// let's create first function 
// hey Gaurav how are you
// hey Gaurav can i help you
// the sum of a and b is:  17
// the sum of a and b is:  12
// the sum of a and b is:  18
// the number is :  34
// the number is :  314
// the number is :  14