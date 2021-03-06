const burgerMenu = document.querySelector(".burger-menu");
const navSection = document.querySelector(".nav-section");
const toggleThemeBtn = document.querySelector(".toggle-theme-btn");
const body = document.querySelector("body");
const root = document.querySelector(":root");

burgerMenu.addEventListener("click", () => {
  navSection.classList.toggle("active");
});

const addDarkTheme = () => {
  body.style.backgroundColor = "#072142";
  body.style.color = "#e8e6e3";
  root.style.setProperty("--secondary-text-color", "#aaa");
  root.style.setProperty("--sidebar-color", "#041630");
  root.style.setProperty("--footer-color", "#041225");
  root.style.setProperty("--aside-color", "#091d38");
};

const addLightTheme = () => {
  body.style.backgroundColor = "#f5f5f7";
  body.style.color = "#3e4152";
  root.style.setProperty("--secondary-text-color", "#333");
  root.style.setProperty("--sidebar-color", "#e4e4e4");
  root.style.setProperty("--footer-color", "#ddd");
  root.style.setProperty("--aside-color", "#eee");
};

const darkThemeToggleBtn = () => {
  toggleThemeBtn.classList.remove("fa-moon");
  toggleThemeBtn.classList.add("fa-sun");
};

const lightThemeToggleBtn = () => {
  toggleThemeBtn.classList.add("fa-moon");
  toggleThemeBtn.classList.remove("fa-sun");
};

window.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("theme")) {
    addDarkTheme();
    darkThemeToggleBtn();
  } else {
    addLightTheme();
    lightThemeToggleBtn();
  }
});

toggleThemeBtn.addEventListener("click", () => {
  if (toggleThemeBtn.classList.contains("fa-moon")) {
    darkThemeToggleBtn();
    addDarkTheme();
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.removeItem("theme");
    lightThemeToggleBtn();
    addLightTheme();
  }
});
