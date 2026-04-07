/* Active section highlight */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.clientHeight;
/* Check if page scroll is inside this section */
    if (pageYOffset >= sectionTop &&
        pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });
/* Update active class in navbar */
  navLinks.forEach(link => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });

});


/* Theme toggle
   Switches Light / Dark mode
*/
document.addEventListener("DOMContentLoaded", function () {

  const btn = document.getElementById("theme-toggle");

  // تحميل الحالة
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    btn.textContent = "☀️"; // شمس
  } else {
    btn.textContent = "🌙"; // قمر
  }

  btn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // حفظ الحالة + تغيير الإيموجي
    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
      btn.textContent = "☀️";
    } else {
      localStorage.setItem("theme", "light");
      btn.textContent = "🌙";
    }
  });

});
