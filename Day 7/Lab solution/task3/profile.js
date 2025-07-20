function getCookie(name) {
  var value = `; ${document.cookie}`;
  var parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}

document.getElementById("userName").textContent =
  getCookie("name") || "name not found";
document.getElementById("userAge").textContent =
  getCookie("age") || "age not found";
document.getElementById("userGender").textContent =
  getCookie("gender") || "gender not found";
