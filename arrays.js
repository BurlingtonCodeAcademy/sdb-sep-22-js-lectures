// Arrays

/* 
    Array is a list-like object whose prototype has methods to perform traversal and mutation operations (MDN Web Docs)
        * denoted by [ ]
        * hold multiple data types
        * mutable (can be modified)
        * contents can be accessed by their index
*/

let arr = []
console.log(arr) // creates empty array literal
console.log(Boolean(arr)) // empty array returns true

let carMake = ["BMW", "Porsche", "Maserati", "Pagani"]
console.log(carMake) // displays all contents of an array
console.log(carMake[4]) // if !found returns undefined instead of a ReferenceError
console.log(carMake[3]) // returns Pagani

// Nesting

let motoren = carMake[0] // assigns "BMW" to variable
let b = motoren[0] // assigns "B" of "BMW" to variable
console.log(motoren)
console.log(b)

console.log(carMake[0][0]) // consolidating ln 22 & 23 to accomplish the same task

// Arrays can have many different data types

let manyDataTypes = [
    "string",
    [1, 5, 7, true],
    false,
    undefined,
    null,
    NaN
]

console.log(manyDataTypes)

// Data Type

console.log(typeof manyDataTypes) // returns an object due to JS' OOP nature

console.log(manyDataTypes instanceof Array) // returns true due to it being an array

// Challenge

let septCohort = ["Justin Dorey", "Joseph Buffo", "Rene Gombar", ["Sidney Durmick", "Henry Dufour", "Lauren"], "Martinez", "Mary Reagan"]

/* 
    console.log Joseph's full name. Also console log Henry's full name.

    Fix Lauren into a new variable where her full name is being displayed.

    Rename Mary Reagan to Mary Potato inside the original array.

*/

console.log(septCohort[1])
console.log(septCohort[3][1])
let lauren = `${septCohort[3][2]} ${septCohort[4]}`
console.log(lauren)

septCohort[5] = "Mary Potato"
console.log(septCohort)

// Array Length Method

let educationTeam = [
    ["Paul Niemczyk", "Rob VanArsdall", "Josh Burke", "Eric Winebrenner"],
    ["Matt Nolan", "Julie Assur"],
    ["Ben Villa", "Dave Bailey"]
]

console.log(educationTeam.length)

// Getting the last item of our educationTeam array
console.log(educationTeam[educationTeam.length - 1])

// Adding to our array using indexes
educationTeam[3] = ["Morgan Walker", "Matt Nolan"]

// Array Methods

/* 
    Methods are functions that live inside of a class or a prototype
    Denoted by the . at the end of an object we're working on
    Ex: educationTeam.length
*/

/* 
    .push()

    Adds an element to the end of an array
    It also returns new length of an array

*/

console.log(educationTeam)
console.log("New Array Length", educationTeam.push(["Benny Boas", "Kate Sweeney"]))
console.log(educationTeam)

/* 
    .pop()

    Removes last array element and returns it.
*/

console.log("This is the object that's been 'popped'", educationTeam.pop())
console.log(educationTeam)

/* 
    .shift()

    Removes the first element from an array
    Returns removed element
*/

console.log("Object that has been shifted out", educationTeam.shift())
console.log(educationTeam)

/* 
    .unshift()

    Adds an element to the beginning of an array
    Returns length of the new array
*/

console.log("New Array Length", educationTeam.unshift(["Paul Niemczyk", "Rob VanArsdall"]))
console.log(educationTeam)