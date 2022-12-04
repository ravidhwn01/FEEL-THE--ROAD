"use strict"
console.log("hello game devs");

const score = document.querySelector(".score");
const startScreen = document.querySelector(".startScreen");
const gameArea = document.querySelector(".gameArea");
console.log(score);
console.log(startScreen);
console.log(gameArea);
let player = {};
const keys = {
  ArrowUp: false,
  ArrowDown: false,
  ArrowRight: false,
  ArrowLeft: false,
};

startScreen.addEventListener("click", Start);
function gamePlay() {
  console.log("game play");
    if (player.start) {
  window.requestAnimationFrame(gamePlay);}
}
function Start() {
    gameArea.classList.remove('hide');  // remove hide class 
    startScreen.classList.add('hide');   // add hide class to startScreen
    player.start = true;
  console.log("game started");
  window.requestAnimationFrame(gamePlay);
  let car = document.createElement("dev");
  car.setAttribute("class", "car");
//   car.innerText = "hey i am new attribute"
    gameArea.appendChild(car);
}
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
