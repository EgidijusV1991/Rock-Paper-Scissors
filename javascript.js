function getComputerChoice(){
    randomChoice = Math.floor(Math.random()*3)
    let computerChoice;
    switch(randomChoice){
        case 0:{
            computerChoice = "scissors"
            break
        }
        case 1:{
            computerChoice = "rock"
            break
        }
        case 2:{
            computerChoice = "papper"
        }
    }
    return computerChoice
}

let computerChoice = getComputerChoice();
let playerSelection = prompt("Choose: Rock-Paper-Scissors").toLowerCase()
checkInput()


function checkInput(){
    if(playerSelection === ""){
        playerSelection = prompt("Choose: Rock-Paper-Scissors").toLowerCase()
        checkInput()
    }
    else if(playerSelection == "rock" || playerSelection == "scissors" || playerSelection == "papper"){
        playGame()
    }
    else if (playerSelection != null){
        playerSelection = prompt("Choose: Rock-Paper-Scissors").toLowerCase()
        checkInput()
    }
}
console.log("player "+playerSelection)

function playGame(){
    if(playerSelection == computerChoice){
        console.log("It's a draw! Computer choose: "+computerChoice + " you choose: " +playerSelection)
    }
    switch(true){
        case playerSelection == "rock" && computerChoice == "papper":{
            console.log("You lost! :( Computer choose: "+computerChoice + " you choose: " +playerSelection)
            break
        }
        case playerSelection == "rock" && computerChoice == "scissors":{
            console.log("You won! :) Computer choose: "+computerChoice + " you choose: " +playerSelection)
            break
        }
        case playerSelection == "papper" && computerChoice == "scissors":{
            console.log("You lost! :( Computer choose: "+computerChoice + " you choose: " +playerSelection)
            break
        }
        case playerSelection == "papper" && computerChoice == "rock":{
            console.log("You won! :) Computer choose: "+computerChoice + " you choose: " +playerSelection)
            break
        }
        case playerSelection == "scissors" && computerChoice == "papper":{
            console.log("You won! :) Computer choose: "+computerChoice + " you choose: " +playerSelection)
            break
        }
        case playerSelection == "scissors" && computerChoice == "rock":{
            console.log("You lost! :( Computer choose: "+computerChoice + " you choose: " +playerSelection)
            break
        }
    }
    reset()
}

function reset(){
    computerChoice = getComputerChoice()
    playerSelection = prompt("Choose: Rock-Paper-Scissors2").toLowerCase()
    checkInput()
}