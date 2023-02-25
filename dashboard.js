const username = document.getElementById("username");
const email = document.getElementById("email");
const oldPass = document.getElementById("old-password");
const newPass = document.getElementById("new-password");
const confirmNewPass = document.getElementById("confirm-new-password");
const form = document.getElementById("form");

let currentUser = JSON.parse(localStorage.getItem("currentUser"));
console.log(currentUser);
username.innerText = currentUser.name;
email.innerText = currentUser.email;


form.addEventListener("submit", (e)=> {
    e.preventDefault();
    if(oldPass.value !== currentUser.pass) {
        alert("Old password isn't currect");
    } else if(newPass.value !== confirmNewPass.value) {
        alert("New password doesn't match, enter correctly");
    }
    else {
        currentUser = {
            "email": currentUser.email,
            "pass": newPass.value,
            "name": currentUser.name,
            "token": currentUser.token,
        }
        localStorage.removeItem("currentUser");
        localStorage.setItem("currentUser", JSON.stringify(currentUser));
        //console.log(currentUser);
    }
})
