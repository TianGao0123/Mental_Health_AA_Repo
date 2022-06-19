
var userString = localStorage.getItem("User");
let user = stringToUser(userString);


const Btn = document.getElementById('confirmBtn'); 
let meetBtns = document.querySelectorAll("input[name = 'Meeting']");


function confirmMeeting(){
    let result;
    for (const meetBtn of meetBtns) {
        if (meetBtn.checked) {
            result = meetBtn.value;
            break;
        }
    }

    user.meetingStatus = result;
    userString = user.toString;
    localStorage.setItem("User", userString);
}


