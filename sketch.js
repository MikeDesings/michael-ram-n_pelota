let posX = 10;
let posY = 10;
let diametro;
let radio;
let fondo;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // print(posX);
  // posX = 234;
  // print(posX);
  // posX = posX + 25;
  // print(posX);
  // posX = posX * 2;
  // print(posX);
  // posX = posX / 5;
  // print(posX);
  // posX *= 8;
  // print(posX);
  // posX+= 1;
  // print(posX);
  // posX ++;
  // print(posX);
  posX = windowWidth / 2;
  posY = windowHeight / 2;
  diametro = 100;
  radio = diametro / 2;
  fondo = color(25, 100, 50);
}

function draw() {
  background(fondo);
  fill(255);
  circle(posX, posY, diametro);
  posX -= 10;

  if (posX < -radio) {
    fondo = color(255, random(100, 175), 50);
    diametro = random(10, 100);
    radio = diametro / 2;
    posX = windowWidth + radio;
  }
  print(posX);
}
