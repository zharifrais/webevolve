document.addEventListener("DOMContentLoaded", () => {

    // Fade in page on load
    const page = document.querySelector(".fade-page");
    if (page) {
        setTimeout(() => {
            page.classList.add("show");
        }, 100);
    }

    // Fade in on scroll (Intersection Observer)
    const fadeElements = document.querySelectorAll(".fade-scroll");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    observer.unobserve(entry.target); // animasi hanya sekali
                }
            });
        },
        {
            threshold: 0.2
        }
    );

    fadeElements.forEach(el => observer.observe(el));
});
