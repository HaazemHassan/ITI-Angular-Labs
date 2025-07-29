var userNameElement = document.getElementById("userName");
var userAgeElement = document.getElementById("userAge");
var userGenderElement = document.getElementById("userGender");

function getCookie(name) {
  var value = `; ${document.cookie}`;
  var parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}

userNameElement.textContent = getCookie("name") || "name not found";
userAgeElement.textContent = getCookie("age") || "age not found";
userGenderElement.textContent = getCookie("gender") || "gender not found";

viewCountCookieValue = getCookie("views");
var views = viewCountCookieValue ? parseInt(viewCountCookieValue) + 1 : 1;
document.cookie = "views=" + views + "; path=/";
document.getElementById("siteVisit").innerHTML = views;
