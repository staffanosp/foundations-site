const navToggle = () => {
  nav = document.getElementById("navigation");
  nav.classList.toggle("navigation--open");
};

//Hamburger menu
btnHamburger = document.getElementById("btnHamburger");
btnHamburger.addEventListener("click", navToggle);

//Menu items should close the menu
let navMenuItems = document.querySelectorAll(".navigation__menu-item");

for (const navMenuItem of navMenuItems) {
  navMenuItem.addEventListener("click", navToggle);
}
