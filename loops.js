// ? Loops

/* 
    Allow us to execute a block of code repeatedly until an exit condition has been met.
*/

// ? For loop

/* 
    We set our loop in a way where we can:
        * see where we are in a loop
        * consider the condition we run it against
        * note when we are done with the condition
*/

for (let i = 0; i <= 10; i++) {
    console.log(i)
}

/* 
    ? Loop Syntax

    for (start; stop; step) {
        code block to execute over each iteration
    }

*/

// Infinite Loop

/* 
    A lack of stop condition causes our loop to never cease.
*/

// for (let i = 0; ;i++) {
//     console.log(i)
// }
let longWord = "supercalifragilisticecpialidocious"

for (i = 0; i < longWord.length; i++) {
    console.log(longWord[i])
}

let longWordDE = "kraftfahrzeug-haftplifchtversicherung"

// ? for-in loop

/* 
    Allow us to seek an index value of an iterable against a condition. For in loops don't require an index number.

    Syntax

    for (item in iterable) {
        code block to execute
    }

*/
for (i in longWordDE) {
    console.log(i)
}

// i is a placeholder for information at the time of execution

// ? for-of loop

let longWordPL = "konstantynopolitanczykowianeczka"

for (i of longWordPL) {
    console.log(i)
}

/* 
Difference between for-in and for-of in terms of use?
* For-of only works if an item is indexed like an array or a str
* For-in allows us to loop over items that are not an array (ex: object)
*/

console.log("-------LOOK HERE---------")

// Challenge 1

/* 
    Using a traditional for loop, set an index to 2. Make a condition where if that number is greater than -10, change that index by substracting 4 and conosle.log each iteration.
*/

for (let i = 2; i > -10; i -= 4) {
    console.log(i)
}
let animalArray = ["pig", "cat", "mouse", "dog", "bird"]

// Challenge

/* 
    Loop over the array with a non-traditional array. Console log each animal's respective "sound". (ex: meow for a cat)
*/

for (animal of animalArray) {
    // animal === "mouse" ? console.log("squeak")
    // : animal === "cat" ? console.log("meow")
    // : animal === "dog" ? console.log("woof")
    // : animal === "bird" ? console.log("jaaaayyy")
    // : animal === "pig" ? console.log("yummy bacon")
    // : null
    
    if (animal === "mouse") {
        console.log(`${animal} says squeak`)
    } else if (animal === "cat") {
        console.log(`${animal} says meow`)
    } else if (animal === "dog") {
        console.log(`${animal} says woof`)
    } else if (animal === "bird") {
        console.log(`${animal} says jaaaay`)
    } else if (animal === "pig") {
        console.log(`${animal} says yummy bacon`)
    }
}

// Challenge

/* 
    Declare a name variable that will take a name.
    Declare a sanitizedName variable that will hold the new name.
    Use a for in loop that will capitalize the first letter.
    It needs to also lowercase any subsequent letter.
*/

// ? While loops

/* 
    Executes a statement inside of a code block provided that the while condition continues to evaluate to true.
    The condition is evaluated before executing the statement.

    Syntax

    while (true) {
        code block executed until while(false)
    }
*/

let num = 100

while (num >= 0) {
    console.log(num)
    num = num - 1
}

// How to use while to iterate over an iterable

let j = 0;

while(j < animalArray.length) {
    console.log(animalArray[j])
    j++
}

// ? Do While

/* 
    Executes code in the do section while a condition remains true
*/

let k = 0

do {
    console.log(animalArray[k])
    k++
} while (k < animalArray.length)

// Potato Poem Solution

function potatoPoemWhile() {
    let count = 0
    while (count < 8) {
        count = count + 1
        // if (count == 8) {
        //     console.log("More!")
        // } else if (count == 4) {
        //     console.log(`${count}!`)
        // } else {
        //     console.log(`${count} potato!`)
        // }

        count == 8 ? console.log("More!")
            : count == 4 ? console.log(`${count}!`)
            : console.log(`${count} potato!`)
        }
    }
    
function potatoPoemFor() {

    for (let count = 0; count < 100; count++) {
        count == 8 ? console.log("More!")
            : count == 4 ? console.log(`${count}!`)
            : console.log(`${count} potato!`)
    }
        
}

potatoPoemFor()