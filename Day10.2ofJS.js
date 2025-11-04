// Properties of objects in JavaScript

console.log("Properties of objects in JavaScript")

let car={
    brand: "Toyota",
    model: "Camry",
    year: 2020
}   

// to access properties
document.writeln("Car Brand: ",car.brand)
document.writeln("Car Model: ",car.model)
document.writeln("Car Year: ",car.year)

// to add new property
car.color="Red"
document.writeln("Car Color: ",car.color)

// to modify existing property
car.year=2021
document.writeln("Updated Car Year: ",car.year)

// to delete a property
delete car.model
document.writeln("After deleting model property: ",car)

// to check if a property exists
document.writeln("Does 'brand' property exist?: ",car.hasOwnProperty('brand'))
document.writeln("Does 'model' property exist?: ",car.hasOwnProperty('model'))
document.writeln("Does 'color' property exist?: ",car.hasOwnProperty('color'))   

// output:
// Properties of objects in JavaScript
// Car Brand:  Toyota
// Car Model:  Camry
// Car Year:  2020
// Car Color:  Red  