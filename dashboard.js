const username = document.getElementById("username");
const email = document.getElementById("email");
const oldPass = document.getElementById("old-password");
const newPass = document.getElementById("new-password");
const confirmNewPass = document.getElementById("confirm-new-password");
const form = document.getElementById("form");
const logout = document.getElementById("logout");

let currentUser = JSON.parse(localStorage.getItem("currentUser"));
// set name and email in dashboard
username.innerText = currentUser.name;
email.innerText = currentUser.email;

// change current password
form.addEventListener("submit", (e)=> {
    // e.preventDefault();
    if(oldPass.value !== currentUser.pass) { // if old pass and current pass doesn't match
        alert("Old password isn't currect");
    } else if(newPass.value !== confirmNewPass.value) { // if new pass and confirm pass doesn't match
        alert("New password doesn't match, enter correctly");
    }
    else { // if all form input is correct change current password in currentUser
        currentUser = {
            "email": currentUser.email,
            "pass": newPass.value,
            "name": currentUser.name,
            "token": currentUser.token,
        }

        // update the password in users also
        let users = JSON.parse(localStorage.users);
        users = users.map((user)=> {
            if(user.email == currentUser.email) {
                user.password = newPass.value;
            }
            return user;
        })
        
        localStorage.setItem("users", JSON.stringify(users));

        // update the currentUser state
        localStorage.setItem("currentUser", JSON.stringify(currentUser));
        alert("Password changed successfully");
    }
})

// logout

logout.addEventListener("click", ()=> {
    currentUser = null;
    localStorage.setItem("currentUser", null);
    window.location.href = "./login.html"; // redirect user to login page after logging out
})