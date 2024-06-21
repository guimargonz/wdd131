document.addEventListener("DOMContentLoaded", () => {
    // Hamburger menu toggle
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('show');
        hamburger.textContent = navLinks.classList.contains('show') ? 'X' : '☰';
    });

    // Dynamic footer information
    const yearSpan = document.getElementById('year');
    const lastModifiedSpan = document.getElementById('lastModified');

    yearSpan.textContent = new Date().getFullYear();
    lastModifiedSpan.textContent = document.lastModified;
});
