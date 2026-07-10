// ===============================
// Mobile Menu
// ===============================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

// Close menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("show");

    });

});

// ===============================
// Dark / Light Theme
// ===============================

const themeBtn = document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {

    document.body.classList.add("dark");

    themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';

}

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        localStorage.setItem("theme", "dark");

        themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';

    } else {

        localStorage.setItem("theme", "light");

        themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';

    }

});

// ===============================
// Sticky Header Shadow
// ===============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 10px 25px rgba(0,0,0,.15)";

    } else {

        header.style.boxShadow = "none";

    }

});

// ===============================
// Scroll Reveal Animation
// ===============================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.2

});

document.querySelectorAll("section").forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});

// ===============================
// Current Year in Footer
// ===============================

const year = new Date().getFullYear();

const copyright = document.querySelector(".copyright");

if (copyright) {

    copyright.innerHTML = `© ${year} Akshay. All Rights Reserved.`;

}