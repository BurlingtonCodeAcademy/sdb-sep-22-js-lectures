// utilizing require method to import readline module and assign to readline variable
const readline = require('readline');

// interface allows us to give us a use of a tool
// this createInterface method maps stdin and stdout for us to use 
const readlineInterface = readline.createInterface(
  process.stdin,
  process.stdout
);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    readlineInterface.question(questionText, resolve);
    // we use rl interface's question method to display text to the user
    // we resolve our promise once we get a response
  });
}

let enemyList = ['darth vader', 'voldemort', 'palatine', 'lex luthor'];

async function respond() {
    // we asign resolved promise from ask fx to the input variable
    let input = await ask("What is your name?")
    
    input = input.trim().toLowerCase()

    if (enemyList.includes(input)) {
        if (input == enemyList[0]) {
            console.log("Nooo that's impossible.")
        } else {
            console.log(`${input} you're my enemy. Get away!`)
        }
    } else {
        console.log(`Welcome, ${input}`)
    }
    readlineInterface.close()
}
respond();