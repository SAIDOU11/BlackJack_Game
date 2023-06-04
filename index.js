let firstCard = 1;
let secondCard = 10;
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.querySelector("#message-el");
let cardsEl = document.querySelector("#cards-el");
let sumEl = document.querySelector("#sum-el");

function startGame() {
  renderGame();
}
function renderGame() {
  // Render out first & second cards
  cardsEl.textContent = "Cards: " + cards[0] + " - " + cards[1];
  // Render out all the cards
  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack ";
    hasBlackJack = true;
  } else {
    message = "You're out of the game! ";
    isAlive = false;
  }

  messageEl.textContent = message;
}

function newCard() {
  console.log("Drawing a new card from the deck!");
  let newCard = 1;
  sum += newCard;
  renderGame();
}
