const cards = document.querySelectorAll(".card");
const selection = document.getElementsByClassName("pick");

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
  return boardWins.some((winningCombination) => {
    return winningCombination.every((position) => {
      const card = cards[position];
      return card.textContent === playerSign;
      if (checkResult(currentPlayer.sign)) {
        playerStatus.textContent = currentPlayer.player + " Wins!";
        return;
      } else if (checkResult(currentPlayer.sign))
        if (playerStatus.textContent.includes("Wins!")) {
          playerStatus.textContent = "It's a draw"; // If there's a winner or a draw, do not allow further moves
        }
    });
  });
};

const game = () => {
  cards.forEach((card) => {
    card.addEventListener("click", function () {
      const playerStatus = document.querySelector(".current-player");
      // Switch players
      if (card.querySelector(".pick")) {
        //IF True
        console.log("It does");
        console.log(currentPlayer);
      } else {
        //IF False
        const pick = document.createElement("div");
        pick.classList.add("pick");
        card.appendChild(pick);
        console.log(currentPlayer);
        pick.textContent = currentPlayer.sign;
        currentPlayer = currentPlayer === player1 ? player2 : player1;
        playerStatus.textContent = "It's " + currentPlayer.player + "'s Turn";
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
}
