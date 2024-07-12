
// Set the current year in the footer
const yearSpan = document.getElementById('year');
yearSpan.textContent = new Date().getFullYear();

// Set the last modified date in the footer
const lastModifiedSpan = document.getElementById('lastModified');
lastModifiedSpan.textContent = document.lastModified;

// Display the review count
const reviewCountSpan = document.getElementById('reviewCount');
reviewCountSpan.textContent = localStorage.getItem('reviewCount') || 0;