
var userString = localStorage.getItem("User");
let user = stringToUser(userString);


const Btn = document.getElementById('confirmBtn'); 
let sponBtns = document.querySelectorAll("input[name = 'Spon']");


function confirmSponsor(){
    let result;
    for (const sponBtn of sponBtns) {
        if (sponBtn.checked) {
            result = sponBtn.value;
            break;
        }
    }

    user.sponsorStatus = result;
    userString = user.toString;
    localStorage.setItem("User", userString);
}


