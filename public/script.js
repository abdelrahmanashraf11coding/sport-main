const authButton = document.getElementById("auth-button");
const authModal = document.getElementById("auth-modal");
const closeModal = document.getElementById("close-modal");
const loginTab = document.getElementById("login-tab");
const signupTab = document.getElementById("signup-tab");
const loginForm = document.getElementById("login-form");
const signupForm = document.getElementById("signup-form");

authButton.addEventListener("click", () => {
    authModal.classList.remove("hidden");
});

closeModal.addEventListener("click", () => {
    authModal.classList.add("hidden");
});

loginTab.addEventListener("click", () => {
    loginTab.classList.add(
        "border-b-2",
        "border-blue-600",
        "text-blue-600"
    );
    signupTab.classList.remove(
        "border-b-2",
        "border-blue-600",
        "text-blue-600"
    );
    loginForm.classList.remove("hidden");
    signupForm.classList.add("hidden");
});

signupTab.addEventListener("click", () => {
    signupTab.classList.add(
        "border-b-2",
        "border-blue-600",
        "text-blue-600"
    );
    loginTab.classList.remove(
        "border-b-2",
        "border-blue-600",
        "text-blue-600"
    );
    signupForm.classList.remove("hidden");
    loginForm.classList.add("hidden");
});