var submitBtn = document.querySelector(".btn-submit");
var resetBtn = document.querySelector(".btn-reset");
var nameInput = document.getElementById("name");
var passInput = document.getElementById("password");
var emailInput = document.getElementById("email");

var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function toggleError(input, errorId, condition) {
  var errorEl = document.getElementById(errorId);
  if (condition) {
    errorEl.style.display = "none";
    input.classList.remove("invalid");
    return true;
  } else {
    errorEl.style.display = "block";
    input.classList.add("invalid");
    return false;
  }
}

function validateGroup(name, errorId) {
  var inputs = document.getElementsByName(name);
  var isChecked = false;

  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].checked) {
      isChecked = true;
      break;
    }
  }

  if (isChecked) document.getElementById(errorId).style.display = "none";
  else document.getElementById(errorId).style.display = "block";

  return isChecked;
}

submitBtn.onclick = function (event) {
  event.preventDefault();
  var isValid = true;

  var name = nameInput.value.trim();
  var password = passInput.value;
  var email = emailInput.value.trim();

  isValid &= toggleError(
    nameInput,
    "nameError",
    name !== "" && name.length > 4
  );
  isValid &= toggleError(
    passInput,
    "passError",
    password !== "" && password.length > 8
  );
  isValid &= toggleError(
    emailInput,
    "emailError",
    email !== "" && emailRegex.test(email)
  );

  isValid &= validateGroup("gender", "genderError");
  isValid &= validateGroup("sport", "sportError");

  if (isValid) clearForm();
};

resetBtn.onclick = function (event) {
  event.preventDefault();
  clearForm();
};

function clearForm() {
  var inputIds = ["name", "password", "email"];
  for (var i = 0; i < inputIds.length; i++) {
    var input = document.getElementById(inputIds[i]);
    input.value = "";
    input.classList.remove("invalid");
  }

  document.getElementById("country").selectedIndex = 0;

  var checkInputs = document.querySelectorAll(
    'input[type="radio"], input[type="checkbox"]'
  );
  for (var i = 0; i < checkInputs.length; i++) {
    checkInputs[i].checked = false;
  }

  var errorIds = [
    "nameError",
    "passError",
    "emailError",
    "genderError",
    "sportError",
  ];
  for (var i = 0; i < errorIds.length; i++) {
    document.getElementById(errorIds[i]).style.display = "none";
  }
}
