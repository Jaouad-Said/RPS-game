let compScore = 0;
let userScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scorBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const paper_div = document.getElementById("p");
const rock_div = document.getElementById("r");
const scissors_div = document.getElementById("s");

function getCompChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = (Math.floor(Math.random() * 3));
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors"
}

function win(userChoice, compChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice1 = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} ghelbat ${convertToWord(compChoice)}${smallCompWord} . Hadik Hadik`;
    userChoice1.classList.add('green');
    setTimeout(() => userChoice1.classList.remove('green'), 500)
}

function lose(userChoice, compChoice) {
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice1 = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} Ghelbat ${convertToWord(compChoice)}${smallCompWord} . Maderti Ta weza`
    userChoice1.classList.add('red');
    setTimeout(() => userChoice1.classList.remove('red'), 500)
}

function draw(userChoice, compChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice1 = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} Ghelbat ${convertToWord(compChoice)}${smallCompWord} . Ta3adooool`
    userChoice1.classList.add('grey');
    setTimeout(() => userChoice1.classList.remove('grey'), 500)
}

function game(userChoice) {
    const compChoice = getCompChoice();
    switch (userChoice + compChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, compChoice);
            break;
    
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, compChoice);
            break;
        
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, compChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', function () {
        game("r");
    })

    paper_div.addEventListener('click', function () {
        game("p");
    })

    scissors_div.addEventListener('click', function () {
        game("s");
    })
}

main();
