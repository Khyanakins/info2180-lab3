function getSquares() {
  return document.querySelectorAll("div > div > div");
}

function addSquare() {
  var sqrs = getSquares();
  sqrs.forEach(function(sqr) {
    sqr.classList.add("square");
  });
}
document.addEventListener("DOMContentLoaded", addSquare);

