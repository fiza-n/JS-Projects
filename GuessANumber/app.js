const input = document.getElementById('input');
const form = document.querySelector('form');
const message = document.getElementById('winningmessage');
const start_again = document.getElementById('againstart');
const submitbtn = document.getElementById('submit');

let correctGuess;
const user_guess_limit = 10;
let attempts;

function startGame() {
  correctGuess = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  message.innerHTML = '';
  input.value = '';
  submitbtn.disabled = false;
  start_again.innerHTML = '';
}

startGame(); 

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const userguess = parseInt(input.value);
  attempts++;

  if (userguess === correctGuess) {
    message.innerHTML = ` Correct! The number was ${correctGuess}`;
    submitbtn.disabled = true;
    start_again.innerHTML = `<button>Start the game again</button>`;
   

  } 
  else if (userguess < correctGuess) {
    message.innerHTML = ` ${userguess} is too low`;
  } 
  else if (userguess > correctGuess) {
    message.innerHTML = ` ${userguess} is too high`;
    
  }

  if (attempts >= user_guess_limit && userguess !== correctGuess) {
    message.innerHTML = ` Game over! The correct number was ${correctGuess}`;
    start_again.innerHTML = `<button>Start the game again</button>`;
  }

  input.value = '';
});

start_again.addEventListener('click', (e) => {

  if (e.target.tagName === 'BUTTON') {
    startGame();
  }
});