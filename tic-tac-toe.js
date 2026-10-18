//board state array. -1 empty. 0 O. 1 X
let state = [-1, -1, -1, -1, -1, -1, -1, -1, -1];

//last move

//this is initialiing the first move so it can be random between bumbers 0 and 1

let move = Math.floor(Math.random()*2);

function getSquares() {
  return document.querySelectorAll("#board> div");
}

function clickSquare(sqr, i){
  //if its not empty then dont do anything
  if (state[i] !== -1){
    return;
  }

  if (move == 1){
    //current move is X
    sqr.textContent = "X";
    sqr.classList.add("X");
    state[i]=1;

    //switch to O for next move
    move=0;
  }else{
    //current move is O
    sqr.textContent = "O";
    sqr.classList.add("O");
    state[i]=0;

    //switch to X for next move
    move=1;
  }
}

function sqrhover(sqr){
  sqr.classList.add("hover");
}
function unsqrhover(sqr){
  sqr.classList.remove("hover");
}

function play(){
  const sqrs = getSquares();

  sqrs.forEach(function(sqr, i){
    sqr.classList.add("square");

    sqr.addEventListener("click", function(){
    clickSquare(sqr, i);})

  sqr.addEventListener("mouseover", function(){
    sqrhover(sqr);})

  sqr.addEventListener("mouseleave", function(){
    unsqrhover(sqr);})
  }
  )
}


document.addEventListener("DOMContentLoaded", play);

