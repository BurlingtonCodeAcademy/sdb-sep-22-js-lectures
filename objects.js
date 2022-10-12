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

// Class GPA Review

let grades = {
    midterm: {grade: 3.3, weight: 1},
    project: {grade: 4.0, weight: 1},
    final: {grade: 3.2, weight: 2}
}

function gpa(object) {
    let gradesToWeight = Object.keys(object)
    let gradeSum = 0, weightSum = 0
    gradesToWeight.forEach(key => {
        gradeSum += object[key].grade * object[key].weight
        weightSum += grades[key].weight
    })
    return gradeSum / weightSum
    
}
    
console.log(`The final GPA is ${gpa(grades)}`)

// Object Methods

let name = "Not Bentley"
let dog = {
    name: "Bentley",
    color: "cow",
    sex: "female",

    speak(breed) {
        return `Woof! I'm ${this.name} and I'm an ${breed}`
    },

    sit: function() {
        return "Sat down"
    },


    // ! Do not use! No binding to .this
    beQuiet: () => {
        // returns undefined; not bound to this scope
        return `${this.name} is now quiet`
    }
}

console.log(dog.speak("Olde Enlgish Bulldog"))

console.log(dog.sit())

console.log(dog.beQuiet())

// Adding methods to the object post-creation

dog.layDown = function() {
    return `${this.name} laid down`
}

console.log(dog.layDown())

// Introduction to Prototyping

// Create a object constructor function

function Cat(name, color, sex) {
    this.name = name
    this.color = color
    this.sex = sex
}

Cat.prototype.meow = function() {
    return `${this.name} meow!`
}

let pippi = new Cat("Pippi", "gray and black", "female")

console.log(pippi.meow())

const presidents = [
    { first: 'George', last: 'Washington', year: 1732, passed: 1799 },
    { first: 'John', last: 'Adams', year: 1735, passed: 1826 },
    { first: 'Thomas', last: 'Jefferson', year: 1743, passed: 1826 },
    { first: 'James', last: 'Madison', year: 1751, passed: 1836 },
    { first: 'James', last: 'Monroe', year: 1758, passed: 1831 },
    { first: 'John', last: 'Adams', year: 1767, passed: 1848 },
    { first: 'Andrew', last: 'Jackson', year: 1767, passed: 1845 },
    { first: 'Martin', last: 'Van Buren', year: 1782, passed: 1862 },
    { first: 'William', last: 'Harrison', year: 1773, passed: 1841 },
    { first: 'John', last: 'Tyler', year: 1790, passed: 1862 },
    { first: 'James', last: 'Polk', year: 1795, passed: 1849 },
    { first: 'Zachary', last: 'Taylor', year: 1784, passed: 1850 },
    { first: 'Millard', last: 'Fillmore', year: 1800, passed: 1874 },
    { first: 'Franklin', last: 'Pierce', year: 1804, passed: 1869 },
    { first: 'James', last: 'Buchanan', year: 1791, passed: 1868 },
    { first: 'Abraham', last: 'Lincoln', year: 1809, passed: 1865 },
    { first: 'Andrew', last: 'Johnson', year: 1808, passed: 1875 },
    { first: 'Ulysses', last: 'Grant', year: 1822, passed: 1885 },
    { first: 'Rutherford', last: 'Hayes', year: 1822, passed: 1893 },
    { first: 'James', last: 'Garfield', year: 1831, passed: 1881 },
    { first: 'Chester', last: 'Arthur', year: 1829, passed: 1886 },
    { first: 'Grover', last: 'Cleveland', year: 1837, passed: 1908 },
    { first: 'Benjamin', last: 'Harrison', year: 1833, passed: 1901 },
    { first: 'William', last: 'McKinley', year: 1843, passed: 1901 },
    { first: 'Theodore', last: 'Roosevelt', year: 1858, passed: 1919 },
    { first: 'William', last: 'Taft', year: 1857, passed: 1930 },
    { first: 'Woodrow', last: 'Wilson', year: 1856, passed: 1924 },
    { first: 'Warren', last: 'Harding', year: 1865, passed: 1923 },
    { first: 'Calvin', last: 'Coolidge', year: 1872, passed: 1933 },
    { first: 'Herbert', last: 'Hoover', year: 1874, passed: 1964 },
    { first: 'Franklin', last: 'Roosevelt', year: 1882, passed: 1945 },
    { first: 'Harry', last: 'Truman', year: 1884, passed: 1972 },
    { first: 'Dwight', last: 'Eisenhower', year: 1890, passed: 1969 },
    { first: 'John', last: 'Kennedy', year: 1917, passed: 1963 },
    { first: 'Lyndon', last: 'Johnson', year: 1908, passed: 1973 },
    { first: 'Richard', last: 'Nixon', year: 1913, passed: 1994 },
    { first: 'Gerald', last: 'Ford', year: 1913, passed: 2006 },
    { first: 'Jimmy', last: 'Carter', year: 1924, passed: undefined },
    { first: 'Ronald', last: 'Reagan', year: 1911, passed: 2004 },
    { first: 'George', last: 'Bush', year: 1924, passed: 2018 },
    { first: 'Bill', last: 'Clinton', year: 1946, passed: undefined },
    { first: 'George', last: 'Bush', year: 1946, passed: undefined },
    { first: 'Barack', last: 'Obama', year: 1961, passed: undefined },
    { first: 'Donald', last: 'Trump', year: 1946, passed: undefined },
    { first: 'Joseph', last: 'Biden', year: 1942, passed: undefined },
];

// Utilize a filter method to create a new array with presidents who were born after the 1900's

// Utilizing your new filtered array, use forEach to print a string interpolated names of hte presidents.