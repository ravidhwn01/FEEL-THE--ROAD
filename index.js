"use strict";
// console.log("hello game devs");

const score = document.querySelector(".score");
const startScreen = document.querySelector(".startScreen");
const gameArea = document.querySelector(".gameArea");
// console.log(score);
// console.log(startScreen);
// console.log(gameArea);
let player = { speed: 4,score:0 };
const keys = {
  ArrowUp: false,
  ArrowDown: false,
  ArrowRight: false,
  ArrowLeft: false,
  "":true
};

startScreen.addEventListener("click", Start);

document.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyUp);
function keyDown(e) {
  e.preventDefault();
  keys[e.key] = true; // pressed key  value true
    // console.log("key down",e.key);
  //   console.log(keys);
}
function keyUp(e) {
  e.preventDefault();
  keys[e.key] = false; // after pressed key  value false
  //   console.log("key up",e.key);
  //   console.log(keys);
}
// collision of cars
function collision(a,b){
   let aRect = a.getBoundingClientRect();
   let bRect  = b.getBoundingClientRect();
    return !((aRect.bottom<bRect.top)||(aRect.top>bRect.bottom)||(aRect.right<bRect.left)||(aRect.left>bRect.right))
}
// move lines
function moveLines() {
  let lines = document.querySelectorAll(".lines");
  lines.forEach(function (item) {
    if (item.y >= 700) {
      item.y -= 750;
    }
    item.y += player.speed;
    item.style.top = item.y + "px";
  });
}
function endGame(){
    player.start = false;
    startScreen.classList.remove("hide"); 

}
function moveEnemy(car) {
  let enemy = document.querySelectorAll(".enemy");
  enemy.forEach(function (item) {
    if(collision(car,item)){
        // console.log("boom hit");
        endGame();
    }
    if (item.y >= 750) {
      item.y = -300;
      item.style.left = Math.floor(Math.random() * 350) + "px";
    }
    item.y += player.speed;
    item.style.top = item.y + "px";
  });
}

function gamePlay() {
  //   console.log("game is  playing...");
  let car = document.querySelector(".car");
  let road = gameArea.getBoundingClientRect(); // get all positions of element
  //   console.log(road)
  if (player.start) {
    moveLines();
    moveEnemy(car);
    if (keys.ArrowUp && player.y > road.top + 200) {
      player.y -= player.speed;
    }
    if (keys.ArrowDown && player.y < road.bottom - 110) {
      player.y += player.speed;
    }
    if (keys.ArrowLeft && player.x > 4) {
      player.x -= player.speed;
    }
    if (keys.ArrowRight && player.x < road.width - 50) {
      player.x += player.speed;
    }

    car.style.top = player.y + "px";
    car.style.left = player.x + "px";
    window.requestAnimationFrame(gamePlay);
    // console.log(player.score++)
    player.score++;
    score.innerHTML ="Score : "+player.score;
  }
}
function Start() {
//   gameArea.classList.remove("hide"); // remove hide class
  startScreen.classList.add("hide"); // add hide class to startScreen
  gameArea.innerHTML = " ";
  player.start = true;
  player.score = 0;
  //   console.log("game started");
  window.requestAnimationFrame(gamePlay);
  for (let x = 0; x < 5; x++) {
    let roadLine = document.createElement("div");
    roadLine.setAttribute("class", "lines");
    roadLine.y = x * 150;
    roadLine.style.top = roadLine.y + "px";
    gameArea.appendChild(roadLine);
  }

  let car = document.createElement("div");
  car.setAttribute("class", "car");
  //   car.innerText = "hey i am new attribute"
  gameArea.appendChild(car);
  player.x = car.offsetLeft - 10;
  player.y = car.offsetTop - 5;
  //   console.log("offsetLeft", car.offsetLeft);
  //   console.log("offsetTop", car.offsetTop);
  //   console.log("offsetLeft", player.x);
  //   console.log("offsetTop", player.y);
  for (let x = 0; x < 3; x++) {
    let enemyCar = document.createElement("div");
    enemyCar.setAttribute("class", "enemy");
    enemyCar.y = (x + 1) * 350 * -1;
    enemyCar.style.top = enemyCar.y + "px";
    // enemyCar.style.backgroundColor = "blue";
    enemyCar.style.left = Math.floor(Math.random() * 350) + "px";
    gameArea.appendChild(enemyCar);
  }
}
// function randomColor(){
//     return #
// }