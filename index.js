const gameBoard = (() => {
  const playerFact = (player, sign) => {
    return { player, sign };
  };
  return playerFact;
})();

const player1 = gameBoard("Player 1", "X");
const player2 = gameBoard("Player 2", "O");

const game = () => {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.addEventListener("click", function () {
      const pick = document.createElement("div");
      pick.classList.add("pick");
      pick.textContent = player1.sign;
      card.appendChild(pick);
    });
  });
};

game();
