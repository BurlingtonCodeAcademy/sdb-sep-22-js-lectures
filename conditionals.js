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

/* 
Challenge:

Create a conditional that will check users age and health status
If they're 17 or younger, they're too young to do anything. But if they're sick, they should see a doctor.
If they're over 18, they can vote. But if they're sick, they should see a doctor before voting
If they're over 21 they can drink. If they're sick, they will not be able to drink
If they're over 25, they can rent a car. If they're sick they should have someone else drive.
If neither of these satisfy, state so.

*/

let age = 28
let health = "healthy"

if ( age <= 17 && health == "sick") {
    console.log("can't do anything")
} else if (age <= 17) {
    console.log("too young")
} else if (age >= 18 && age < 21 && health == "sick") {
    console.log("see an md before voting")
} else if (age < 21) {
    console.log("you can vote!")
} else if (age < 25 && health == "sick") {
    console.log("you're too sick to drink")
} 

// TODO Need a solution around 4PM ET

// ? Ternaries

/* 
    A quick way of creating an if/else conditional.
*/

lightSwitch = "on"

// if (lightSwitch == "on") {
//     console.log("The light is on")
// } else if (lightSwitch == "off") {
//     console.log("the Light is off")
// }

/* 
    Ternary Syntax:

    conditional ? code block if true : code block if false

*/

lightSwitch == "on" ? console.log("The light is on") : console.log("The light is off")


// Chaining Ternaries

season == 1 ? console.log("Spring")
    : season == 2 ? console.log("Summer")
    : season == 3 ? console.log("Fall")
    : season == 4 ? console.log("Winter")
    : console.log("Input is from 1 - 4")

// Assigning the return of this conditional to the variable "result"
let result = lightSwitch ? "This if true" : "This if false"
//           (condition) ? code if true   :  code if false

console.log(result)

// ? TERNARY CHALLENGE

// Take this if/else statement and make it into a ternary.

let lampOn = false;
let daytime = true;

// if (lampOn == true && daytime != true) {
//   console.log("The lamp is on during the night");
// } else if (lampOn != true && daytime != true) {
//   console.log("The lamp is off during the night");
// } else if (lampOn == true && daytime == true) {
//   console.log("The lamp is on during the day");
// } else if (lampOn != true && daytime == true) {
//   console.log("The lamp is off during the day");
// } else {
//   console.log("What lamp?");
// }

lampOn && !daytime
    ? console.log("Lamp on during the night")
    : !lampOn && !daytime
    ? console.log("The lamp is off during the night") 
    : lampOn && daytime
    ? console.log("The lamp is on during the day")
    : !lampOn && daytime
    ? console.log("The lamp is off during the day")
    : null

// ? Switch Statements

/* 
    Switches execute a block of code dependendent upon a different case.

    We ask a question that requires a specific response determined by our answer.
*/

let uprightInstructor = "Benny"

// Information that may change depending
switch(uprightInstructor) {
    // condition on which code after : will execute
    case "Paul":
        console.log(`${uprightInstructor} is a Lead SD Instructor`)
        // break is used to stop other cases from evaluating
        break
    case "Rob":
        console.log(`${uprightInstructor} is a Lead SD Instructor`)
        break
    case "Matt":
        console.log(`${uprightInstructor} left me for CS and I'm still salty`)
        break
    default:
        console.log(`${uprightInstructor} may or may not be working for Upright`)
}

// ? SWITCH CHALLENGE

/*
Create a 'grade' variable that holds a string value of 'A,B,C,D or F.
Create a switch statement that passes that variable to check.  Depending on the grade, console log a string result that indicates what they need (ex: A = 'Passed!', F = 'Failing', etc.).
*/

let grade = 89

switch(true) {
    case grade > 89:
        console.log("You got an A")
        break;
    case grade > 79:
        console.log("You got a B")
        break;
    case grade > 66:
        console.log("Passing with C")
        break;
    case grade > 59:
        console.log("passing with D")
        break;
    case grade < 59:
        console.log("Failing")
        break;
    default:
        console.log("Input is not a grade")
}

// Replit Hello Frenemy

function respond(name) {
    name = name.toLowerCase()
    let fName = name.split(" ")[0]
    let lName = name.split(" ")[1]
    let fName2 = fName[0].toUpperCase() + fName.slice(1)
    let lName2 = lName[0].toUpperCase() + lName.slice(1)

    if (name == "luke skywalker") {
        console.log(`Hello ${fName2}, ${lName2} my friend`)
    } else {
      console.log(`Be gone you villain! ${name}`)
    }
  }
  
  respond('DARTH vader');
  // should print 'Noooooo! That's impossible!'
  respond('lex luthor');
  // should print 'Be gone, you villian!!!'
  respond('luke skywalker');
  // should print 'Hello luke skywalker, you are a wonderful friend!'