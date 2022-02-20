const showToast = document.querySelector(".show-toast-btn");
const demoToast = document.querySelector(".demo-toast");
const closeToast = document.querySelector(".demo-toast .fa-times");

showToast.addEventListener("click", () => {
  demoToast.classList.add("demo-toast-active");
  setTimeout(() => {
    demoToast.classList.remove("demo-toast-active");
  }, 3000);
});

closeToast.addEventListener("click", () => {
  demoToast.classList.remove("demo-toast-active");
});
