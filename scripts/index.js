const menuButton = document.querySelector(".header__burger");
const navMenu = document.querySelector(".header__menu");
const logoMenu = document.querySelector(".header__logo");
const formButton = document.querySelector(".register__button");
const formEmail = document.querySelector(".register__email");
const menuHeader = document.querySelector(".header");

menuButton.addEventListener("click", function (evt) {
  menuButton.classList.toggle("header__burger_active");
  logoMenu.classList.toggle("header__logo_hidden");
  navMenu.classList.toggle("header__menu_open");
  menuHeader.classList.toggle("header_open");
});
formButton.addEventListener("click", function (evt) {
  formButton.innerHTML = "Спасибо!";
});
formEmail.addEventListener("click", function (evt) {
  if (formEmail.value === "Ваша почта") {
    formEmail.value = "";
  }
});
