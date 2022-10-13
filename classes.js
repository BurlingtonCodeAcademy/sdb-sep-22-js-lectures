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

/* 
    Create a class object called Avnegers. It will have properties of name, superpower, age, isDead, keyMovie

    Create an instance of that object with the superhero name and its properties

    ? Create a method that console logs the name and keyMovie together

    ! SPICEY MODE

    Create a method that takes the name of the superhero and checks it against two arrays: one with teamCap and one with teamStark and returns which team the superhero is on as part of Civil War
*/

class Avengers {
    constructor(name, superpower, age, isDead, keyMovie) {
        this.name = name
        this.superpower = superpower
        this.age = age
        this.isDead = isDead
        this.keyMovie = keyMovie
    }

    introduction(person) {
        return `Hello ${person}. I'm ${this.name} and my key movie is ${this.keyMovie}`
    }

    whichTeam() {
        let teamCap = ["Steve Rogers", "Captain America", "Bucky", "Wanda", "Hawkeye", "Ant Man"]
        let teamStark = ["Tony Stark", "Vision", "War Machine", "Black Panther", "Black Widow", "Natasha Romanoff"]

        if (teamCap.includes(this.name)) {
            return `${this.name} is Team Captain`
        } else if (teamStark.includes(this.name)) {
            return `${this.name} is Team Stark`
        } else {
            return `${this.name} is not in either of our arrays`
        }
    }
}

let ironMan = new Avengers("Tony Stark", "smart & rich", 40, true, "Iron Man")

console.log(ironMan.whichTeam())

// Factory Functions

/* 
    Function that accepts data and returns new instance of a Class
*/

class Circle {
    constructor(radius) {
        if (typeof radius == "number") {
            this.radius = radius
        } else {
            throw new Error("Radius must be a number")
        }
    }
    
    circumference() {
        return (2 * Math.PI * this.radius).toFixed(2)
    }
    
    area() {
        return (this.radius ** 2 * Math.PI).toFixed(2)
    }
}

function circleFromDiameter(diameter) {
    return new Circle(diameter / 2)
}

let myCircle = circleFromDiameter(15)
console.log(myCircle.circumference())
console.log(myCircle.area())

console.log(myCircle)

// Static Factory Methods

/* 
Do not require instantiation with a new operator
*/

class CircleStaticFactoryFx {
    static createCircleUsingDiameter(diameter) {
        return new CircleStaticFactoryFx(diameter / 2)
    }
    
    constructor(radius) {
        if (typeof radius == "number") {
            this.radius = radius
        } else {
            throw new Error("Radius must be a number")
        }
    }
}

let diaCircle = CircleStaticFactoryFx.createCircleUsingDiameter(20)

console.log(diaCircle)

// Inheritance

/* 
    Extends a parent class with a child class
*/

class CarOptions extends Car {
    constructor(
        make,
        model,
        year,
        transmission,
        hasLeather,
        hasComfortPackage,
        hasSportPackage
    ) {
        // allows us access to properties and methods of a parent class
        super(make, model, year, transmission)
        this.hasLeather = hasLeather
        this.hasComfortPackage = hasComfortPackage
        this.hasSportPackage = hasSportPackage
    }

    isCPO(currentYear) {
        let result = currentYear - this.year
        return result >= 6
            ? `Your ${this.model} is out of warranty`
            : `Your warranty is still active`
    }
}

let porsche911 = new CarOptions("Porsche", "911", 2017, "PDK", true, false, true)

console.log(porsche911.isCPO())