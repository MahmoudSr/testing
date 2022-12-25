const navToggle = document.querySelector(".nav-toggle");

navToggle.addEventListener("click", () => {
  const navigation = document.querySelector(".nav__list");

  navigation.classList.toggle("toggle");
  navToggle.classList.toggle("change-icon");
  document.body.classList.toggle("lock");
});
