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
console.log(getComputerChoice())

let playerSelection = prompt("Choose: Rock-Paper-Scissors").toLowerCase()
console.log(playerSelection)
checkInput()
function checkInput(){
    if(playerSelection === ""){
        playerSelection = prompt("Choose: Rock-Paper-Scissors2").toLowerCase()
        checkInput()
    }
    else if(playerSelection == "rock" || playerSelection == "scissors" || playerSelection == "papper"){
        console.log(playerSelection)
    }
    else if (playerSelection != null){
        playerSelection = prompt("Choose: Rock-Paper-Scissors2").toLowerCase()
        checkInput()
    }
}