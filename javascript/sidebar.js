const toggleAsideBtn = document.querySelector(".toggle-aside-btn");
const aside = document.querySelector(".aside");

toggleAsideBtn.addEventListener("click", () => {
  toggleAsideBtn.classList.toggle("fa-chevron-down");
  toggleAsideBtn.classList.toggle("fa-chevron-up");
  aside.classList.toggle("aside-active");
});
