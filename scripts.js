document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const overlay = document.querySelector(".overlay");
    const mobileNav = document.querySelector(".mobile-nav");
    const closeBtn = document.querySelector(".close-btn");
    const navLinks = document.querySelectorAll(".mobile-nav ul li a");
    const scrollToTopBtn = document.querySelector(".scroll-to-top");
    const getStartedButton = document.querySelector(".contact-intro-btn");
    const contactSection = document.querySelector("#contact");

    // Toggle mobile navigation
    menuToggle.addEventListener("click", function () {
        mobileNav.classList.toggle("open");
    });

    // Close mobile navigation
    closeBtn.addEventListener("click", function () {
        mobileNav.classList.remove("open");
    });

    // Close mobile navigation on nav link click
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            mobileNav.classList.remove("open");
        });
    });

    // Show/hide scroll to top button and portfolio item animation
    window.addEventListener("scroll", function () {
        if (window.scrollY > 200) {
            scrollToTopBtn.style.display = "flex";
        } else {
            scrollToTopBtn.style.display = "none";
        }

        const portfolioItems = document.querySelectorAll(".portfolio-item");
        portfolioItems.forEach(item => {
            const rect = item.getBoundingClientRect();
            if (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
                item.classList.add("in-view");
                item.classList.remove("out-of-view");
            } else {
                item.classList.add("out-of-view");
                item.classList.remove("in-view");
            }
        });
    });

    // Scroll to top button click
    scrollToTopBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // Smooth scroll to contact section when get started button is clicked
    getStartedButton.addEventListener("click", function () {
        contactSection.scrollIntoView({ behavior: "smooth" });
    });

    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', function() {
            card.classList.toggle('active');
        });
    });
});
