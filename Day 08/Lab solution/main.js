var xhr = new XMLHttpRequest();
var tbody = document.getElementById("tbody");
var fetchUserDataBtn = document.querySelector(".fetch-btn");
var searchBtn = document.querySelector(".search-btn");
var searchInput = document.querySelector(".search-box input");
const baseUrl = "https://jsonplaceholder.typicode.com/users";

function createUserRow(user) {
  var id = document.createElement("td");
  id.textContent = user.id;

  var name = document.createElement("td");
  name.textContent = user.name;

  var username = document.createElement("td");
  username.textContent = user.username;

  var email = document.createElement("td");
  email.textContent = user.email;

  var city = document.createElement("td");
  city.textContent = user.address ? user.address.city : "N/A";

  var actionsCell = document.createElement("td");
  actionsCell.className = "actions";

  var deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "btn delete-btn";

  var viewBtn = document.createElement("button");
  viewBtn.textContent = "View";
  viewBtn.className = "btn view-btn";

  actionsCell.appendChild(viewBtn);
  actionsCell.appendChild(deleteBtn);

  var row = document.createElement("tr");
  row.append(id, name, username, email, city, actionsCell);

  deleteBtn.onclick = function () {
    deleteUser(row);
  };

  viewBtn.onclick = function () {
    viewUser(user);
  };

  return row;
}

function deleteUser(row) {
  try {
    if (confirm("are you sure you want to delete this user")) {
      row.remove();
    }
  } catch (error) {
    alert("Error deleting user");
  }
}

function viewUser(user) {
  try {
    const userData = JSON.stringify(user);
    document.cookie = `selectedUser=${userData}; path=/`;
    window.open("profile.html");
  } catch (error) {
    console.error("Error saving user data:", error);
    alert("Error opening user profile. Please try again.");
  }
}

function clearTable() {
  tbody.innerHTML = "";
}

// &&&&&&& fetach all &&&
fetchUserDataBtn.addEventListener("click", function () {
  clearTable();

  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      try {
        var usersData = JSON.parse(xhr.response);

        for (var i = 0; i < usersData.length; i++) {
          var row = createUserRow(usersData[i]);
          tbody.appendChild(row);
        }
      } catch (error) {
        alert("error loading user data");
      }
    }
  };

  try {
    xhr.open("GET", baseUrl);
    xhr.send("");
  } catch (error) {
    console.error("Error making request", error);
  }
});

// &&&&&&&&& search &&&&&&&&&&
searchBtn.addEventListener("click", function () {
  var userId = searchInput.value.trim();

  if (!userId) {
    alert("please enter a user ID");
    return;
  }

  clearTable();

  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        try {
          var userData = JSON.parse(xhr.response);
          var row = createUserRow(userData);
          tbody.appendChild(row);
        } catch (error) {
          alert("error loading user data");
        }
      } else alert("User not found");
    }
  };

  try {
    xhr.open("GET", `${baseUrl}/${userId}`);
    xhr.send("");
  } catch (error) {
    console.error("Error making request:", error);
    alert("Error connecting to server");
  }
});
