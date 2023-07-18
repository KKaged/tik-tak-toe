const gameBoard = (() => {
  const playerFact = (player, sign, turn) => {
    return { player, sign, turn };
  };
  return playerFact;
})();

const player1 = gameBoard("Player 1", "X", 1);
const player2 = gameBoard("Player 2", "O", 2);

const currentPlayer = () => {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.addEventListener("click", function () {
      const pick = document.createElement("div");
      pick.classList.add("pick");
      pick.textContent = "X";
      card.appendChild(pick);
    });
  });
};

currentPlayer();
