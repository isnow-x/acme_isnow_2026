const questions = document.querySelectorAll(".qnalist details");

/*
  let c = a.getAttribute('title')
  a.setAttribute(b,c)  a에서b 속성의 값을 c로 변경
  대상.removeAttribute(속성명)
  
  속성의 존재 유무
  대상.hasAttribute(속성명)  true, false
*/
questions.forEach(question => {
  question.addEventListener("click", e => {
    e.preventDefault();
    //open 상태 확인
    let isOpen = question.hasAttribute("open");

    //모든 details에서 open 제거
    questions.forEach(q => {
      q.removeAttribute("open");
    });
    //isOpen true면 접고, isOpen false 열기
    // if (isOpen === false) {
    if (!isOpen) {
      question.setAttribute("open", "");
    }
  });
});

/*
questions.forEach(q => {
  q.addEventListener("click", () => {
    let parent = q.parentElement.parentElement;
    let siblings = [...parent.children];
    siblings.forEach(sibling => {
      if (parent !== sibling) {
        sibling.querySelector("details").removeAttribute("open");
      }
    });
  });
});
*/

// swiper
const slideWrapper = new Swiper(".slidewrapper", {
  direction: "horizontal",
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
const csprevBtn = document.querySelector(".slidewrapper .swiper-button-prev");
const csnextBtn = document.querySelector(".slidewrapper .swiper-button-next");

csprevBtn.addEventListener("click", () => {
  slideWrapper.slidePrev();
});
csnextBtn.addEventListener("click", () => {
  slideWrapper.slideNext();
});
