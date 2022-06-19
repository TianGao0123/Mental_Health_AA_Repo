var userString = localStorage.getItem("User");

let user = stringToUser(userString);

var userLevel = user.getLevel;
var userName = user.getName;
var userSpon = user.getSponsorStatus;


document.getElementById("displayed_name").innerHTML = userName;


document.getElementById("displayed_sponsor").innerHTML = userSpon;

if(userSpon == "No"){
    document.getElementById("sponText").innerHTML = 
    "A sponsor is the person who'll teach you how to progress forward.<br/>\
     We encourage you to find a sponsor.<br/>\
     Here some sponsors we found suitable for you, please feel free to contact them:";
    document.getElementById("yesSponInfo").style.visibility = "collapse";
    document.getElementById("noSponInfo").style.visibility = "visible";
}
else{
    document.getElementById("sponText").innerHTML = 
    "Hey, we provide some information below on how to cooperate with your sponsor :)";
    document.getElementById("noSponInfo").style.visibility = "collapse";
    document.getElementById("yesSponInfo").style.visibility = "visible";
}

