const stars = document.querySelectorAll(".rating-star-icon");

stars.forEach((star, clickedIdx) => {
  star.addEventListener("click", () => {
    for (let i = 0; i < stars.length; i++) {
      if (i <= clickedIdx) {
        stars[i].classList.add("rating-star-icon-active");
      } else {
        stars[i].classList.remove("rating-star-icon-active");
      }
    }
  });
});
