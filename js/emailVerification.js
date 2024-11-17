const form = document.querySelector("form");
const errorIcon = document.querySelector(".errorIcon");
const errorMessage = document.querySelector(".errorMessage");
const errorButton = document.querySelector(".errorButton");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (form.elements.email.validity.valid) {
        errorButton.removeAttribute("data-error");
        errorIcon.removeAttribute("data-error");
        errorMessage.removeAttribute("data-error");
        return;
    }
    errorIcon.setAttribute("data-error", "");
    errorMessage.setAttribute("data-error", "");
    errorButton.setAttribute("data-error", "");
})