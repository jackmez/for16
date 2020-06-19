const next = document.getElementById('next');
const prev = document.getElementById('prev');
const dice = document.getElementById('dice');
const cubespinner = document.getElementById('cubespinner');
let face = document.querySelectorAll('.face');

let position = 0;
let positionMax = 5

moveCube(position);

next.addEventListener('click', event => {
  if (position >= positionMax) {
    position = 0;
  } else {
    position++;
  }
  moveCube(position);
})

prev.addEventListener('click', event => {
  if (position <= 0) {
    position = positionMax;
  } else {
    position--;
  }
  moveCube(position);
})


dice.addEventListener('click', event => {
  diceroll()
  next.classList.add('showButton');
  prev.classList.add('showButton');
})

function diceroll() {
  cubespinner.classList.add('dice-roll');
  setTimeout(function(){
    cubespinner.classList.remove('dice-roll');
    getRandomPosition()},
     3000);

  }

function getRandomPosition() {
  position = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
  moveCube(position);
}


function moveCube(randomPosition) {
  for (var i = 0; i < face.length; i++) {
    face[i].classList.remove('showface');
  }

  console.log(position);

  switch (position) {
    case 0:
      cubespinner.setAttribute('style', 'transform: rotateX(0deg);');
      break;
    case 1:
      cubespinner.setAttribute('style', 'transform: rotateY(-90deg);');
      break;
    case 2:
      cubespinner.setAttribute('style', 'transform: rotateY(-180deg);');
      break;
    case 3:
      cubespinner.setAttribute('style', 'transform: rotateY(-270deg);');
      break;
    case 4:
      cubespinner.setAttribute('style', 'transform: rotateX(-90deg);');
      break;
    case 5:
      cubespinner.setAttribute('style', 'transform: rotateX(90deg);');
      break;
    default:
  }

  face[position].classList.add('showface');
}
