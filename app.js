let rps=["Rock", "Paper", "Scissors"]
let button=document.querySelectorAll('.btn')
let pc_button=document.querySelector('.pc-button')
let old=document.querySelector('.old')
let user1=document.querySelector('.user1')
let pc1=document.querySelector('.pc1')
let pc=0
let user=0

  for(let i=0;i<button.length;i++){
      button[i].addEventListener('click', function(){
      pc_button.textContent=`${rps[(Math.floor(Math.random()*3))]}`
      let current=button[i]
      if(current.textContent==="Rock")current.style.animation="getting-center-rock 1.3s forwards"
      else if(current.textContent==="Scissors")current.style.animation="getting-center-scissors 1.3s forwards"
      else {current.style.animation="getting-center-paper 1.3s forwards"}
      for(let j = 0 ; j<button.length;j++){
          if(j!=i){
            button[j].style.animation="getting_back 1s forwards"
          }
      }
    ps=current.textContent.toLowerCase()
    cs=pc_button.textContent.toLowerCase()

    user=parseInt(user)
    pc=parseInt(pc)
    if(ps==="rock" && cs==="paper"){pc+=1;old.textContent="PC WINS THE ROUND"; pc1.textContent=`PC: ${pc}`}
    if(ps==="rock" && cs==="scissors"){user+=1;old.textContent="YOU WIN THE ROUND";user1.textContent=`YOU: ${user}`}
    if(ps==="rock" && cs==="rock"){old.textContent="TIE"}
    if(ps==="paper" && cs==="rock"){user+=1;old.textContent="YOU WIN THE ROUND";user1.textContent=`YOU: ${user}`}
    if(ps==="paper" && cs==="scissors"){pc+=1;old.textContent="PC WINS THE ROUND"; pc1.textContent=`PC: ${pc}`}
    if(ps==="paper" && cs==="paper"){old.textContent="TIE"}
    if(ps==="scissors" && cs==="paper"){user+=1;old.textContent="YOU WIN THE ROUND";user1.textContent=`YOU: ${user}`}
    if(ps==="scissors" && cs==="rock"){pc+=1;old.textContent="PC WINS THE ROUND"; pc1.textContent=`PC: ${pc}`}
    if(ps==="scissors" && cs==="scissors"){old.textContent="TIE"}
    old.style.animation="op 1s forwards";
    let time = 0 ;
    if(user1.textContent==="YOU: 5"){
      setTimeout(function(){
        old.textContent=" YOU WIN THE GAME"
      },1300)
      user1.textContent="YOU: 0"
      pc1.textContent="PC: 0"
      user=0
      pc=0
      time=600
    }
    if(pc1.textContent==="PC: 5"){
      setTimeout(function(){
        old.textContent=" PC WINS THE GAME"
      },1300)
      user1.textContent="YOU: 0"
      pc1.textContent="PC: 0"
      user=0
      pc=0
      time=600
    }
    setTimeout(function(){
        old.style.animation="";
        for(let i =0 ;i <button.length;i++)button[i].style.animation="";
      },2000)
    })
  }
