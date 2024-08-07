document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const overlay = document.querySelector('.overlay');
    const mobileNav = document.querySelector('.mobile-nav');
    const closeBtn = document.querySelector('.close-btn');
    const scrollToTopBtn = document.querySelector('.scroll-to-top');
    const portfolioSection = document.querySelector('#portfolio');

    // Toggle mobile navigation menu
    menuToggle.addEventListener('click', () => {
        overlay.style.display = 'block';
        mobileNav.classList.add('open');
        portfolioSection.style.display = 'none'; // Hide portfolio when mobile nav is open
    });

    closeBtn.addEventListener('click', () => {
        mobileNav.classList.remove('open');
        overlay.style.display = 'none';
        portfolioSection.style.display = 'block'; // Show portfolio when mobile nav is closed
    });

    document.querySelectorAll('.mobile-nav ul li a').forEach(navLink => {
        navLink.addEventListener('click', () => {
            mobileNav.classList.remove('open');
            overlay.style.display = 'none';
            portfolioSection.style.display = 'block'; // Show portfolio when mobile nav link is clicked
        });
    });

    // Show scroll-to-top button on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    // Scroll to top functionality
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Fade-in and fade-out portfolio items
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    const checkIfInView = () => {
        const windowHeight = window.innerHeight;

        portfolioItems.forEach(item => {
            const rect = item.getBoundingClientRect();
            if (rect.top < windowHeight && rect.bottom > 0) {
                item.classList.add('in-view');
                item.classList.remove('out-of-view');
            } else {
                item.classList.add('out-of-view');
                item.classList.remove('in-view');
            }
        });
    };

    checkIfInView();

    window.addEventListener('scroll', checkIfInView);
});
