console.log("hello game devs");

const score = document.querySelector(".score");
const startScreen = document.querySelector(".startScreen");
const gameArea = document.querySelector(".gameArea");
console.log(score);
console.log(startScreen);
console.log(gameArea);

const keys = {
  ArrowUp: false,
  ArrowDown: false,
  ArrowRight: false,
  ArrowLeft: false,
};

startScreen.addEventListener("click", Start);
function gamePlay() {
  console.log("game play");
  window.requestAnimationFrame(gamePlay);
}
function Start() {
  console.log("game started");
  window.requestAnimationFrame(gamePlay);
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
