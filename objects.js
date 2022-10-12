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

// Property & Value Creation

// object mcmChair frame frameFinish cushion upholstery

let mcmChair = {
    frame: null,
    frameFinish: null,
    cushion: false,
    upholstery: null
}

mcmChair.frame = "plywood"
mcmChair["frameFinish"] = "black painted aluminum"

// Property creation
mcmChair.price = [6899, 4750]
mcmChair["forSale"] = false

console.log(mcmChair)

let netflix = {
    id: 9,
    likes: 932,
    name: "The Good Place",
    seasonInfo: {
        season1: {
            numberOfEpisodes: 5,
            episodeInfo: [
                { episode: 1, episodeName: "Pilot"},
                { episode: 2, episodeName: "Flying"},
                { episode: 3, episodeName: "Tahani Al-Jamil"},
                { episode: 4, episodeName: "Jason Mendoza"},
                { episode: 5, episodeName: "Category 55 Emergency"},
            ]
        },
        season2: {
            numberOfEpisodes: 6,
            episodeInfo: [
                { episode: 1, episodeName: "Everything is Great"},
                { episode: 2, episodeName: "Dance Dance Resolution"},
                { episode: 3, episodeName: "Team Cockroach"},
                { episode: 4, episodeName: "Existential Crisis"},
                { episode: 5, episodeName: "The Trolley Problem"},
            ]
        }
    },
    isAvailable: true
}
netflix.seasonInfo.season2.episodeInfo[0].episodeName
// Console log episodeName property of season2 episode 1

// Add a season 3 that looks jsut like seasons 1 & 2

netflix.seasonInfo.season3 = {
    numberOfEpisodes: 5,
}

// Assign a property called totalSeasons to the object with a value of what the total seasons are
netflix.totalSeasons = Object.keys(netflix.seasonInfo).length
// Assign episodeInfo property to season 3 with an array with two episodes

netflix.seasonInfo.season3.episodeInfo = [
    {episode: 1, episodeName: "First Episode"},
    {episode: 2, episodeName: "Second Episode"}
]
console.log(netflix.seasonInfo.season3)

// Delete a property

delete netflix.seasonInfo.season3

console.log(netflix)