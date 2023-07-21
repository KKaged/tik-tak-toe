const cards = document.querySelectorAll(".card");

const gameBoard = (() => {
  const playerFact = (player, sign) => {
    return { player, sign };
  };
  return playerFact;
})();

const player1 = gameBoard("Player 1", "X");
const player2 = gameBoard("Player 2", "O");

let currentPlayer = player2;

const game = () => {
  cards.forEach((card) => {
    card.addEventListener("click", function () {
      // Switch players
      currentPlayer = currentPlayer === player1 ? player2 : player1;

      const pick = document.createElement("div");
      pick.classList.add("pick");
      pick.textContent = currentPlayer.sign;
      card.appendChild(pick);
      console.log(currentPlayer);
      // Call a function or perform any necessary actions for the new player
    });
  });
};

game();

function restart() {
  const selection = document.querySelectorAll(".pick");
  selection.forEach((pick) => {
    pick.parentNode.removeChild(pick);
  });
  currentPlayer = player2;
}
