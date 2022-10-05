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
const debounce = (func, delay) => {
  let inDebounce;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(inDebounce);
    inDebounce = setTimeout(() => func.apply(context, args), delay);
  };
};

const updateMenuClipCircleSize = () => {
  const root = document.querySelector(":root");

  const circleSize = Number(
    getComputedStyle(root)
      .getPropertyValue("--navigation__circle-size")
      .slice(0, -2)
  );

  const circleMargin = Number(
    getComputedStyle(root)
      .getPropertyValue("--navigation__circle-margin")
      .slice(0, -2)
  );

  const x = window.innerWidth - (circleSize + circleMargin);
  const y = window.innerHeight - (circleSize + circleMargin);

  const r = Math.ceil(Math.sqrt(y ** 2 + x ** 2));

  root.style.setProperty("--navigation__circle-size--open", `${r}px`);
};

updateMenuClipCircleSize();

window.addEventListener("resize", debounce(updateMenuClipCircleSize, 100));

//Hack to make background video play on iphone even when in low battery mode
const startVideo = () => {
  const videoElement = document.getElementById("home__video-bg");
  if (videoElement.playing) {
  } else {
    videoElement.play();
  }
};

startVideo();

const root = document.querySelector(":root");
root.addEventListener("touchstart", startVideo, false);
