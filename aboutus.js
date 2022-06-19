var userString = localStorage.getItem("User");

let user = stringToUser(userString);

var userLevel = user.getLevel;
var userName = user.getName;

document.getElementById("displayed_name").innerHTML = userName;