var startTime;
var tInterval;
var running = false;
var timeBeforeStop = 0;

var hoursElement = document.getElementById("hours");
var minutesElement = document.getElementById("minutes");
var secondsElement = document.getElementById("seconds");
var millisecondsElement = document.getElementById("milliseconds");
var startStopBtn = document.getElementById("startStopBtn");
var resetBtn = document.getElementById("resetBtn");

function startStop() {
  if (!running) {
    startTime = new Date().getTime() - timeBeforeStop;
    tInterval = setInterval(updateTime, 20);
    startStopBtn.innerHTML = "Stop";
    startStopBtn.classList.add("running");
    running = true;
  } else {
    clearInterval(tInterval);
    timeBeforeStop = new Date().getTime() - startTime;
    startStopBtn.innerHTML = "Start";
    startStopBtn.classList.remove("running");
    running = false;
  }
}

function reset() {
  clearInterval(tInterval);
  running = false;
  timeBeforeStop = 0;
  startStopBtn.innerHTML = "Start";
  startStopBtn.classList.remove("running");
  hoursElement.innerHTML = "00";
  minutesElement.innerHTML = "00";
  secondsElement.innerHTML = "00";
  millisecondsElement.innerHTML = "000";
}

function updateTime() {
  var now = Date.now();
  var timeInMs = now - startTime;

  var hours = Math.floor(timeInMs / 3600000);
  timeInMs -= hours * 3600000;

  var minutes = Math.floor(timeInMs / 60000);
  timeInMs -= minutes * 60000;

  var seconds = Math.floor(timeInMs / 1000);
  timeInMs -= seconds * 1000;

  hoursElement.innerHTML = hours.toString().padStart(2, "0");
  minutesElement.innerHTML = minutes.toString().padStart(2, "0");
  secondsElement.innerHTML = seconds.toString().padStart(2, "0");
  millisecondsElement.innerHTML = timeInMs.toString().padStart(3, "0");
}

startStopBtn.addEventListener("click", startStop);
resetBtn.addEventListener("click", reset);
