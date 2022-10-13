// ? Classes

/* 
    Templates or blueprints for creating objects.

    They encapsulate data with code. JS is a prototype-based langauge that also has access to OOP principles.

    Classes are considered special functions and therefore can be defined as:
        * Class declaration
        * Class expression
*/

// Class Declaration

class Teacher {
    // Method used to create and initialize an object
    // See objects.js ln 207 to compare to prototype function
    constructor(name, subject, tenure, isPolyglot) {
        this.name = name
        this.subject = subject
        this.tenure = tenure
        this.isPolyglot = isPolyglot
    }

}

// Create a new instance of a Teacher class

let paul = new Teacher("Paul Niemczyk", "Software Dev", 2.5, true)
// Create a new instance of Teacher class using "new" operator
// Create an object that is a copy of Teacher class with our defined constructors.

console.log(paul)

// Class Expression

let House = class {
    constructor(address, bedrooms, bathrooms) {
        this.address = address
        this.bedrooms = bedrooms
        this.bathrooms = bathrooms
    }
}

let $1007OrangeSt = new House("1007 Orange St", null, 2)

console.log($1007OrangeSt)

// Class Methods

/* 
    Method is a function that lives inside of a class that can be reused on any class instance.
*/

class Car {
    constructor(make, model, year, transmission) {
        if (typeof make === "string" && typeof model === "string" && typeof transmission === "string") {
            this.make = make
            this.model = model
            this.year = year
             this.transmission = transmission
        } else {
            throw new Error("Constructor is not a string")
        }
    }

    // Class method
    greetDriver(driver) {
        return `Hello, ${driver}, your ${this.make} is looking awesome!`
    }
}

// Instantiate an object from the Car class
let maserati = new Car("Maserati", "GranTurismo S", 2015, "auto")
console.log(maserati)

// We use Car.greetDriver() method on our instance of a Car class object
console.log(maserati.greetDriver("Justin"))

