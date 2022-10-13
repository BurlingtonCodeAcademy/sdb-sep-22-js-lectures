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