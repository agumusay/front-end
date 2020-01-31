const menuBtn = document.querySelector(".menu-btn");
const hamburger = document.querySelector(".menu-btn-burger");
const nav = document.querySelector(".nav");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".menu-nav-item");

let showmenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showmenu) {
    hamburger.classList.add("open");
    nav.classList.add("open");
    menuNav.classList.add("open");
    navItems.forEach(item => item.classList.add("open"));

    showmenu = true;
  } else {
    hamburger.classList.remove("open");
    nav.classList.remove("open");
    menuNav.classList.remove("open");
    navItems.forEach(item => item.classList.remove("open"));

    showmenu = false;
  }
}
