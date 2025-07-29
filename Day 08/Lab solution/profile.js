var loadingDiv = document.getElementById("loading");
var errorDiv = document.getElementById("error");
var profileContent = document.getElementById("profile-content");

var userNameEl = document.getElementById("userName");
var userUsernameEl = document.getElementById("userUsername");

var fullNameEl = document.getElementById("fullName");
var usernameEl = document.getElementById("username");
var emailEl = document.getElementById("email");
var phoneEl = document.getElementById("phone");

var websiteEl = document.getElementById("website");

var streetEl = document.getElementById("street");
var suiteEl = document.getElementById("suite");
var cityEl = document.getElementById("city");
var zipcodeEl = document.getElementById("zipcode");
var latEl = document.getElementById("lat");
var lngEl = document.getElementById("lng");

var companyNameEl = document.getElementById("companyName");
var catchPhraseEl = document.getElementById("catchPhrase");
var businessEl = document.getElementById("business");

// &&&& logic &&&&

function getCookie(name) {
  var value = `; ${document.cookie}`;
  var parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    return parts.pop().split(";").shift();
  }
  return null;
}

function loadUserProfile() {
  try {
    var userDataCookie = getCookie("selectedUser");

    if (!userDataCookie) throw new Error("user not found");

    var userData = JSON.parse(userDataCookie);

    loadingDiv.style.display = "none";
    profileContent.style.display = "block";

    populateUserData(userData);
  } catch (error) {
    console.error("error loading user");
    loadingDiv.style.display = "none";
    errorDiv.style.display = "block";
  }
}

function populateUserData(user) {
  userNameEl.textContent = user.name;
  userUsernameEl.textContent = `${user.username}`;

  fullNameEl.textContent = user.name || "not found";
  usernameEl.textContent = user.username || "not found";
  emailEl.textContent = user.email || "not found";
  phoneEl.textContent = user.phone || "not found";

  var websiteUrl = `http://${user.website}`;
  websiteEl.innerHTML = `<a href="${websiteUrl}" target="_blank" >${user.website}</a>`;

  if (user.address) {
    streetEl.textContent = user.address.street || "not found";
    suiteEl.textContent = user.address.suite || "not found";
    cityEl.textContent = user.address.city || "not found";
    zipcodeEl.textContent = user.address.zipcode || "not found";

    if (user.address.geo) {
      latEl.textContent = user.address.geo.lat || "not found";
      lngEl.textContent = user.address.geo.lng || "not found";
    } else {
      latEl.textContent = "not found";
      lngEl.textContent = "not found";
    }
  } else {
    streetEl.textContent = "not found";
    suiteEl.textContent = "not found";
    cityEl.textContent = "not found";
    zipcodeEl.textContent = "not found";
    latEl.textContent = "not found";
    lngEl.textContent = "not found";
  }

  if (user.company) {
    companyNameEl.textContent = user.company.name || "not found";
    catchPhraseEl.textContent = user.company.catchPhrase || "not found";
    businessEl.textContent = user.company.bs || "not found";
  } else {
    companyNameEl.textContent = "not found";
    catchPhraseEl.textContent = "not found";
    businessEl.textContent = "not found";
  }
}

function goBack() {
  document.cookie = "selectedUser=;  path=/;";
  window.location.href = "index.html";
}

loadUserProfile();
