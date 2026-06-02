import { renderHeader } from "./module/header.js";
import { renderFooter } from "./module/footer.js";
renderHeader();
renderFooter();

/* 
window에 스크롤이 생기면 할일
  그 스크롤양이 0보다 크면 body에 active 추가
  0이면 active 제거
*/
// const body = document.body;
const header = document.querySelector("body > header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
});

// swiper
const slideWrapper = new Swiper(".slidewrapper", {
  direction: "horizontal",
  loop: true,
});

const csprevBtn = document.querySelector(".slidewrapper .swiper-button-prev");
const csnextBtn = document.querySelector(".slidewrapper .swiper-button-next");

csprevBtn.addEventListener("click", () => {
  slideWrapper.slidePrev();
});
csnextBtn.addEventListener("click", () => {
  slideWrapper.slideNext();
});
