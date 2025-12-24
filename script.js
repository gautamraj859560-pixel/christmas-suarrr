// ❄️ Snow animation
const canvas = document.getElementById("snow");
const ctx = canvas.getContext("2d");

let w = canvas.width = window.innerWidth;
let h = canvas.height = window.innerHeight;

let flakes = Array.from({ length: 120 }, () => ({
  x: Math.random() * w,
  y: Math.random() * h,
  r: Math.random() * 3 + 1,
  d: Math.random() + 1
}));

function drawSnow() {
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = "white";
  ctx.beginPath();
  flakes.forEach(f => {
    ctx.moveTo(f.x, f.y);
    ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
  });
  ctx.fill();
  moveSnow();
}

function moveSnow() {
  flakes.forEach(f => {
    f.y += f.d;
    if (f.y > h) {
      f.y = 0;
      f.x = Math.random() * w;
    }
  });
}

setInterval(drawSnow, 30);

window.onresize = () => {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
};

// 🎞️ Slideshow
let slides = document.querySelectorAll(".slide");
let index = 0;

setInterval(() => {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}, 2000);
