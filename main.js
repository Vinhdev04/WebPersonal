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

// TODO: HANDLE SLIDER GALLERY (ABOUT-PAGE)
document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".Gallery_Splide", {
    type: "loop",
    perPage: 5,
    gap: "20px", // Default gap
    autoplay: true,
    loop: true,
    breakpoints: {
      1200: {
        perPage: 4,
      },
      1100: {
        perPage: 3,
      },
      1069: {
        perPage: 3,
      },
      768: {
        perPage: 2,
      },
      576: {
        perPage: 1,
      },
    },
  });

  splide.mount();
});

// TODO: HANDLE QUESTION/ANSWER FAQS
const faq = document.querySelectorAll(".faq__box");
faq.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("show__answer");
  });
});

// TODO: HANDLE SLIDE FEEDBACK
document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".feedback_Splide", {
    type: "loop",
    perPage: 3,
    gap: "20px", // Default gap
    autoplay: true,
    loop: true,
    breakpoints: {
      1200: {
        perPage: 4,
      },
      1100: {
        perPage: 3,
      },
      1069: {
        perPage: 3,
      },
      768: {
        perPage: 2,
      },
      576: {
        perPage: 1,
      },
    },
  });

  splide.mount();
});

const btnShowModal = document.querySelectorAll(".btn-read"); // Chọn tất cả các nút .btn-read
const modal = document.querySelector(".project__modal"); // Lấy modal
const closeModal = document.querySelector(".control i"); // Lấy nút đóng modal

console.log(btnShowModal);

// Hiển thị modal khi click vào bất kỳ nút "Read More"
btnShowModal.forEach((item) => {
  console.log(item);

  item.addEventListener("click", function () {
    modal.style.display = "flex"; // Hiển thị modal
  });
});

// Đóng modal khi click vào nút đóng (X)
closeModal.addEventListener("click", function () {
  modal.style.display = "none"; // Ẩn modal
});

// Đóng modal khi click vào body (ngoài modal content)
document.addEventListener("click", function (e) {
  // Kiểm tra nếu click vào body mà không phải trong modal
  if (
    !modal.contains(e.target) &&
    !Array.from(btnShowModal).includes(e.target)
  ) {
    modal.style.display = "none"; // Ẩn modal
  }
});
