const next = document.getElementById('next');
const prev = document.getElementById('prev');
const dice = document.getElementById('dice');

const cubespinner = document.getElementById('cubespinner');

let position = 0;
let positionMax = 5

moveCube(position);
console.log(position);


next.addEventListener('click', event => {
  if (position >= positionMax) {
    position = 0;
  } else {
    position++;
  }
  moveCube(position);
  console.log(position);
})

prev.addEventListener('click', event => {
  if (position <= 1) {
    position = positionMax;
  } else {
    position--;
  }
  moveCube(position);
  console.log(position);
})

dice.addEventListener('click', event => {
  let position = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
  moveCube(position);
})


function moveCube() {
  switch (position) {
    case 0:
      cubespinner.setAttribute('style', 'transform: rotateX(-90deg);');
      break;
    case 1:
      cubespinner.setAttribute('style', 'transform: rotateY(0deg);');
      break;
    case 2:
      cubespinner.setAttribute('style', 'transform: rotateY(-90deg);');
      break;
    case 3:
      cubespinner.setAttribute('style', 'transform: rotateY(-180deg);');
      break;
    case 4:
      cubespinner.setAttribute('style', 'transform: rotateY(-270deg);');
      break;
    case 5:
      cubespinner.setAttribute('style', 'transform: rotateX(90deg);');
      break;
    default:
  }

}
