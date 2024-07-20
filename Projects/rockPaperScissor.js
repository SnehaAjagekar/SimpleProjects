let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#computer-score");

const genCompChoice = () => {
    const options = ["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}
const drawGame = () => {
    msg.innerText = "Game was Draw. play again";
    msg.style.backgroundColor = "#481f32 ";
}

const showWinner = (userWin,userChoice,compChoice) =>{
    if (userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("you win");
        msg.innerText = `You Win, your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green ";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText =  `You lose, ${compChoice} beats your ${userChoice} beats `;
        console.log("you lose");
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log("user choice", userChoice);
    const compChoice =genCompChoice();
    console.log("Comp choice",compChoice);

    if(userChoice === compChoice ){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper"? false : true;
        }
        if(userChoice === "paper"){
            userWin = compChoice === "scissor"? false : true;
        }
        if(userChoice === "scissor"){
            userWin = compChoice === "rock"? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked",userChoice);
        playGame(userChoice);

    });
});
