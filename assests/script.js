// use Object methods to enter R, P, or S

// JS Object name is game
const game = {
    Rock: "R",
    Paper: "P",
    Scissors: "S",
    computerResponse: function(){
        window.prompt("Enter R, P, or S!");
    },
    userResponse: function() {
        window.prompt("Enter R, P, or S!")
    }
};

// Assist from TA Paul
function gameRules()  {
    let userChoice = game.userResponse();
    let compChoice = game.computerResponse();
    if (userChoice === compChoice) {
        alert("Tie!");
    } 
    else if ((userChoice === "R" && compChoice === "S") 
    || (userChoice === "S" && compChoice === "P") 
    || (userChoice === "R" && compChoice === "S")) {
        alert("User Wins!");
    }
    else {
        alert("Computer Wins!");
    }
    let playAgain = window.prompt("Would you like to play again");
    if (playAgain) {
        gameRules() 
    }
    else {
        alert("Have a good day!");
    }
};

console.log(game.userResponse);


// works but don't know why for infinite iterative loop
// for (i=0; i < game.length; i++ ) {

// if (game.userResponse() === "R") {
//     alert("Rock");
// } else if (game.userResponse() === "P"){
//     alert("Paper");
// } else if (game.userResponse() === "S") {
//     alert("Scissors");
// };

// if (window.confirm("Are you done playing?")) {
//     window.open("exit.html");
// }

// };

// allows for "game loop" concept where undefined i value in for loop so infinite looping!
do {
    gameRules();
}

while(confirm("Would you like to play again?"))