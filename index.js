const gameBoard = (() => {
  const playerFact = (player, sign) => {
    return { player, sign };
  };
  return playerFact;
})();

const player1 = gameBoard("Player 1", "X");
const player2 = gameBoard("Player 2", "O");

const who = document.getElementsByClassName("current-player");
const cards = document.querySelectorAll(".card");

const currentPlayer = () => {
  cards.forEach((card) => {
    card.addEventListener("click", function () {
      console.log(`Test`);
    });
  });
};
currentPlayer();
