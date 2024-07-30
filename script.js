document.addEventListener("DOMContentLoaded", (event) => {

let userScore=0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const winSound = document.getElementById("win-sound");
const loseSound = document.getElementById("lose-sound")

const genCompChoice =() => {
    const options= ["rock" , "paper" , "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options [randIdx];

};
const showWinner = (userWin, userChoice , compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win!🥳 You choosed ${userChoice} which beats Computer's ${compChoice}`;
        msg.style.backgroundColor = "green";
        winSound.play();
    }else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose😔 Computer choose ${compChoice} which beats Your ${userChoice}`;
        msg.style.backgroundColor  = "red";
        loseSound.play();
    }
}

const playGame = (userChoice)=>{
    const compChoice = genCompChoice();

    if(userChoice === compChoice){
       msg.innerText = `The game is Draw. Play Again😑 Your Choice ${userChoice} is same as Computer's ${compChoice}` ;
       msg.style.backgroundColor = "#081b31";  
    } else {
        let userWin =  true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;  
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }else {
            userWin = compChoice === "rock" ? false : true;       
        } 
        showWinner(userWin , userChoice , compChoice);
    }
};

choices.forEach((choice)=> {
    // console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice= choice.getAttribute("id");
         playGame(userChoice);
    });
});
});