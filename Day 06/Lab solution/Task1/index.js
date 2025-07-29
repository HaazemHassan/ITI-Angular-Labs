var addButton = document.querySelector(".add-button");
var nameInput = document.getElementById("name");
var idInput = document.getElementById("id");
var ageInput = document.getElementById("age");
var tableBody = document.querySelector(".student-table tbody");

var nameError = document.getElementById("name-error");
var idError = document.getElementById("id-error");
var ageError = document.getElementById("age-error");

addButton.onclick = function () {
  var name = nameInput.value.trim();
  var id = idInput.value.trim();
  var age = ageInput.value.trim();

  var valid = true;

  if (name === "") {
    nameError.textContent = "Name is required";
    valid = false;
  }

  if (id === "") {
    idError.textContent = "ID is required";
    valid = false;
  } else if (isNaN(id) || Number(id) <= 0) {
    idError.textContent = "ID must be a positive number";
    valid = false;
  } else if (isDuplicateId(id)) {
    idError.textContent = "ID already exists";
    valid = false;
  }

  if (age === "") {
    ageError.textContent = "Age is required";
    valid = false;
  } else if (isNaN(age) || Number(age) <= 0) {
    ageError.textContent = "Age must be at least 1";
    valid = false;
  }

  if (!valid) return;

  var newRow = document.createElement("tr");
  newRow.innerHTML =
    "<td>" +
    id +
    "</td>" +
    "<td>" +
    name +
    "</td>" +
    "<td>" +
    age +
    "</td>" +
    "<td><button onclick='deleteRow(this)'>Delete</button></td>";

  tableBody.appendChild(newRow);

  clearErrors();
};

function isDuplicateId(newId) {
  var rows = tableBody.getElementsByTagName("tr");
  for (var i = 0; i < rows.length; i++) {
    var id = rows[i].getElementsByTagName("td")[0];
    if (id.textContent === newId) {
      return true;
    }
  }
  return false;
}

function clearErrors() {
  nameError.textContent = "";
  idError.textContent = "";
  ageError.textContent = "";
}

function deleteRow(button) {
  var row = button.parentNode.parentNode;
  row.parentNode.removeChild(row);
}
