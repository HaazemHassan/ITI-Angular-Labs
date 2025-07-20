const balls = document.getElementsByClassName("ball");
const colors = ["red", "yellow", "green"];
let currentIndex = 0;
let intervalId = null;

function colorNextBall() {
  for (let i = 0; i < balls.length; i++)
    balls[i].style.backgroundColor = "gray";

  balls[currentIndex].style.backgroundColor = colors[currentIndex];
  currentIndex = (currentIndex + 1) % balls.length;
}

function start() {
  if (intervalId === null) intervalId = setInterval(colorNextBall, 1000);
}

function stop() {
  clearInterval(intervalId);
  intervalId = null;
}

for (let i = 0; i < balls.length; i++) {
  balls[i].addEventListener("mouseenter", function () {
    if (balls[i].style.backgroundColor !== "gray") stop();
  });

  balls[i].addEventListener("mouseleave", function () {
    start();
  });
}

start();
