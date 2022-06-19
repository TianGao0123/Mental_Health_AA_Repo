
var userString = localStorage.getItem("User");

let user = stringToUser(userString);

var userLevel = user.getLevel;
var userName = user.getName;

displayed_meetingStatus


var userMeet = user.getMeetingStatus;


document.getElementById("displayed_name").innerHTML = userName;


document.getElementById("displayed_meetingStatus").innerHTML = userMeet;

if(userMeet == "online"){
    document.getElementById("MeetingText").innerHTML = 
    "Keep coming back!<br/>\
    Keep attending online meeting can help you become better!<br/>\
    But still we encourage you to attend meeting in person which can help you progress even faster!<br/>\
    Below are some online meeting we think suitable for you:<br/>\
    Find a meeting colse to you here!"
}
else{
    document.getElementById("MeetingText").innerHTML = 
    "Great to hear you are attending in-person meetings!<br/>\
    Below are some in-person meetings we found for you:";
}