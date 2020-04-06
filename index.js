const modal = document.querySelector(".modal");
const closebtn = document.querySelector(".close");
const videoBtn = document.querySelector(".video-btn");
const video = document.querySelector(".video");

videoBtn.onclick = function () {
  modal.style.display = "block";
};

closebtn.onclick = function () {
  modal.style.display = "none";
  video.src = video.src;
};
