"use strict";

// navbar variables
const nav = document.querySelector(".mobile-nav");
const navMenuBtn = document.querySelector(".nav-menu-btn");
const navCloseBtn = document.querySelector(".nav-close-btn");

// navToggle function
const navToggleFunc = function () {
  nav.classList.toggle("active");
};

navMenuBtn.addEventListener("click", navToggleFunc);
navCloseBtn.addEventListener("click", navToggleFunc);

// theme toggle variables
const themeBtn = document.querySelectorAll(".theme-btn");

for (let i = 0; i < themeBtn.length; i++) {
  themeBtn[i].addEventListener("click", function () {
    // toggle `light-theme` & `dark-theme` class from `body`
    // when clicked `theme-btn`
    document.body.classList.toggle("light-theme");
    document.body.classList.toggle("dark-theme");

    for (let i = 0; i < themeBtn.length; i++) {
      // When the `theme-btn` is clicked,
      // it toggles classes between `light` & `dark` for all `theme-btn`.
      themeBtn[i].classList.toggle("light");
      themeBtn[i].classList.toggle("dark");
    }
  });
}

const textEffect = new Typed(".name", {
  strings: ["Phạm&nbsp;Vinh", "A Frontend Developer", "A Web Developer"],
  typeSpeed: 70, // Tốc độ gõ
  backSpeed: 40, // Tốc độ xóa (chậm hơn một chút so với typeSpeed)
  loop: true, // Lặp lại vô tận
  onComplete: function () {
    // Khi textEffect hoàn thành, chạy textDescEffect
    const textDescEffect = new Typed(".sub", {
      strings: [
        "Programming is life. Bugs are the pain of life.",
        "Nice to meet you!...",
      ],
      typeSpeed: 20, // Tốc độ gõ
      backSpeed: 40, // Tốc độ xóa (chậm hơn một chút so với typeSpeed)
      loop: true, // Lặp lại vô tận
    });
  },
});
