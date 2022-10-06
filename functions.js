// ? Functions

/* 
    A block of reusable code that can take in parameters, perform an action, and return the result.

    There are two types of functions:
        * function declaration
            * are hoisted
        * function expression
            * are not hoisted
    
    Functions have a default return statement of undefined unless otherwise specified.

    ! There can only be one return statement value

    Parameters are doors that allow data inside of the function.

    Syntax:

    function (parameters, parameters, ...) {
        function's code block to be executed
        return statement
    }
*/

function sayHello() {
    return "Hello September Cohort"
}

// Functions will lay dormant until invoked (called)
console.log(sayHello())

// Functions can have no parameters or many parameters
// Parameters act as doors for arguments to be let inside the function
function addNums(num1, num2) {
    let greet = "Hello"
    console.log(num1, num2)
    return num1 + num2
}

console.log(addNums(5, 7))

// Function Expression

/* 
    Utilizes a variable as a placeholder

    Syntax:

    let identifier = function(params_if_any) {
        code block
        return statement
    }

*/

let generateEmail = function(email, victimName, title, signature) {
    return `To: ${email} \n
            Title: ${title} \n
            Hello Mr/Mrs. ${victimName}. \n
            We've been trying to reach you about your car's \n
            extended warranty. \n
            Sincerely, ${signature}`
}

console.log(generateEmail("ben@villa.com", "Ben", "TA", "Paul"))

// Arrow Functions

/* 
    Introduced in ES6
    Concise way fo writing functions
    Part of fx expression family
    Do not bind to .this or super (more on that in Classes)
*/

// Concise Body Arrow Functions
// Can only have no or one parameter
// Code block must not have {}
// Return statement must be implicit

let greetPerson = () => console.log("Hello Person")
greetPerson()

let greetIndividual = name => console.log(`Hello, ${name}`)
greetIndividual("Paul")

// Block Body Arrow Functions

let concatenateString = (str1, str2) => {
    if (typeof str1 == "string" && typeof str2 == "string") {
        return str1 + str2    
    } else {
        return "You can only pass strings as arguments"
    }
}

console.log(concatenateString(122, "Niemczyk"));

// Immediately Invoked Function Expression

(function() {
    console.log("IIFE")
})()

// Capitalize Lab Review

function capitalize(string) {
    // let firstLetter = string[0].toUpperCase()
    let firstLetter = string.slice(0,1).toUpperCase()
    let restOfWord = string.slice(1).toLowerCase()
    // let fullWord = firstLetter + restOfWord
    // return fullWord
    return firstLetter + restOfWord
}

console.log(capitalize("LKJDFLDKSJFSLKJ"))

// Divisible Lab Review

let divisible = (dividend, divisor) => {
    // let remainder = dividend % divisor

    // return remainder == 0 ? true : false
    // return dividend % divisor == 0 ? true : false
    return !(dividend % divisor) ? true : false
}

console.log(divisible(15, 5))