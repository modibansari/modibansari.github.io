// =========================
// THEME TOGGLE
// =========================

const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Check saved theme
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    body.classList.add("dark-mode");
    themeToggle.innerHTML =
        '<i class="fa-solid fa-sun"></i>';
}

// Toggle Theme
themeToggle.addEventListener("click", () => {

    body.classList.toggle("dark-mode");

    const isDark =
        body.classList.contains("dark-mode");

    if (isDark) {
        localStorage.setItem("theme", "dark");

        themeToggle.innerHTML =
            '<i class="fa-solid fa-sun"></i>';
    } else {

        localStorage.setItem("theme", "light");

        themeToggle.innerHTML =
            '<i class="fa-solid fa-moon"></i>';
    }
});

// =========================
// AUTO THEME (SYSTEM MODE)
// =========================

if (!localStorage.getItem("theme")) {

    const prefersDark =
        window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches;

    if (prefersDark) {
        body.classList.add("dark-mode");

        themeToggle.innerHTML =
            '<i class="fa-solid fa-sun"></i>';
    }
}

// =========================
// SMOOTH SCROLL
// =========================

document.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target =
            document.querySelector(
                this.getAttribute("href")
            );

        if (target) {

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});

// =========================
// SCROLL ANIMATION
// =========================

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");
            }
        });

    },

    {
        threshold: 0.15
    }
);

// Elements to animate
document.querySelectorAll(
`
.section,
.skill-card,
.project-card,
.timeline-card,
.cert-card,
.about-card,
.education-card,
.contact-card
`
)
.forEach(el => {

    el.classList.add("hidden");

    observer.observe(el);
});

// =========================
// ACTIVE NAV LINK
// =========================

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll(
        ".nav-links a"
    );

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 200;

        if (scrollY >= sectionTop) {

            current =
                section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${current}`
        ) {
            link.classList.add("active");
        }
    });
});

// =========================
// LOADING ANIMATION
// =========================

window.addEventListener("load", () => {

    document.body.classList.add("loaded");
});
