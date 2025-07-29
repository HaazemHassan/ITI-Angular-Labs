var nameElement = document.getElementById("name");
var age = document.getElementById("age");
var gender = document.getElementById("gender");
var registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", function (e) {
  e.preventDefault();

  document.cookie = `name=${nameElement.value}; path=/`;
  document.cookie = `age=${age.value}; path=/`;
  document.cookie = `gender=${gender.value}; path=/`;

  window.open("profile.html", "_blank");
});
