const tabMenu = document.querySelector(".tabMenu");
let selected = "";
const number = {first: 0, second: 1, third: 2};
const tabs = document.querySelector(".tabs");

tabMenu.addEventListener("click", e => {
    if (e.target.tagName !== "H3") {
        return;
    }
    tabMenu.querySelectorAll(" h3").forEach(node => {
        node.removeAttribute("data-selected");
    })
    e.target.setAttribute("data-selected", "");
    selected = e.target.getAttribute("data-number");
    switchTab();
})

function switchTab() {
    let index = number[selected];
    Array.from(tabs.children).forEach((tab) => {
        tab.removeAttribute("data-selected");
    })
    tabs.children[index].setAttribute("data-selected", "");
}