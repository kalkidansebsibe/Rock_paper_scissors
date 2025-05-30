//get computer choice
  
function getComputerChoice(){
    //coshhe random number b/n 1 to 3
    let randomNumber=Math.floor(Math.random()*3)+1
    //assing random number is 1 2 3 to rock  paper or scissor 
    if (randomNumber===1){
       return "rock";
    }
    else if (randomNumber===2){
       return "paper";
    }
    else {
       return "scissors";
    }

}
//get user choice
   //asek th eplayer to choose form th three option
   //assign the user choice to vairable
function getUserChoice(){
    let userChoice = prompt("Choose rock, paper, or scissors:").toLowerCase();
    //check if the user choice is valid
    if (userChoice === "rock" || userChoice === "paper" || userChoice === "scissors") {
        return userChoice;
    } else {
        alert("Invalid choice! Please choose rock, paper, or scissors.");
        return getUserChoice(); // ask again if invalid
    }
}
//track score
let humanScore=0;
let computerScore=0;
//compare the two  choices

function playRound(humanChoice,computerChoice){
//if the user choice and the computer choice is equal
if (humanChoice===computerChoice){
    alert ("It's a draw! Both chose " + humanChoice);
    return "draw"; 
}
else if (humanChoice === "rock" && computerChoice === "scissors") {
    alert("You win! Rock beats Scissors");
    humanScore++;
    return "user";      

}
else if (humanChoice === "rock" && computerChoice === "paper") {
    alert("You lose! Paper beats Rock");
    computerScore++;
    return "computer"; 

}
else if (humanChoice === "paper" && computerChoice === "rock") {
    alert("You win! Paper beats Rock");
    humanScore++;
    return "user"; 

}
else if (humanChoice === "paper" && computerChoice === "scissors") {   
    alert("You lose! Scissors beats Paper");
    computerScore++;
    return "computer"; 

}
else if (humanChoice === "scissors" && computerChoice === "paper") {    
    alert("You win! Scissors beats Paper");
    humanScore++;
    return "user"; 

}   
else if (humanChoice === "scissors" && computerChoice === "rock") {
    alert("You lose! Rock beats Scissors");
    computerScore++;
    return "computer"; 

}
else {
    alert("Invalid choice! Please choose rock, paper, or scissors.");
    return "invalid"; // in case of unexpected input
}
}
function playGame(){
    for(let i=0; i<5; i++){
        let computerChoice=getComputerChoice();
        let humanChoice=getUserChoice();
        let result=playRound(humanChoice,computerChoice);
        
        //display the score
        console.log("Round " + (i + 1) + ": " + result);
        console.log("Human Score: " + humanScore);
        console.log("Computer Score: " + computerScore);
    }
}  
playGame()         







