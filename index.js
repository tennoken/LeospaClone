const modal = document.querySelector(".modal");
const close = document.querySelector(".close");
const videoBtn = document.querySelector(".video-btn");
const video = document.querySelector(".video");

videoBtn.onclick = function() {
  modal.style.display = "block";
};

close.onclick = function() {
  modal.style.display = "none";
  video.src = video.src;
};

const swiper = new Swiper(".swiper-container", {
  slidesPerView: 4,
  centeredSlides: false,
  spaceBetween: 10,
  grabCursor: true
});
