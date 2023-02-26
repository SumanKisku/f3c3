const fullname = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPass = document.getElementById("confirm-password");
const submit = document.getElementById("submit");
const form = document.getElementById("form");

// if users not found in localStorage initialize to an empty array or get the users instead
let users = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : [];

form.addEventListener("submit", (e)=> {
    e.preventDefault();
    if(password.value !== confirmPass.value) { // If password doesn't match show an alert
        alert("Passwords doesn't match");
    } else if(userAlreadyExists()) { // if email is being used already show alert
        alert("This email is already being used, use another email");
    } else { // create a new user and redirect to login page
        let user = {
            "name": fullname.value,
            "email": email.value,
            "password": password.value,
        }
        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));
        window.location.href = "./login.html";
    }
})

// check there's an user with the same email
function userAlreadyExists() {
    let bool = false;
    users.forEach((user)=> {
        if(user.email == email.value) {
            bool = true;
        }
    })
    
    return bool
}