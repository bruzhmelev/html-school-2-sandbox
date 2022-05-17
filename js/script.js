(() => {
  const navButton = document.querySelector("#menu__burger");
  const navList = document.querySelector("#menu__list");
  const logo = document.querySelector("#logo");

  navButton.addEventListener("click", (evt) => {
    evt.preventDefault();
    navList.classList.toggle("menu__list--showed");
    navButton.classList.toggle("crossed");
    // logo.classList.toggle("logo--hidden");
  });
})();
