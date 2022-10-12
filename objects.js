// Objects

/* 
    A container for values in JavaScript Object Notation format (JSON)
    * exists as a string
    * has properties and methods
        * .property
        * .method()
    * has .this keyword
*/

// Object Literal Creation

let bentley = {
    // property : value,
    // key : value pairs
    species: "dog",
    color: "cow",
    spayedNeutered: true,
    breed: "olde english bulldog",
    weight: 78,
    favoriteActivity: "farting"
}

// Returns data type of object and our object literal
console.log(typeof bentley, bentley)

// .table() method allows table display of your object data
console.table(bentley)

// Accessing properties and values
// Dot Notation

// Get Bentley's weight
console.log(bentley.weight)

// Viewing object keys
console.log(Object.keys(bentley))

// Viewing object values
console.log(Object.values(bentley))

// .keys() and .values() return a list data type.

// Access values using keys
console.log(bentley["favoriteActivity"])


/* 
    Makeshift example of a database and an incoming object. Matching passwords between db and incoming object.
*/

let userData = {
    username: "mrpndev",
    password: "dbLocal"
}

// console.log(userData.password)

let dbStore = [
    {username: "mrpndev", password: "dbLocal"},
    {username: "jbuffo", password: "disney123"}
]

dbStore.forEach(i => {
    if (userData.password == i.password) {
        console.log(`Hello ${i.username}`)
    }
})

