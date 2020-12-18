const body = document.querySelector("body");

const IMG_NUM = 5;

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `momentum_pics/${imgNumber}.jpg`;
  image.classList.add("bgImage");
  body.appendChild(image);
}

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUM + 1);
  return number;
}

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();
