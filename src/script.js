const navToggle = () => {
  nav = document.getElementById("navigation");
  nav.classList.toggle("navigation--open");
};

//Hamburger menu
btnHamburger = document.getElementById("btnHamburger");
btnHamburger.addEventListener("click", navToggle);

//All items that should close (toggle) the menu
let navMenuToggleItems = document.querySelectorAll(".navigation__menu-toggle");

for (const navMenuToggleItem of navMenuToggleItems) {
  navMenuToggleItem.addEventListener("click", navToggle);
}
