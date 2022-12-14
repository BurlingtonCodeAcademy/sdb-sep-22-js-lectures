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

// Fibonacci Stack Walkthru

// start no; stop no; (current number + prior no) repeated
// 0, 1, 1, 2, 3, 5, 8....

let series = [0, 1]


function start(x, y) {
    series[0] = x
    series[1] = y
}

start(3, 5)

function fib(length) {

    if (typeof length !== "number") {
        console.log("Please enter a number")
    } else {
        while (series.length < length) {
            let secondValue = series.pop()
            let firstValue = series.pop()
            let sum = firstValue + secondValue
            series.push(firstValue, secondValue, sum)
            
            // Oneline solution with no variables
            // series.push(series[series.length - 2] + series[series.length - 1])
        }
        console.log(series)
    }

}

fib(100)

// Advanced Array Methods

// Arrays are iterable

for (i of series) {
    console.log(i)
}

let bulldogTypes = ["English Bulldog", "Victorian Bulldog", "Old English Bulldog", "Bullmastiff", "French Bulldog"]

/* 
    .forEach()

    Fires a callback function on each element in the array
*/

bulldogTypes.forEach((arrayElement, elementIndex) => console.log(arrayElement, elementIndex))

// ! ^^ same as below ...

// function callbackFx(arrayElement, elementIndex) {
//     console.log(arrayElement, elementIndex)
// }

// bulldogTypes.forEach(callbackFx)

/* 
    .map()

    Creates an array with elements resulting from the callback function.
*/


let bulldogUpperCase = bulldogTypes.map(i => i.toUpperCase())


// ! ^^ same as below with forEach ...

// let bulldogUpperCase = []
// bulldogTypes.forEach((i) => {
//     bulldogUpperCase.push(i.toUpperCase())
// })

console.log(bulldogUpperCase)

/* 
    .filter()

    Creates a new array based on the filter function
*/

let marvelCharacters = ["Captain America", "Black Widow", "Doctor Strange", "Ant Man", "Spider Man", "Angelina Jolie"]

let startsA = marvelCharacters.filter(i => i.startsWith("A"))

console.log(startsA)

// Mini Challenge

let grades = [56, 78, 96, 41, 7, 22, 15, 10, 89]

// Explore a way to utilize one of the array methods to raise the grade by 15 points for everyone
// Those above 90 should not get any points.
// Hint reassignment needs to happen on an original array

grades.forEach((item, index, myArr) => myArr[index] > 90 ? null : myArr[index] = item + 15)
console.log(grades)

let newGrades = grades.map(i => i <= 90 ? i + 15 : i)
console.log(newGrades)

let arrr = ["red", "white", 2, "purple"]

console.log(arrr.pop(), arrr)