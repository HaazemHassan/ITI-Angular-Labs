var arrayInput = document.getElementById("arrayInput");
var minInput = document.getElementById("min");
var maxInput = document.getElementById("max");

function displayMinAndMax() {
  var array = arrayInput.value.split(",");
  var min = Math.min(...array);
  var max = Math.max(...array);
  minInput.value = min;
  maxInput.value = max;
}
