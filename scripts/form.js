// Product array of objects
const products = [
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
    { id: 3, name: 'Product 3' },
    { id: 4, name: 'Product 4' },
    { id: 5, name: 'Product 5' }
];

// Populate the select element with product options
const productNameSelect = document.getElementById('productName');
products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.name;
    option.textContent = product.name;
    productNameSelect.appendChild(option);
});

// Set the current year in the footer
const yearSpan = document.getElementById('year');
yearSpan.textContent = new Date().getFullYear();

// Set the last modified date in the footer
const lastModifiedSpan = document.getElementById('lastModified');
lastModifiedSpan.textContent = document.lastModified;

// Handle the form submission and review counter
document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();  // Prevent the form from submitting normally

    // Increment the review counter in localStorage
    let reviewCount = localStorage.getItem('reviewCount') || 0;
    reviewCount++;
    localStorage.setItem('reviewCount', reviewCount);

    // Redirect to the review.html page
    window.location.href = 'review.html';
});
