// 1) Define required constants.
// 2) Define required variables used to track the state of the game.
// 3) Store elements on the page that will be accessed in code more than once in variables to make code more concise, readable and performant.
// 4) Upon loading the app should:
//     4.1) Initialize the state variables
//     4.2) Render those values to the page
//     4.3) Wait for the user to click a square
// 5) Handle a player clicking a square
// 6) Handle a player clicking the replay button

// Determine a winner
// determine a tie
// determine a leaderboard

let currentPlayersTurn = "X";
document.getElementById("players-turn").innerHTML = currentPlayersTurn;

let playerXBoxes = [];
let playerOBoxes = [];

let boxes = document.querySelectorAll(".box");

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
    isWinningMove(playerOBoxes);

    // alternating player turn
    if (currentPlayersTurn === "X") {
      currentPlayersTurn = "O";
    } else {
      currentPlayersTurn = "X";
    }
    // updating the DOM for player turn H2 html span element
    document.getElementById("players-turn").innerHTML = currentPlayersTurn;
  });
});

let reset = document.querySelector(".reset");

reset.addEventListener("click", function () {
  boxes.forEach((box) => {
    box.innerHTML = "";
  });

  currentPlayersTurn = "X";
  document.getElementById("players-turn").innerHTML = currentPlayersTurn;
});

let winningCombos = [
  // left to right
  ["box-1", "box-2", "box-3"],
  ["box-4", "box-5", "box-6"],
  ["box-7", "box-8", "box-9"],
  // top to bottom
  ["box-1", "box-4", "box-7"],
  ["box-2", "box-5", "box-8"],
  ["box-3", "box-6", "box-9"],
  // diagonally
  ["box-1", "box-5", "box-9"],
  ["box-3", "box-5", "box-7"],
];
const doesArrMatch = (arr) => arr === winningCombos;

function isWinningMove() {
  let winner;
  if (currentPlayersTurn === "X") {
    winningCombos.forEach((arr) => {
      winner = arr.every(function (box) {
        return playerXBoxes.includes(box);
      });
      if (winner) {
        alert("Winner!");
      }
    });
  } else {
    winningCombos.forEach((arr) => {
      winner = arr.every(function (box) {
        return playerOBoxes.includes(box);
      });
      if (winner) {
        alert("Winner!");
      }
    });
  }
  //   console.log(playerOBoxes.every(doesArrMatch));
  //   console.log(playerXBoxes.every(doesArrMatch));
  //   console.log(playerOBoxes.sort());
  //   console.log(playerXBoxes.sort());
}

// let currentPlayersTurn = "X";
// document.getElementById("players-turn").innerHTML = currentPlayersTurn;
// let playerXBoxes = [];
// let playerOBoxes = [];

// let boxes = document.querySelectorAll(".box");
// boxes.forEach(function (box) {
//   box.addEventListener("click", function () {
//     if (box.innerHTML === "") {
//       box.innerHTML = currentPlayersTurn;
//       // update the state for the players boxes
//       if (currentPlayersTurn == "X") {
//         playerXBoxes.push(box.id);
//       } else {
//         playerOBoxes.push(box.id);
//       }
//     } else {
//       alert("This is not a valid play!");
//       return;
//     }

//     isWinningMove();

//     if (currentPlayersTurn === "X") {
//       currentPlayersTurn = "O";
//     } else {
//       currentPlayersTurn = "X";
//     }

//     document.getElementById("players-turn").innerHTML = currentPlayersTurn;
//   });
// });

// let resetButton = document.getElementById("reset-game");
// resetButton.addEventListener("click", function () {
//   boxes.forEach(function (box) {
//     box.innerHTML = "";
//   });
//   currentPlayersTurn = "X";
//   document.getElementById("players-turn").innerHTML = currentPlayersTurn;
// });

// function isWinningMove() {}
