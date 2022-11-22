// ? Scope & Hoisting

/* 
    Scope is used to determine how information in different blocks of code can be accessed.

    Five types of scope:
        * Global/Window
        * Block
        * Function
        * Module
        * Lexical
*/

// Global Scope

/* 
    Outermost scope. Window object when we're talking about client (browser). JS file when using Node.js

    Accessible from every other scope
*/

let globalScopeVar = "This is a global scope variable"

// Function Scope

/* 
    Accessible only inside of the function
*/

function scope() {
    let fxsv = "This is a variable inside of a function scope"
    console.log(fxsv)
}

scope()

// console.log(fxsv) // ReferenceError fxsv is encapsulated in fx scope

// Block Scope

/* 
    Can be anywhere there are { }

    Can be put anywhere
*/

{
    let bsv = "Block scope variable"
    console.log(bsv)
}

// console.log(bsv) // Reference Error bsv inside block scope

// Lexical Scope

/* 
    Variables are accessible by the position of them nested within the functions cope.

    Inner fx scope can access outer fx scope
*/

function outerFx() {
    // outer scope
    let ofxv = "Outer fx scope variable"

    function innerFx() {
        // inner scope
        console.log(ofxv)
    }

    return innerFx()
}

outerFx()

// Module Scope

/* 
    Module scope encapsulates objects nested inside of other modules or files and allows us to use them in other files.
*/

const states = require("./state")

// console.log(states)

// Hoisting

/* 
    JavaScript's parsing engine reads top to bottom and left to right. It then interprets the code.

    JS interprer runs the code twice. First, it looks for any VARiable and function declaration and hoists them, aka provided memory space allocation. This is done on the declaration side ONLY.
*/

// console.log(myName) // ReferenceError the declaration doesn't exist yet
let myName = "Paul Niemczyk"
console.log(myName)

console.log(student)
var student = "Rene Gombar"

displayName()
function displayName() {
    console.log("Hello name")
}

// fxExpression() // ReferenceError - only fx declarations are hoisted
let fxExpression = function () {
    console.log("Function expression")
}
fxExpression()

function run() {
    var foo = "foo"
    let bar = "bar"
    // console.log(foo, bar)
    {
        var moo = "mooo"
        let baz = "baz"
        // console.log(moo, baz)
        {
            {
                {
                    var deepIn = "Really nested!"
                }
            }
        }
    }
    // console.log(baz) // ReferenceError accessing block from function scope
    console.log(moo)
    console.log(deepIn) // works because the console log is still within deepIn's scope (function scope)
}
// console.log(moo) // ReferenceError - moo scoped to IMMEDIATE function which is moo {}

run()

{
    {
        var something = "Something"
    }
}

console.log(something) // This works because global scope is A FUNCTION!

// ! THIS IS BAD!!!! DON'T USE HOISTING TO YOUR "BENEFIT"

/* 
    JS Objects NOT hoisted
    - let
    - const
    - fx expressions
    ! - classes (both declaration and expression)
*/