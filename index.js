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
let humanScore=0;
let computerScore=0;
   //get user choice
   //asek th eplayer to choose form th three option
   //assign the user choice to vairable
let score=document.querySelector('.score')
let buttons=document.querySelectorAll('button')
let finalResult=document.querySelector('.final')
buttons.forEach(button=>{
  
    button.addEventListener('click',()=>{
        const userChoice=button.textContent.toLowerCase()
        let computerChoice=getComputerChoice();
        let humanChoice=userChoice;
        let result=playRound(humanChoice,computerChoice);
        //display the score
        score.innerHTML=`Round: ${result} <br>  Human Score:${humanScore} <br> Computer Score:${computerScore}`
        if (humanScore===5){
            finalResult.textContent='human is the winner'
        }
        else if(computerScore===5){
            finalResult.textContent='computer is the winner'
        }
        
        
    })

  
}

)
//track score

//compare the two  choices

function playRound(humanChoice,computerChoice){
//if the user choice and the computer choice is equal
    let result=document.querySelector('p')
    if (humanChoice===computerChoice){
        result.textContent= "It's a draw! Both chose " + humanChoice;
        return "draw"; 
    }
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        result.textContent= "You win! Rock beats Scissors";
        humanScore++;
        return "user";      

    }
    else if (humanChoice === "rock" && computerChoice === "paper") {
        result.textContent=  "You lose! Paper beats Rock";
        computerScore++;
        return "computer"; 

    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        result.textContent= "You win! Paper beats Rock";
        humanScore++;
        return "user"; 

    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {   
        result.textContent= "You lose! Scissors beats Paper";
        computerScore++;
        return "computer"; 

    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {    
        result.textContent= "You win! Scissors beats Paper";
        humanScore++;
        return "user"; 

    }   
    else {
        result.textContent= "You lose! Rock beats Scissors";
        computerScore++;
        return "computer"; 
    }

}







