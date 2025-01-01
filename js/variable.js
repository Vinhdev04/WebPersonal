export let params = {
  q: "",
  sort: "",
  order: "",
  page: 1,
  limit: 9,
};

// TODO: Mobile navigation
export const nav = document.querySelector(".mobile-nav");
export const navMenuBtn = document.querySelector(".nav-menu-btn");
export const navCloseBtn = document.querySelector(".nav-close-btn");

// TODO: HANDLE SHOW/HIDE BOT-SOCIAL
export const bot = document.querySelector(".bot__box");
export const botSocials = document.querySelector(".bot__social");

// TODO: Typed.js effect for name and sub-title
export const nameElement = document.querySelector(".name");
export const subElement = document.querySelector(".sub");

// TODO: Typed.js effect for the About page (if .text element exists)
export const textElement = document.querySelector(".text");

// TODO: HANDLE QUESTION/ANSWER FAQS
export const faq = document.querySelectorAll(".faq__box");

// TODO: Hiển thị modal
export const btnShowModal = document.querySelectorAll(".btn-read");
export const modal = document.querySelector(".project__modal");
export const closeModal = document.querySelector(".control i");
