const menuBtn = document.querySelector("#menu-btn");
const menu = document.querySelector("#menu");

menuBtn.addEventListener("click", e => {
    menuBtn.classList.toggle("open");
    menu.classList.toggle("show-menu");
});
