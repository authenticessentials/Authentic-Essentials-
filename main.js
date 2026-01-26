  
        // DOM Elements
        const navbar = document.getElementById('navbar');
        const heroContent = document.getElementById('hero-content');
        const productCards = document.querySelectorAll('.product-card');

        // Dynamic Header Scroll
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Entrance Animations on Load
        window.addEventListener('DOMContentLoaded', () => {
            // Initial Hero Entrance
            setTimeout(() => {
                heroContent.classList.add('visible');
            }, 300);

            // Scroll Reveal Observer
            const observerOptions = {
                threshold: 0.15,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, observerOptions);

            productCards.forEach(card => observer.observe(card));
        });

        // Smooth Scroll for Anchor Links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;

                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    const navHeight = 70; // Height of scrolled navbar
                    window.scrollTo({
                        top: targetElement.offsetTop - navHeight,
                        behavior: 'smooth'
                    });
                }
            });
        });
         const grid = document.querySelector('.cat-grid');
    const nextBtn = document.querySelector('.cat-btn.next');
    const prevBtn = document.querySelector('.cat-btn.prev');
    const catCards = document.querySelectorAll('.cat-card');
    const scrollAmount = () => grid.clientWidth * 0.9; // Scroll by 80% of grid width

    nextBtn.addEventListener('click', () => {
        grid.scrollBy({
            left: scrollAmount(),
            behavior: 'smooth'
        });
    });

    prevBtn.addEventListener('click', () => {
        grid.scrollBy({
            left: -scrollAmount(),
            behavior: 'smooth'
        });
    });
        const hamburger = document.getElementById('hamburger');
        const navLinks = document.getElementById('navLinks');

        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('open');
        });
        

const slides = [
    {
        image: "img/Gloden Blossom Jewel.jpeg",
        title: "Elevate Your <br><i>Everyday</i>",
        text: "Genuine, high-quality products curated to bring comfort<br>and authenticity to your daily life."
    },
    {
        image: "img/ibrahim-boran-m8YjB0noWiY-unsplash-compressed.jpg",
        title: "Professional <br><i>Event Planning</i>",
        text: "We go beyond selling products to tranforming your eventinto an unforgettable experience."
    },
    {
        image: "img/hero3.jpg",
        title: "Transform <br><i>Your Space</i>",
        text: "We decorate events where style meet substance and memories are made."
    }
];

const hero = document.getElementById("hero");
const title = document.getElementById("hero-title");
const text = document.getElementById("hero-text");
const tabs = document.querySelectorAll(".hero-tab");
const playPause = document.getElementById("playPause");

let current = 0;
let duration = 3000;
let startTime = null;
let rafId = null;
let isPlaying = true;

playPause.classList.add("pause");

function showSlide(index) {
    current = index;
    hero.style.background =
        `linear-gradient(rgba(0,0,0,.45), rgba(0,0,0,.45)), url('${slides[index].image}') center/cover no-repeat`;

    title.innerHTML = slides[index].title;
    text.innerHTML = slides[index].text;

    tabs.forEach(tab => {
        tab.classList.remove("active");
        tab.querySelector(".progress").style.width = "0%";
    });

    tabs[index].classList.add("active");
}

function animateProgress(timestamp) {
    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const percent = Math.min((elapsed / duration) * 100, 100);

    tabs[current].querySelector(".progress").style.width = percent + "%";

    if (percent < 100 && isPlaying) {
        rafId = requestAnimationFrame(animateProgress);
    } else if (percent >= 100) {
        nextSlide();
    }
}

function start() {
    isPlaying = true;
    playPause.classList.remove("play");
    playPause.classList.add("pause");
    startTime = null;
    rafId = requestAnimationFrame(animateProgress);
}

function pause() {
    isPlaying = false;
    playPause.classList.remove("pause");
    playPause.classList.add("play");
    cancelAnimationFrame(rafId);
}

function nextSlide() {
    startTime = null;
    showSlide((current + 1) % slides.length);
    start();
}

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        pause();
        showSlide(+tab.dataset.index);
        start();
    });
});

playPause.addEventListener("click", () => {
    isPlaying ? pause() : start();
});

/* Swipe support */
let startX = 0;
hero.addEventListener("touchstart", e => startX = e.touches[0].clientX);
hero.addEventListener("touchend", e => {
    const endX = e.changedTouches[0].clientX;
    if (Math.abs(startX - endX) > 50) {
        pause();
        current = startX > endX
            ? (current + 1) % slides.length
            : (current - 1 + slides.length) % slides.length;
        showSlide(current);
        start();
    }
});

/* Init */
showSlide(0);
start();

    document.addEventListener('DOMContentLoaded', () => {
        const dropdown = document.querySelector('.nav-links .dropdown');
        const dropToggle = dropdown.querySelector('.drop-trigger');

        // Toggle on arrow click (prevents closing immediately)
        dropToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            dropdown.classList.toggle('open');
        });

        // Close dropdown when clicking anywhere outside
        document.addEventListener('click', () => {
            dropdown.classList.remove('open');
        });

        // Prevent closing when clicking inside the dropdown
        dropdown.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    });