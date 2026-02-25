console.log("Link bio siap");

const links = document.querySelectorAll('.link');
const toggle = document.getElementById('toggleMode');
const body = document.body;
const enterBtn = document.getElementById("enterBtn");
const welcome = document.getElementById("welcome");
const clickSound = document.getElementById("clickSound");

/* =========================
   TYPING TEXT
========================= */
const text = "Muhammad Alfatih";
let i = 0;

function typing() {
  const typingEl = document.getElementById("typing");
  if (!typingEl) return; // biar tidak error

  if (i < text.length) {
    typingEl.innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 80);
  }
}

typing();

/* =========================
   ANIMASI MUNCUL TOMBOL
========================= */
links.forEach((link, index) => {
  link.style.opacity = "0";
  link.style.transform = "translateY(30px)";

  setTimeout(() => {
    link.style.transition = "all 0.6s ease";
    link.style.opacity = "1";
    link.style.transform = "translateY(0)";
  }, 200 * index);
});

/* =========================
   DARK MODE
========================= */
if (localStorage.getItem("mode") === "light") {
  body.classList.add("light");
}

if (toggle) {
  toggle.addEventListener("click", () => {
    body.classList.toggle("light");

    if (body.classList.contains("light")) {
      localStorage.setItem("mode", "light");
    } else {
      localStorage.setItem("mode", "dark");
    }
  });
}

/* =========================
   RIPPLE EFFECT
========================= */
document.querySelectorAll(".link").forEach(btn => {
  btn.addEventListener("click", function(e) {
    const ripple = document.createElement("span");
    ripple.classList.add("ripple");

    const rect = this.getBoundingClientRect();
    ripple.style.left = (e.clientX - rect.left) + "px";
    ripple.style.top = (e.clientY - rect.top) + "px";

    this.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);
  });
});

/* =========================
   STARS BACKGROUND
========================= */
const canvas = document.getElementById("stars");
if (canvas) {
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let stars = [];

  for (let i = 0; i < 100; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2,
      d: Math.random() * 1
    });
  }

  function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";

    stars.forEach(star => {
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
      ctx.fill();
    });

    moveStars();
  }

  function moveStars() {
    stars.forEach(star => {
      star.y += star.d;
      if (star.y > canvas.height) {
        star.y = 0;
        star.x = Math.random() * canvas.width;
      }
    });
  }

  setInterval(drawStars, 33);
}
document.addEventListener("mousemove", (e) => {
  const x = (window.innerWidth / 2 - e.clientX) / 100;
  const y = (window.innerHeight / 2 - e.clientY) / 100;
  canvas.style.transform = `translate(${x}px, ${y}px)`;
});


if (enterBtn) {
  enterBtn.addEventListener("click", () => {
    clickSound.play();

    welcome.style.opacity = "0";
    welcome.style.transition = "1s";

    setTimeout(() => {
      welcome.style.display = "none";
      document.body.classList.add("loaded");
    }, 1000);
  });
}


const ambient = document.getElementById("ambient");
if (ambient) ambient.play();

enterBtn.addEventListener("click", function(e) {
  const ripple = document.createElement("span");

  const rect = this.getBoundingClientRect();
  ripple.style.left = e.clientX - rect.left + "px";
  ripple.style.top = e.clientY - rect.top + "px";

  this.appendChild(ripple);
  setTimeout(() => ripple.remove(), 600);
});
