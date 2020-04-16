const modal = document.querySelector(".modal");
const closebtn = document.querySelector(".close");
const videoBtn = document.querySelector(".video-btn");
const video = document.querySelector(".video");
const navicon = document.querySelector(".navicon");
const navMenu = document.querySelector(".nav-menu");

videoBtn.addEventListener("click", function () {
  modal.style.display = "block";
});

closebtn.addEventListener("click", function () {
  modal.style.display = "none";
  video.src = video.src;
});

navicon.addEventListener("click", function () {
  navMenu.classList.toggle("open");
});
