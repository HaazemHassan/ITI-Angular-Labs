var input = document.getElementById("input");
var output = document.getElementById("output");

function capitalizeString() {
  var string = input.value.toLowerCase();
  var words = string.split(" ");

  for (var i = 0; i < words.length; i++)
    if (words[i].length > 0)
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);

  var capitalizedString = words.join(" ");
  output.value = capitalizedString;
}
