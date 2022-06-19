var userString = localStorage.getItem("User");

let user = stringToUser(userString);

var userLevel = user.getLevel;
var userName = user.getName;

var slider = document.getElementById("mySlider");
var levelDisplay = document.getElementById("value");

slider.value = userLevel;
levelDisplay.innerHTML = slider.value;

userLevel = slider.value;
user.level = userLevel;
userString = user.toString;
localStorage.setItem("User", userString);

slider.oninput = function(){
    levelDisplay.innerHTML = this.value;
    userLevel = this.value;
    user.level = userLevel;
    userString = user.toString;
    localStorage.setItem("User", userString);
}