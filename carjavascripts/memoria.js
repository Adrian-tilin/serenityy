const icons = [
  'emo1.png', 'emo2.png', 'emo3.png', 'emo4.png',
  'emo5.png', 'emo6.png', 'emo7.png', 'emo8.png',
  'emo1.png', 'emo2.png', 'emo3.png', 'emo4.png',
  'emo5.png', 'emo6.png', 'emo7.png', 'emo8.png'
];

let firstCard = null;
let secondCard = null;
let lockBoard = false;
let matchedPairs = 0;
let victoryCount = 0;
  
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function createBoard() {
  const gameBoard = document.querySelector('.game-board');
  gameBoard.innerHTML = '';
  matchedPairs = 0;
  shuffle(icons);

  icons.forEach(icon => {
    const card = document.createElement('div');
    card.classList.add('card');

    const cardInner = document.createElement('div');
    cardInner.classList.add('card-inner');

    const front = document.createElement('div');
    front.classList.add('card-front');
    const imgFront = document.createElement('img');
    imgFront.src = `./img/${icon}`;
    front.appendChild(imgFront);

    const back = document.createElement('div');
    back.classList.add('card-back');

    cardInner.appendChild(front);
    cardInner.appendChild(back);
    card.appendChild(cardInner);

    card.dataset.icon = icon;
    card.addEventListener('click', flipCard);
    gameBoard.appendChild(card);
  });
}

function flipCard() {
  if (lockBoard || this === firstCard || this.classList.contains('flipped')) return;

  this.classList.add('flipped');

  if (!firstCard) {
    firstCard = this;
    return;
  }

  secondCard = this;
  checkForMatch();
}

function checkForMatch() {
  if (firstCard.dataset.icon === secondCard.dataset.icon) {
    disableCards();
    matchedPairs++;
    if (matchedPairs === icons.length / 2) {
      victoryCount++;
      document.getElementById('victory-count').textContent = victoryCount;
    }
  } else {
    unflipCards();
  }
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
  resetBoardState();
}

function unflipCards() {
  lockBoard = true;
  setTimeout(() => {
    firstCard.classList.remove('flipped');
    secondCard.classList.remove('flipped');
    resetBoardState();
  }, 1000);
}

function resetBoardState() {
  [firstCard, secondCard, lockBoard] = [null, null, false];
}

document.getElementById('reset-button').addEventListener('click', createBoard);
document.getElementById('exit-button').addEventListener('click', () => {
  window.location.href = '/carhtml/Centro_juegos.html';
});

createBoard();
