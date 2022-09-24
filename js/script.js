// MODELS
let currentPlayersTurn = "X";
let playerXBoxes = [];
let playerOBoxes = [];
let reset = document.querySelector(".reset");
let boxes = document.querySelectorAll(".box");
let winningCombos = [
  ["box-1", "box-2", "box-3"],
  ["box-4", "box-5", "box-6"],
  ["box-7", "box-8", "box-9"],
  ["box-1", "box-4", "box-7"],
  ["box-2", "box-5", "box-8"],
  ["box-3", "box-6", "box-9"],
  ["box-1", "box-5", "box-9"],
  ["box-3", "box-5", "box-7"],
];

updateView();

// CONTROLLER-like functions
boxes.forEach(function (box) {
  box.addEventListener("click", function () {
    this.style.fontSize = "200px";
    // if box hasn't been played
    if (box.innerHTML === "") {
      this.innerHTML = currentPlayersTurn;
      // update arrays
      if (currentPlayersTurn === "X") {
        this.style.color = "rgb(231, 81, 81)";
        playerXBoxes.push(box.id);
      } else {
        this.style.color = "lightgreen";
        playerOBoxes.push(box.id);
      }
    } else {
      // stopping the switch of turn and updating of DOM
      alert("Invalid move");
      return;
    }
    // determine winner
    isWinningMove();
    // alternating player turn
    switchTurns();
    // updating the DOM for player turn H2 html span element
    updateView();
  });
});

reset.addEventListener("click", function () {
  resetGameAndBoard();
  updateView();
});

function isWinningMove() {
  let winner;
  if (currentPlayersTurn === "X") {
    winningCombos.forEach((arr) => {
      winner = arr.every(function (box) {
        return playerXBoxes.includes(box);
      });
      if (winner) {
        resetGameAndBoard();
        alert("Winner!");
      }
    });
  } else {
    winningCombos.forEach((arr) => {
      winner = arr.every(function (box) {
        return playerOBoxes.includes(box);
      });
      if (winner) {
        resetGameAndBoard();
        alert("Winner!");
      }
    });
  }
  //   console.log(playerOBoxes.every(doesArrMatch));
  //   console.log(playerXBoxes.every(doesArrMatch));
  //   console.log(playerOBoxes.sort());
  //   console.log(playerXBoxes.sort());
}
function switchTurns() {
  if (currentPlayersTurn === "X") {
    currentPlayersTurn = "O";
  } else {
    currentPlayersTurn = "X";
  }
}
function updateView() {
  document.getElementById("players-turn").innerHTML = currentPlayersTurn;
}
function resetGameAndBoard() {
  boxes.forEach((box) => {
    box.innerHTML = "";
    playerOBoxes = [];
    playerXBoxes = [];
  });
  currentPlayersTurn = "X";
}
