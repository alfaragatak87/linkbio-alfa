console.log("Link bio siap");
const links = document.querySelectorAll('.link');
const toggle = document.getElementById('toggleMode');
const body = document.body;

// animasi muncul tombol
links.forEach((link, i) => {
  link.style.opacity = "0";
  link.style.transform = "translateY(20px)";

  setTimeout(() => {
    link.style.transition = "0.5s";
    link.style.opacity = "1";
    link.style.transform = "translateY(0)";
  }, 200 * i);
});

// cek mode tersimpan
if (localStorage.getItem("mode") === "light") {
  body.classList.add("light");
  toggle.textContent = "☀️ Light Mode";
}

toggle.addEventListener("click", () => {
  body.classList.toggle("light");

  if (body.classList.contains("light")) {
    toggle.textContent = "☀️ Light Mode";
    localStorage.setItem("mode", "light");
  } else {
    toggle.textContent = "🌙 Dark Mode";
    localStorage.setItem("mode", "dark");
  }
});