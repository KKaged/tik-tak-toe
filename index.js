const cards = document.querySelectorAll(".card");
const selection = document.getElementsByClassName("pick");
let gameEnded = false;

const gameBoard = (() => {
  const playerFact = (player, sign) => {
    return { player, sign };
  };
  return playerFact;
})();

const player1 = gameBoard("Player 1", "X");
const player2 = gameBoard("Player 2", "O");

let currentPlayer = player1;

let boardWins = [
  [0, 1, 2],
  [0, 3, 6],
  [3, 4, 5],
  [6, 7, 8],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [0, 4, 8],
];
const checkResult = (playerSign) => {
  const playerStatus = document.querySelector(".current-player");

  for (const combinations of boardWins) {
    let isWinningCombo = true;

    for (const position of combinations) {
      const card = cards[position];
      if (card.textContent !== playerSign) {
        isWinningCombo = false;
        break;
      }
    }
    if (isWinningCombo) {
      return "win";
    }
  }
  const isDraw = Array.from(cards).every(
    (card) => card.textContent === "X" || card.textContent === "O"
  );
  if (isDraw) {
    return "draw";
  }
  return "continue";
};

const game = () => {
  cards.forEach((card) => {
    card.addEventListener("click", function () {
      if (gameEnded) {
        return;
      }
      const playerStatus = document.querySelector(".current-player");

      if (card.querySelector(".pick")) {
        console.log("It does");
        console.log(currentPlayer);
      } else {
        const pick = document.createElement("div");
        pick.classList.add("pick");
        card.appendChild(pick);
        console.log(currentPlayer);
        pick.textContent = currentPlayer.sign;

        const result = checkResult(currentPlayer.sign);
        if (result === "win") {
          playerStatus.textContent = currentPlayer.player + " Wins!";
          gameEnded = true;
        } else if (result === "draw") {
          playerStatus.textContent = "It's a Draw!";
          gameEnded = true;
        } else {
          currentPlayer = currentPlayer === player1 ? player2 : player1;
          playerStatus.textContent = "It's " + currentPlayer.player + "'s Turn";
        }
      }
    });
  });
};

game();

function restart() {
  const selection = document.querySelectorAll(".pick");
  selection.forEach((pick) => {
    pick.parentNode.removeChild(pick);
  });
  currentPlayer = player1;
  const playerStatus = document.querySelector(".current-player");
  playerStatus.textContent = "Start Playing! Player 1 goes first!";
  gameEnded = false;
}
