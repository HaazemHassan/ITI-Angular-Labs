var tag = document.getElementById("tag-input");
var className = document.getElementById("class-input");
var id = document.getElementById("id-input");
var name = document.getElementById("name-input");
var output = document.getElementById("output");

function count() {
  var countOfTags = document.getElementsByTagName(tag.value).length;
  var countOfClasses = document.getElementsByClassName(className.value).length;
  var idExists = document.getElementById(id.value) !== null;
  var countOfNames = document.getElementsByName(name.value).length;

  output.textContent =
    "tag: " +
    countOfTags +
    ", class: " +
    countOfClasses +
    ", id: " +
    idExists +
    ", name: " +
    countOfNames;
}
