let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice")

choices.forEach((choice) => {
    choice.addEventListener("click",() =>{
        const choiceId = choice.getAttribute("id")
        console.log("choice was selected",choiceId);
    });
});