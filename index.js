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

const game = () => {
  cards.forEach((card) => {
    card.addEventListener("click", function () {
      // Switch players
      if (card.querySelector(".pick")) {
        //IF True
        console.log("It does");
        console.log(currentPlayer);
      } else {
        //IF False
        const playerStatus = document.querySelector(".current-player");
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
