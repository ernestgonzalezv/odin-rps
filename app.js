
let choices=["rock", "paper", "scissors"]


function getComputerChoice(){
  let a = Math.floor(Math.random()*3)
  return choices[a]
}

function getPlayerChoice(){
  let a = prompt("What are you choosing(Rock or Paper or Scissors)?");
  return a.toLowerCase();
}



function play(ps, cs){
    if(ps==="rock" && cs==="paper")console.log("You Lose! Paper beats Rock")
    if(ps==="rock" && cs==="scissors")console.log("You Win! Rock beats Scissors")
    if(ps==="rock" && cs==="rock")console.log("Tie");
    if(ps==="paper" && cs==="rock")console.log("You Win! Paper beats Rock")
    if(ps==="paper" && cs==="scissors")console.log("You Lose! Scissors beat Paper")
    if(ps==="paper" && cs==="paper")console.log("Tie")
    if(ps==="scissors" && cs==="paper")console.log("You Win! Scissors beat Paper")
    if(ps==="scissors" && cs==="rock")console.log("You Lose! Rock beats Scissors")
    if(ps==="scissors" && cs==="scissors")console.log("Tie")
}
function game(){
  for ( let i = 1; i <= 5; i++){
    let ps=getPlayerChoice()
    let cs=getComputerChoice()
    play(ps,cs)
  }
}
game()
