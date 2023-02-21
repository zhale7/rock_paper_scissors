// DOM elements for future use
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
// Functions
function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
    return "Scissors";
}

function win(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}(user) beats ${convertToWord(computerChoice)}(comp). You win!`;
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 300);
}

function lose(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice);
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}(user) loses to ${convertToWord(computerChoice)}(comp). You lost...`;
    userChoice_div.classList.add("red-glow");
    setTimeout(() => userChoice_div.classList.remove("red-glow"), 300);
}

function draw(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord(userChoice)}(user) equals to ${convertToWord(computerChoice)}(comp). It's a draw.`;
    userChoice_div.classList.add("gray-glow");
    setTimeout(() => userChoice_div.classList.remove("gray-glow"), 300);
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    // console.log("computer-choice: ", computerChoice);
    // console.log("user-choice: ", userChoice);
    
    if(userChoice === "r" && computerChoice === "s" ||
        userChoice === "s" && computerChoice === "p" ||
        userChoice === "p" && computerChoice === "r") {
            win(userChoice, computerChoice);
    } else if(userChoice === "s" && computerChoice === "r" ||
        userChoice === "p" && computerChoice === "s" ||
        userChoice === "r" && computerChoice === "p") {
            lose(userChoice, computerChoice);
    } else {
            draw(userChoice, computerChoice);
    }
}

function main() {
    rock_div.addEventListener("click", () => game("r"));
    paper_div.addEventListener("click", () => game("p"));
    scissors_div.addEventListener("click", () => game("s"));
}

main();




