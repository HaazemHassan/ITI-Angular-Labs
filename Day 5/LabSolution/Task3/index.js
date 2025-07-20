var input = document.getElementById("input");
var balls = document.getElementsByClassName("ball");
var colors = ["red", "yellow", "green"];

function changeColor() {
  for (var i = 0; i < balls.length; i++)
    balls[i].style.backgroundColor = "gray";

  var number = Number(input.value);
  if (typeof number != "number" || isNaN(number)) return;

  if (number >= 1 && number <= balls.length) {
    balls[number - 1].style.backgroundColor = colors[number - 1];
    input.value = "you entered: " + number;
  } else input.value = "invalid number";
}
