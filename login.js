const email = document.getElementById("email");
const password = document.getElementById("password");
const form = document.getElementById("form");

form.addEventListener("submit", (e)=> {
    e.preventDefault();
    const teachers = localStorage.users ? JSON.parse(localStorage.users) : []; // if there's users in localStorage then assign an empty array

    // find teacher in users
    const findTeacher = () => {
        let teacher;

        teachers.forEach((user)=> {
            if(user.email == email.value && user.password == password.value) {
                teacher = user;
            }
        })
        return teacher; // return teacher object or undefined(false);
    }

    let teacher = findTeacher();
    
    if(!teacher) { // if teacher not found give an alert
        alert("Can't fint any account with this details, check your email and password");
    } else {
        // teacher found
        // make currentUser in localStorage and redirect to dashboard
        let currentUser = {
            "email": teacher.email,
            "pass": teacher.password,
            "name": teacher.name,
            "token": generateRandomString(),
        }
        console.log(currentUser);
        localStorage.setItem("currentUser", JSON.stringify(currentUser));
        window.location.href = "./dashboard.html";
    }
})

// automatic login if currentUser is not equal to null
let currectUser = JSON.parse(localStorage.getItem("currentUser"));
if(currectUser) {
    window.location.href = "./dashboard.html";
}

// generate random string
function generateRandomString() {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  
    for (let i = 0; i < 16; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
  
    return result;
  }
  