// ? Conditionals

let ourVariable;
// console.log(ourVariable)

let bestFriendName = null

// ? Falsey Values

/* 
    False value is one that is considered false in Boolean context

    Whenever JS expects a false Boolean it can return one of these six values:

    * false
    * 0
    * "", '', ``
    * undefined
    * null
    * NaN
*/

/* 
    ? If Statement

    We can utilize comparison operators to check if something is true.
*/

let lightSwitch = "on";

if (lightSwitch == "on") {
    console.log("The light is on")
}

// Conditional () always checks if the value or expression within is truthy.
// If it's truthy, the code in {} will execute. Else, it will skip it.

/* 
    ? Else If Statement

    Allows us to add additional condition if the prior one has not been satisifed.
*/

let temp = 50

if (temp <= 32) {
    console.log("Freezing")
}
// else if (temp) {
//     console.log("Logic Error: temp == true; it stops ln 52 from executing")
// }
else if (temp <= 50) {
    console.log("Fall weather")
}
else if (temp < 60) {
    console.log("Spring weather")
}
console.log("After conditional")

/* 
    ? Else Statement
    If all else fails, execute this code.
*/

let season = "1";

if (season === 1) {
    console.log("It's spring")
}
else if (season === 2) {
    console.log("It's summer")
}
else if (season === 3) {
    console.log("It's fall")
}
else if (season === 4) {
    console.log("It's winter")
}
else {
    console.log("Supplied value is not one of required ones.")
}

/* 
    ? SYNTAX:

    if (conditionalIsTrue) {
        execute this code block
    }

*/

/* 
    ? Logical Operators NOT AND OR
    * OR Operator (||)
        * true if one of the conditions is true
    * AND Operator (&&)
        * true if both conditions are true
    * NOT Operator (!)
        * flips the logical operation

*/

season = 1

// ? OR Operator

// if (season === 1 || season === "spring") {
//     console.log("It's spring. Wear a light jacket.")
// }
// else if (season === 2 || season === "summer") {
//     console.log("It's summer. Shorts and a tshirt.")
// }
// else if (season === 3 || season === "fall") {
//     console.log("It's fall. Back to jeans.")
// }
// else if (season === 4 || season === "winter") {
//     console.log("Down jacket mode.")
// }

// ? AND Operator

temp = 65
console.log(season, temp)
if (season === "spring" || season === 1 && temp >= 65) {
    console.log("A nice spring day.")
}
else if (season === "spring" && temp < 65) {
    console.log("It's a chilly spring")
}

// ? NOT Operator

console.log(typeof lightSwitch, lightSwitch, Boolean(lightSwitch))

// if (lightSwitch) {
//     console.log("lightSwitch variable has something truthy in it")
// }

lightSwitch = ""
console.log(typeof lightSwitch, lightSwitch, Boolean(lightSwitch))

// if lightSwitch is not equal to true
// another way to write it
// if (!lightSwitch)
// if lightSwitch is not true
// equivalent of false evaluating to true

if (lightSwitch != true) {
    console.log("Light switch has falsey value")
}