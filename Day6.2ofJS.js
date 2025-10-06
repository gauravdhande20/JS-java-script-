// Methods in Array

console.log("let's starts methods of array in JS")

let fruit=["banana","orange","Apple","Mango"]

console.log(fruit)

// length methods

console.log(".length:",fruit.length)

// toString

console.log(".toString():",fruit.toString())

// at()  retuns the element present at the index
console.log(".at(2):",fruit.at(2))

// join() same as toString bur can add sepration
console.log(fruit.join(" # "))

// pop() remove the last element from array
let fr=fruit.pop()
console.log(".pop():",fr)
console.log(fruit.toString());

// push()
fruit.push("hjagdc");
console.log(fruit)

// shift() to remove first element from an array

fruit.shift()
console.log(fruit)

// unshift() add element at beginging an array

fruit.unshift("banana")
console.log(fruit)

// detele()
delete fruit[3]
console.log(fruit)


// concat() merge two array 

let b=["bhagi","bhath"]
let c=fruit.concat(b)
console.log(c)

// copywith ()
console.log(fruit.copyWithin(2,0))

// flat() create a new array of sub-array elements
let agrs=[[1,2],[3,4],[5,6]]
console.log(agrs)
console.log(agrs.flat())

// flatMap() first map all element of an array and then create a new array 
let qwe=[1,2,3,4,5,6,7,8,9]
let newarr=qwe.flatMap(x=>[x,x*10])
console.log(newarr)

// splice () add new item to an array  
let wer=[1,3,4,6,7]
wer.splice(1,2,222)   //it will put 222 at 1 indes and  remove 2 element after 1 index
console.log(wer)

// slice() to print elements from the given index
console.log(wer.slice(1))

// sort() sort the given array

let qas=[2,1,5,4]
console.log(qas.sort())



// output:

// [ 'banana', 'orange', 'Apple', 'Mango' ]

// .length: 4

// .toString(): banana,orange,Apple,Mango

// .at(2): Apple

// .join(" # "): banana # orange # Apple # Mango

// .pop(): Mango

// .toString(): banana,orange,Apple

// .push("hjagdc"): [ 'banana', 'orange', 'Apple', 'hjagdc' ]

// .shift(): [ 'orange', 'Apple', 'hjagdc' ]

// .unshift("banana"): [ 'banana', 'orange', 'Apple', 'hjagdc' ]

// delete fruit[3]: [ 'banana', 'orange', 'Apple',  ]

// .concat(b): [ 'banana', 'orange', 'Apple', 'bhagi', 'bhath' ]

// .copyWithin(2,0): [ 'banana', 'orange', 'banana', 'orange' ]

// .flat(): [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ]

// .flatMap(x=>[x,x*10]: [ 1, 2, 3, 4, 5, 6 ]

// .splice(1,2,222): [
//    1, 10,  2, 20,  3, 30,  4,
//   40,  5, 50,  6, 60,  7, 70,
//    8, 80,  9, 90
// ]

// .slice(1): [ 1, 222, 6, 7 ]

// .sort(): [ 222, 6, 7 ]
