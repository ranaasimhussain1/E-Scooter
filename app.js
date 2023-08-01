const loginButton = document.getElementById("loginButton");
const signupButton = document.getElementById("signupButton");
loginButton.addEventListener("click", function () {
  window.location.href = "Login/LoginPage.html";
});

signupButton.addEventListener("click", function () {
  window.location.href = "Login/LoginPage.html";
});

//Hero Section Images carousel
const imgs = document.getElementById("imgs");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");
let totalImageWidth = 0;
const img = document.querySelectorAll("#imgs img");

let idx = 0;

let interval = setInterval(run, 8000);

function run() {
  idx++;
  changeImage();
}
totalImageWidth = img[0].width;

function changeImage() {
  if (idx > img.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = img.length - 1;
  }
  console.log(totalImageWidth);
  imgs.style.transform = `translateX(${-idx * totalImageWidth}px)`;
}
window.addEventListener("resize", handleResize);
function handleResize() {
  totalImageWidth = img[0].width;

  run();
}
function resetInterval() {
  clearInterval(interval);
  interval = setInterval(run, 5000);
}

rightBtn.addEventListener("click", () => {
  idx++;
  changeImage();
  resetInterval();
});

leftBtn.addEventListener("click", () => {
  idx--;
  changeImage();
  resetInterval();
});
const toggle = document.getElementById("toggle");
const nav = document.getElementById("nav");

toggle.addEventListener("click", () => nav.classList.toggle("active"));
