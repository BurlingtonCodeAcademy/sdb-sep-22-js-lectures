// Array Destructuring

/* 
    An ability for a developer to pull the data out of one array and insert it into another array or variables.
*/

let beers = ["Stiegl Radler", "Gumballhead", "Gaffel Kolsch", "Chouffe"]

// let austrianBeer = beers[0]
// let indianaBeer = beers[1]
// let germanBeer = beers[2]

// let [ austrianBeer, indianaBeer, germanBeer ] = beers

// console.log(austrianBeer, indianaBeer, germanBeer)

// let allBeers = [beers]
// console.log(allBeers) // Bad it nests an array

// let allBeers = beers.map(i => i)
// console.log(allBeers) // Pretty good. No more nesting. Its time complexity can become large

// TODO: discuss/research pass by value vs pass by reference

// Spread Operator

/* 
    Extrapolates all elements from an array to a brand new array
    Must be unpacked into a new array.
*/

let allBeers = [...beers]

console.log(allBeers)

allBeers.push("Bud Light")
console.log(allBeers, beers)

let wines = ["Riesling", "Cabernet Sauvignion", "Beaoujolais", "Chianti"]

let allLiquor = [...beers, ...wines]
console.log(allLiquor)

// Rest Operator

let germanCars = ["BMW", "Mercedes Benz", "Audi", "Opel", ["Wartburg", "Porsche"]]
let allCars = ["Maserati", "Ferrari", "Yugo", ...germanCars]
console.log(allCars)

let [ unreliable, ritzy, cement, performance, nice, trash, ...rest ] = allCars

console.log(unreliable, ritzy, cement, performance, nice, trash)
console.log(rest)

function addNums(x, y, ...otherNums) {
    // other nums becomes an array of infinite additional arguments
    console.log(x, y, otherNums)
    console.log(x, y, ...otherNums)
}
console.log(addNums(5, 7, 9, 12, 14, 22, 122))

// Challenge

/* 
    Create an array with a list of states that you've visited

    Unpack your favorite states into their individual variables.

    Unpack the remainder into a "meh" array
*/

let statesVisited = ["Michigan", "Illinois", "Indiana", "Florida", "Georgia", "Oklahoma", "Wisconsin", "Missouri", "Tennessee", "New York", "Ohio", "Pennsylvania"]

let [ michigan, illinois,, florida,,, wisconsin,, tennessee, ...remainder] = statesVisited

console.log(michigan, illinois, florida, wisconsin, tennessee, remainder)