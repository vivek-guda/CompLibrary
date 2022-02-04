const burgerMenu = document.querySelector(".burger-menu");
const navSection = document.querySelector(".nav-section");
const toggleThemeBtn = document.querySelector(".toggle-theme-btn");

burgerMenu.addEventListener("click", () => {
  navSection.classList.toggle("active");
});

const darkThemeToggleBtn = () => {
  toggleThemeBtn.classList.remove("fa-moon");
  toggleThemeBtn.classList.add("fa-sun");
};

const lightThemeToggleBtn = () => {
  toggleThemeBtn.classList.add("fa-moon");
  toggleThemeBtn.classList.remove("fa-sun");
};

toggleThemeBtn.addEventListener("click", () => {
  toggleThemeBtn.classList.toggle("fa-moon");
  toggleThemeBtn.classList.toggle("fa-sun");
});
