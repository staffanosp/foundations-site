const navToggle = () => {
  const nav = document.getElementById("navigation");
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

//Calculate the radius for the hamburger menu clip path

const updateMenuClipCircle = () => {
  const root = document.querySelector(":root");

  const circleSize = 32; //Todo: read from CSS
  const circleMargin = 16; //Todo: read from CSS

  const x = window.innerWidth - (circleSize + circleMargin);
  const y = window.innerHeight - (circleSize + circleMargin);

  const r = Math.sqrt(y ** 2 + x ** 2);

  root.style.setProperty("--navigation__circle-size--open", `${r}px`);
};

updateMenuClipCircle();

window.addEventListener("resize", () => {
  updateMenuClipCircle();
});
