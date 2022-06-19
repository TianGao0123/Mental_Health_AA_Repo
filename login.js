function login(){
    logname = document.getElementById("loginName").value;
    const someperson = new User(logname, 1, null, null,null);  //need to modify: look up level in database later on
    localStorage.setItem("User", someperson.toString);
}



// function main () {
//     userStr = localStorage.getItem("User");
//     if(userStr == null){
//         const someperson = new User("Alice", 5);
//         localStorage.setItem("User", someperson.toString);
//     }
// }