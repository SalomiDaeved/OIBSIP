const registerForm = document.getElementById("register-form");
const loginForm = document.getElementById("login-form");
const goToRegister = document.getElementById("go-to-register");
const goToLogin = document.getElementById("go-to-login");
const securedPage = document.querySelector(".secured-page");
const userNameSpan = document.getElementById("user-name");
const logoutButton = document.getElementById("logout");

let users = {};

registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("register-username").value;
    const password = document.getElementById("register-password").value;

    if (username && password) {
        users[username] = password;
        alert("Registration successful!");
        toggleForms();
    } else {
        alert("Please fill all fields.");
    }
});

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;

    if (users[username] && users[username] === password) {
        showSecuredPage(username);
    } else {
        alert("Invalid credentials.");
    }
});

goToRegister.addEventListener("click", toggleForms);
goToLogin.addEventListener("click", toggleForms);

logoutButton.addEventListener("click", () => {
    securedPage.style.display = "none";
    loginForm.classList.add("active");
});

function toggleForms() {
    registerForm.classList.toggle("active");
    loginForm.classList.toggle("active");
}

function showSecuredPage(username) {
    userNameSpan.textContent = username;
    securedPage.style.display = "block";
    loginForm.classList.remove("active");
    registerForm.classList.remove("active");
}