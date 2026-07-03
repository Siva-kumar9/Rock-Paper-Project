let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorepara=document.querySelector("#user");
const compScorepara=document.querySelector("#comp");

const gemCompChoice = () => {
    const options=["rock","paper","scissor"];
    const randIdx=Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    console.log("Game Was Draw");
    msg.innerText="Game Was Draw. Play Again";
    msg.style.backgroundColor="#081b31";
}

const showWinner = (userWin, UserchoiceId, compChoice) => {
    if(userWin){
        userscore++;
        userScorepara.innerText = userscore;
        console.log("You Win");
        msg.innerText=`You Win!, Your ${UserchoiceId} Beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compscore++;
        compScorepara.innerText = compscore;
        console.log("You Loose");
        msg.innerText=`You Loose. , ${compChoice} Beats Your ${UserchoiceId}`;
        msg.style.backgroundColor="red";
    }
}

const playgame = (UserchoiceId) => {
    console.log("user choice is :",UserchoiceId);
    const compChoice = gemCompChoice();
    console.log("computer choice is :",compChoice);
    if(UserchoiceId==compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(UserchoiceId=="rock"){
            //paper, scissor
            userWin = compChoice=="paper" ? false : true;
        }
        else if(UserchoiceId=="paper")
        {
            //rock scissor
            userWin = compChoice=="scissor"? false : true;
        }
        else{
            userWin = compChoice=="rock" ? false : true;
        }
        showWinner(userWin, UserchoiceId, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click",() =>{
        const UserchoiceId = choice.getAttribute("id");
        playgame(UserchoiceId);
    });
});

