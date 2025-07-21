// function div(a,b) {
//     try{
//         if(!b){
//             throw new Error("You can't divide by zero!");
//         }
//         return a/b;
//     }
//     catch(e){
//         // console.log(e);

//         throw e;
//     }
//  }

//  function calc(a,b, operation) {
//     var result;
//     try{

//        if(operation == '/'){
//         result = div(a,b);
//        }
//     }
//     catch(e){
//         console.log(e);
//     }
//     return result;
//   }

// //  console.log(div(6,2)); // 3
// //  console.log(div(10, 0)); // divide by zero exception  | infinity
// //  console.log(div(10, 2)); // 5

//  console.log(calc(6,2, '/'));
// calc(10, 0, '/');
//  console.log(calc(10, 2, '/'));

////////////////////////////////////////////
// AJAX

// var xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function(){
//     // console.log(xhr.readyState)
//     if(xhr.readyState == 4 && xhr.status == 200){
//         // console.log("recieved response");
//         // console.log(xhr.response);
//         // console.log(typeof xhr.response);
//         var userData = JSON.parse(xhr.response);
//         // console.log(typeof userData);
//         // console.log(userData);
//         // console.log(userData.name);
//         // console.log(userData.address);
//         // console.log(userData.username);

//         var id = document.createElement("td");
//         id.textContent = userData.id;
//         console.log(id);

//         var name = document.createElement("td");
//         name.textContent = userData.name;
//         console.log(name);

//         var username = document.createElement("td");
//         username.textContent = userData.username;
//         console.log(username);

//         var email = document.createElement("td");
//         email.textContent = userData.email;
//         console.log(email);

//         var city = document.createElement("td");
//         city.textContent = userData.address.city;
//         console.log(city);

//         var row = document.createElement("tr");
//         row.append(id, name, username, email, city);

//         var tbody = document.getElementById("tbody");
//         // console.log(tbody)

//         tbody.appendChild(row);
//     }
// }

// const url = "https://jsonplaceholder.typicode.com/users/7";
// xhr.open("GET", url)
// xhr.send("");

// btn.onclick = function(){}

//////////////////////////////////////////////////////////

var xhr = new XMLHttpRequest();
var tbody = document.getElementById("tbody");
var fetchUserDataBtn = document.getElementById("btn");
const url = "https://jsonplaceholder.typicode.com/users";

fetchUserDataBtn.addEventListener("click", function () {
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var usersData = JSON.parse(xhr.response);
      // console.log(usersData);
      for (var i = 0; i < usersData.length; i++) {
        var id = document.createElement("td");
        id.textContent = usersData[i].id;

        var name = document.createElement("td");
        name.textContent = usersData[i].name;

        var username = document.createElement("td");
        username.textContent = usersData[i].username;

        var email = document.createElement("td");
        email.textContent = usersData[i].email;

        var city = document.createElement("td");
        city.textContent = usersData[i].address.city;

        var row = document.createElement("tr");
        row.append(id, name, username, email, city);

        tbody.appendChild(row);
      }
    }
  };

  xhr.open("GET", url);
  xhr.send("");
});
