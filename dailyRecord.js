
var userString = localStorage.getItem("User");

let user = stringToUser(userString);

var userLevel = user.getLevel;
var userName = user.getName;

document.getElementById("displayed_name").innerHTML = userName;


function updateRecord(){
var today_amount = document.getElementById("input_alcohol").value;
user.addtoRecord(today_amount);

userString = user.toString;
localStorage.setItem("User", userString);

}