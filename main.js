document.addEventListener("DOMContentLoaded", function () {
  // Navbar toggle functionality
  const nav = document.querySelector(".mobile-nav");
  const navMenuBtn = document.querySelector(".nav-menu-btn");
  const navCloseBtn = document.querySelector(".nav-close-btn");

  const navToggleFunc = function () {
    nav.classList.toggle("active");
  };

  navMenuBtn.addEventListener("click", navToggleFunc);
  navCloseBtn.addEventListener("click", navToggleFunc);

  // Theme toggle functionality
  const themeBtn = document.querySelectorAll(".theme-btn");

  themeBtn.forEach((button) => {
    button.addEventListener("click", function () {
      document.body.classList.toggle("light-theme");
      document.body.classList.toggle("dark-theme");

      themeBtn.forEach((btn) => {
        btn.classList.toggle("light");
        btn.classList.toggle("dark");
      });
    });
  });

  // Typed.js effect for name and sub-title
  const nameElement = document.querySelector(".name");
  if (nameElement) {
    new Typed(".name", {
      strings: ["Phạm&nbsp;Vinh", "A Frontend Developer", "A Web Developer"],
      typeSpeed: 70,
      backSpeed: 40,
      loop: true,
      fadeOut: false,
      onComplete: function () {
        // Initialize second Typed.js effect for sub-title after the first one finishes
        const subElement = document.querySelector(".sub");
        if (subElement) {
          new Typed(".sub", {
            strings: [
              "Programming is life. Bugs are the pain of life.",
              "Nice to meet you!...",
            ],
            typeSpeed: 20,
            backSpeed: 40,
            loop: true,
            fadeOut: false,
          });
        } else {
          console.error('Element with class "sub" not found.');
        }
      },
    });
  } else {
    console.error('Element with class "name" not found.');
  }

  // Typed.js effect for the About page (if .text element exists)
  const textElement = document.querySelector(".text");
  if (textElement) {
    new Typed(".text", {
      strings: ["Junior Programmer", "Developer", "Software Engineer"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      fadeOut: false,
    });
  } else {
    console.error('Element with class "text" not found.');
  }
});
