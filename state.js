// State Machines

/*  
    Allows us to associate strings with a list of other values

    Quick and efficient
*/

let states = {
    il: "Illinois",
    vt: "Vermont",
    in: "Indiana",
}

console.log(states.il)

function getPoemTitle(authorUserSelect) {
    let poemTitlesByAuthor = {
        "Robert Frost": "Stopping by Woods on Snowy Evening",
        "Shell Silverstein": "Falling Up",
        "Sylvia Plath": ["The Bell Jar", "Daddy", "Lady Lazarus"]
    }

    return poemTitlesByAuthor[authorUserSelect]
}

console.log(getPoemTitle("Sylvia Plath"))

let musicianList = (musician) => {
    let list = {
        "Illenium": ["Gold", "God Damnit", "Lost"],
        "ATB": "Ecstasy",
        "Felix Jaehn": "Call it Love"
    }

    return list[musician]
}

console.log(musicianList("Illenium"))

// State Machines

/* 
    System with finite and defined states.
    States are just information
    The info is reliant upon logic in order to transition or be reassigned
*/

let state = {
    red: ["green", "yield"],
    yellow: ["red"],
    green: ["yellow"],
    yield: ["red"]
}

// let currentState = "green"

// function enterState(newState) {
//     // assigns values of state property that matches current state
//     let validTransitions = state[currentState]
//     // if newState is found in validTransitions
//     if (validTransitions.includes(newState)) {
//         // change the light
//         currentState = newState
//         console.log(currentState)
//     } else {
//         throw new Error(`Invalid state transition from ${currentState} to ${newState}`)
//     }
// }

// enterState("red")

module.exports = states