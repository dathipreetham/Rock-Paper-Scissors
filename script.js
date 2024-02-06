let userScore = 0;
let compScore = 0;
const genCompChoice=()=>{
    let options=["rock","paper","scissors"]
    let val=Math.floor(Math.random()*3)
    return options[val]
}

const msg=document.querySelector("#msg")

const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#comp-score")
 
const showWinner=(userWin)=>{
    if (userWin){
        userScore++
        userScorePara.innerText=userScore;
        msg.innerText="you win"
        msg.style.backgroundColor="green"
    }
    else{
        compScore++
        compScorePara.innerText=compScore;
        msg.innerText="you Lose!";
        msg.style.backgroundColor="red"
    }
}

const drawGame=()=>{
    msg.innerText="game was drawn";
    msg.style.backgroundColor="orange";
}


const playGame=(userChoice)=>{
    console.log(`user choice is ${userChoice}`)
    const compChoice=genCompChoice()
    console.log("comp choice is",compChoice);
    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            userWin=compChoice==="rock"?true: false;
        }
        else if(userChoice==="scissors"){
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin);
    }
}


const choices=document.querySelectorAll(".choice")
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id")
        playGame(userChoice);
        
    });
});


