const randomNumber = Math.round(Math.random() * 10);
let numberOfAttempts = 1;
const gameScreenStart = document.querySelector('.game__start');
const gameScreenEnd = document.querySelector('.game__end');

function handleTryClick (event) {
  event.preventDefault();

  const inputNumber = document.querySelector('#number').value;

  if (Number(inputNumber) === randomNumber) {
    toggleScreen();

    gameScreenEnd.querySelector('.game__title').innerText = `Acertou em ${numberOfAttempts} tentativas!`;
  }

  inputNumber.value = '';
  numberOfAttempts++;
}

function handleRestartClick (event) {
  event.preventDefault();

  toggleScreen();

  numberOfAttempts = 1;
}

function toggleScreen () {
  gameScreenStart.classList.toggle('hide');
  gameScreenEnd.classList.toggle('hide');
}

const btnTry = document.querySelector('#btnTry');
const btnRestart = document.querySelector('#btnRestart');

btnTry.addEventListener('click', handleTryClick);
btnRestart.addEventListener('click', handleRestartClick);
