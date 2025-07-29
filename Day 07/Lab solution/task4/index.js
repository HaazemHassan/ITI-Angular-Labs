var images = ["images/image1.jpg", "images/image2.jpg", "images/image3.jpg"];

var slideImage = document.getElementById("slideImage");
var prevBtn = document.getElementById("prevBtn");
var playBtn = document.getElementById("playBtn");
var stopBtn = document.getElementById("stopBtn");
var nextBtn = document.getElementById("nextBtn");

var currentIndex = 0;
var intervalId = null;
var isSlidePlaying = false;

function showImage(index) {
  if (index >= 0 && index < images.length) {
    slideImage.src = images[index];
  } else return;
}

function stopSlideshow() {
  clearInterval(intervalId);
  intervalId = null;
  isSlidePlaying = false;
}

function playSlideshow() {
  if (intervalId === null) {
    intervalId = setInterval(nextImage, 1500);
    isSlidePlaying = true;
  }
}

function nextImage(forward = true) {
  if (forward) {
    currentIndex = (currentIndex + 1) % images.length;
  } else {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
  }
  showImage(currentIndex);
}

nextBtn.addEventListener("click", function () {
  var slideWasPlaying = isSlidePlaying;
  stopSlideshow();

  nextImage();
  if (slideWasPlaying) playSlideshow();
});

prevBtn.addEventListener("click", function () {
  var slideWasPlaying = isSlidePlaying;
  stopSlideshow();
  nextImage(false);
  if (slideWasPlaying) playSlideshow();
});

playBtn.addEventListener("click", function () {
  playSlideshow();
});

stopBtn.addEventListener("click", function () {
  stopSlideshow();
});

showImage(currentIndex);
