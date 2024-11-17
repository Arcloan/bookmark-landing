const closeMenu = document.querySelector(".closeMenu");
const openMenu = document.querySelector(".openMenu");
const menu = document.querySelector(".menu");

closeMenu.addEventListener("click", e => {
    menu.removeAttribute("data-active");
})

openMenu.addEventListener("click", e => {
    menu.setAttribute("data-active", "");
})