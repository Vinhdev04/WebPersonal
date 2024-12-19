const btnBar = document.querySelector(".toggle-btn");
console.log("🚀 ~ menuBtn :", btnBar);
const navbar = document.querySelector(".navbar");
console.log("🚀 ~ navbar :", navbar);
const navbarItem = document.querySelector(".navbar li");
console.log("🚀 ~ navbarItem :", navbarItem);

btnBar.addEventListener("click", function () {
  this.classList.toggle("click");
  navbar.classList.toggle("open");
});

//  # handle effect text
const textEffect = new Typed(".info-name", {
  strings: ["Frontend Developer", "Fix Bug", "Web Developer"],
  typeSpeed: 70, // Tốc độ gõ
  backSpeed: 40, // Tốc độ xóa (chậm hơn một chút so với typeSpeed)
  loop: true, // Lặp lại vô tận
});

// # handle dark/light mode
const darkIcon = document.querySelector("#moon-icon");
console.log("🚀 ~ darkIcon :", darkIcon);
const lightIcon = document.querySelector("#sun-icon");
console.log("🚀 ~ lightIcon:", lightIcon);
const toggleButton = document.getElementById("dark-mode-toggle");
toggleButton.addEventListener("click", (e) => {
  e.preventDefault();
  document.body.classList.toggle("light-theme");
  document.body.classList.toggle("dark-theme");
});
