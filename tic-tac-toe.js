//board state array
//range from 1-9 inclusive
let state = [0, 1, 2, 3, 4, 5, 6, 7, 8];

let winningConditons = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],  // Horizontal rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8],  // Vertical columns
        [0, 4, 8], [2, 4, 6]              //Diagonals
    ]

//last move

//this is initialiing the first move so it can be random between bumbers 0 and 1
let move = Math.floor(Math.random() * 2) === 1 ? "X" : "O";

let xpos = []
let opos = []
let gameWon = false;

function getSquares() {
  return document.querySelectorAll("#board> div");
}

function checkWin(winner) {
  return winningConditons.some(function(combo) { //loop through winning combinations, return true if winner won
    return combo.every(function(i) { //test each winning condition spot to see if winner is there, return true if its in all spots
      return state[i] === winner; //return true if its in a spot
    });
  });
}

function clickSquare(sqr, i){
  //if its not empty then dont do anything
if (gameWon || typeof state[i] !== 'number') {
    return;
  }

  const status = document.getElementById("status");

  if (move === "X") {
    sqr.textContent = "X";
    sqr.classList.add("X");
    xpos.push(i);
    state[i] = "X";

    if (checkWin("X")) {
      status.textContent = "Congratulations! X is the Winner!";
      status.classList.add("you-won");
      gameWon = true;
    }
    move = "O";
  } else {
    sqr.textContent = "O";
    sqr.classList.add("O");
    opos.push(i);
    state[i] = "O";

    if (checkWin("O")) {
      status.textContent = "Congratulations! O is the Winner!";
      status.classList.add("you-won");
      gameWon = true;
    }
    move = "X";
  }
}

function sqrhover(sqr){
  sqr.classList.add("hover");
}
function unsqrhover(sqr){
  sqr.classList.remove("hover");
}

function reset() {

  xpos.splice(0, xpos.length);
  opos.splice(0, opos.length);

  //reset state array
  state = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  gameWon = false;
  move = Math.floor(Math.random() * 2) === 1 ? "X" : "O";

  //clear cells
  const sqrs = getSquares();
  sqrs.forEach(function(sqr) {
    sqr.textContent = "";
    sqr.classList.remove("X", "O");
  });

  //reset text
  const status = document.getElementById("status");
  status.textContent = "Move your mouse over a square and click to play an X or an O.";
  status.classList.remove("you-won");
}

function play() {
  const sqrs = getSquares();
  const btn = document.querySelector(".btn");

  sqrs.forEach(function(sqr, i) {
    sqr.classList.add("square");

    sqr.addEventListener("click", function() {
      clickSquare(sqr, i);
    });

    sqr.addEventListener("mouseover", function() {
      sqrhover(sqr);
    });

    sqr.addEventListener("mouseleave", function() {
      unsqrhover(sqr);
    });
  });

  if (btn) {
    btn.addEventListener("click", reset);
  }
}

document.addEventListener("DOMContentLoaded", play);

