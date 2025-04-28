var typed = new Typed(".gradient", {
  strings: [
    "Full Stack Developer",
    "UI/UX Developer",
    "Java Programmer",
    "Web developer",
  ],
  typeSpeed: 100,
  backSpeed: 30,
  backDelay: 1000,
  loop: true,
});
const sun = document.querySelector("#sun");
const moon = document.querySelector("#moon");
const body = document.querySelector("body");
const galaxy = document.querySelector(".back-vid");
const blackholeBox = document.querySelector(".blackhole-box");
const herovidbox = document.querySelector(".hero-vid-box");
const progressLine = document.querySelectorAll(".progress-line");
const progressBar = document.querySelectorAll(".progress-bar");
const gradient = document.querySelectorAll(".gradient");

moon.addEventListener("click", () => {
  moon.style.display = "none";
  sun.style.display = "block";
  galaxy.style.display = "block";
  blackholeBox.style.display = "block";
  progressLine.forEach((line) => {
    line.classList.add("gray-background");
  });
  progressBar.forEach((line) => {
    line.classList.add("gray-backgroundBar");
  });
});
sun.addEventListener("click", () => {
  sun.style.display = "none";
  moon.style.display = "block";
  galaxy.style.display = "none";
  blackholeBox.style.display = "none";
  progressLine.forEach((line) => {
    line.classList.remove("gray-background");
  });
  progressBar.forEach((line) => {
    line.classList.remove("gray-backgroundBar");
  });
});

// form validation
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", function (e) {
    const name = form.elements["name"].value.trim();
    const email = form.elements["email"].value.trim();
    const subject = form.elements["subject"].value.trim();
    const message = form.elements["message"].value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !subject || !message) {
      e.preventDefault(); // Stop the form from submitting
      alert("Please fill in all fields.");
      return;
    }

    if (!emailRegex.test(email)) {
      e.preventDefault();
      alert("Please enter a valid email address.");
      return;
    }
  });
});
//  media query
const hide = document.querySelector("#hide");
const ThreeDot = document.querySelector(".Threedot");
const cross = document.querySelector(".cross");
const navLinks = document.querySelectorAll("#hide a");
ThreeDot.addEventListener("click", () => {
  hide.style.display = "block";
  ThreeDot.style.display = "none";
  cross.style.display = "block";
});

function closeNav() {
  hide.style.display = "none";
  cross.style.display = "none";
  ThreeDot.style.display = "block";
}
cross.addEventListener("click", closeNav);
// Close navbar when any link is clicked
navLinks.forEach((link) => {
  link.addEventListener("click", closeNav);
});
//
document.addEventListener("DOMContentLoaded", () => {
  const skillsSection = document.getElementById("Skills");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(async (entry) => {
        // When 20% of the Skills section is visible
        if (entry.isIntersecting && skillsSection.dataset.loaded === "false") {
          try {
            // Fetch content from the skills-content.html
            const response = await fetch("skills-content.html");
            const html = await response.text();

            // Insert the fetched content into the Skills section
            skillsSection.innerHTML = html;

            // Mark as loaded
            skillsSection.dataset.loaded = "true";

            // Stop observing the section once it has been loaded
            observer.unobserve(skillsSection);
          } catch (error) {
            console.error("Error loading skills content:", error);
          }
        }
      });
    },
    {
      root: null,
      threshold: 0.2, // Trigger when 20% of the section is visible
    }
  );

  // Start observing the Skills section
  observer.observe(skillsSection);
});
document.addEventListener("DOMContentLoaded", function () {
  const animatedElements = document.querySelectorAll(
    ".progress-line span, .path-1, .path-2, .path-3, .path-4, .path-5, .path-6"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Add a delay based on index
          entry.target.style.animationPlayState = "running";
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  animatedElements.forEach((el) => {
    observer.observe(el);
  });
});
