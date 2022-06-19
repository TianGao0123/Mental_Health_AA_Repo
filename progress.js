// main();

var userString = localStorage.getItem("User");

let user = stringToUser(userString);

var userLevel = user.getLevel;
var userName = user.getName;


document.getElementById("displayed_name").innerHTML = userName;
document.getElementById("displayed_level").innerHTML = userLevel;

if(userString == null){
    document.getElementById("displayed_name").innerHTML = "Bob";
}

document.getElementById('embedArticle').src = "files/en_step"+userLevel+".pdf";

