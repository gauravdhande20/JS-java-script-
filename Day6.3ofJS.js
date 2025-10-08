let a=[1,3,2,44,66,33,22]


for(let i=0;i<=a.length;i++){
    const ele=a[i]
    console.log(ele)
}

// forEach loop using array function

a.forEach((value,index,arr)=>{
console.log(value,index,arr)

})

// for in loop

let obj={
    a:1,
    b:3,
    c:6
}

for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(element)
        
    }
}