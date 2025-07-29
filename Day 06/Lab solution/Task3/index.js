const successButton = document.querySelector(".success-button");
const errorButton = document.querySelector(".error-button");
const alertBox = document.querySelector(".alert-box");
const alertTitle = document.querySelector(".alert-title");
const alertIcon = document.querySelector(".alert-icon");
const alertMessage = document.querySelector(".alert-message");

alertBox.style.display = "none";

function showSuccessMessage() {
  alertBox.className = "alert-box success";
  alertTitle.textContent = "Success";
  alertIcon.innerHTML = "&#10004;";
  alertMessage.textContent = "operation completed successfully";
  alertBox.style.display = "block";
}

function showErrorMessage() {
  alertBox.className = "alert-box error";
  alertTitle.textContent = "Error";
  alertIcon.innerHTML = "&#10006;";
  alertMessage.textContent = "Something went wrong. Please try again.";
  alertBox.style.display = "block";
}

successButton.addEventListener("click", showSuccessMessage);
errorButton.addEventListener("click", showErrorMessage);
