const fullname = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPass = document.getElementById("confirm-password");
const submit = document.getElementById("submit");
const form = document.getElementById("form");

// if users not found in localStorage initialize to an empty array or get the users instead
let users = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : [];
//console.log(users);

form.addEventListener("submit", (e)=> {
    e.preventDefault();
    if(password.value !== confirmPass.value) {
        alert("Passwords doesn't match");
    } else {
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
