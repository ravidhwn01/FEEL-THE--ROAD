// "use strict";
console.log("hello game devs");

const score = document.querySelector(".score");
const startScreen = document.querySelector(".startScreen");
const gameArea = document.querySelector(".gameArea");
// console.log(score);
// console.log(startScreen);
// console.log(gameArea);
let player = { speed: 5 };
const keys = {
  ArrowUp: false,
  ArrowDown: false,
  ArrowRight: false,
  ArrowLeft: false,
};

startScreen.addEventListener("click", Start);

document.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyUp);
function keyDown(e) {
  e.preventDefault();
  keys[e.key] = true; // pressed key  value true
  // console.log("key down",e.key);
  console.log(keys);
}
function keyUp(e) {
  e.preventDefault();
  keys[e.key] = false; // after pressed key  value false
  // console.log("key up",e.key);
  console.log(keys);
}
function gamePlay() {
  console.log("game is  playing...");
  let car  = document.querySelector('.car')
  car.style.top = player.y +"px"
  car.style.left = player.x +"px"
  if (player.start) {
    if (keys.ArrowUp) {   player.y -= player.speed;}
    if (keys.ArrowDown) {player.y += player.speed;}
    if (keys.ArrowLeft) {player.x -= player.speed;}
    if (keys.ArrowRight) {player.x += player.speed;}

    window.requestAnimationFrame(gamePlay);
  }
}
function Start() {
  gameArea.classList.remove("hide"); // remove hide class
  startScreen.classList.add("hide"); // add hide class to startScreen
  player.start = true;
  console.log("game started");
  window.requestAnimationFrame(gamePlay);
  let car = document.createElement("div");
  car.setAttribute("class", "car");
  //   car.innerText = "hey i am new attribute"
  gameArea.appendChild(car);
  player.x = car.offsetLeft - 10;
  player.y = car.offsetTop - 5;
  console.log("offsetLeft", car.offsetLeft);
  console.log("offsetTop", car.offsetTop);
  console.log("offsetLeft", player.x);
  console.log("offsetTop", player.y);
}
