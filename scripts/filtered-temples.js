document.addEventListener("DOMContentLoaded", () => {

    // Hamburger menu toggle
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('show');
        hamburger.textContent = navLinks.classList.contains('show') ? 'X' : '☰';
    });

    // Array of Temple Objects
    const temples = [
        {
            templeName: "Aba Nigeria",
            location: "Aba, Nigeria",
            dedicated: "2005, August, 7",
            area: 11500,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
        },
        {
            templeName: "Manti Utah",
            location: "Manti, Utah, United States",
            dedicated: "1888, May, 21",
            area: 74792,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
        },
        {
            templeName: "Payson Utah",
            location: "Payson, Utah, United States",
            dedicated: "2015, June, 7",
            area: 96630,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
        },
        {
            templeName: "Yigo Guam",
            location: "Yigo, Guam",
            dedicated: "2020, May, 2",
            area: 6861,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
        },
        {
            templeName: "Washington D.C.",
            location: "Kensington, Maryland, United States",
            dedicated: "1974, November, 19",
            area: 156558,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
        },
        {
            templeName: "Lima Perú",
            location: "Lima, Perú",
            dedicated: "1986, January, 10",
            area: 9600,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
        },
        {
            templeName: "Mexico City Mexico",
            location: "Mexico City, Mexico",
            dedicated: "1983, December, 2",
            area: 116642,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
        },
        // Add three more temple objects here
        {
            templeName: "Salt Lake",
            location: "Salt Lake City, Utah, United States",
            dedicated: "1893, April, 6",
            area: 253015,
            imageUrl: "https://www.churchofjesuschrist.org/imgs/92c33bcbf9cf85483e008d6871f8ced5f6d7b661/full/320%2C/0/default"
        },
        {
            templeName: "Freiberg Germany",
            location: "Freiberg, Germany",
            dedicated: "1985, June, 29",
            area: 14758,
            imageUrl: "https://www.churchofjesuschrist.org/imgs/0dfd23ae4f947c0a0a505e5c142de5ee2c51d91c/full/320%2C/0/default"
        },
        {
            templeName: "Rome Italy",
            location: "Rome, Italy",
            dedicated: "2019, March, 10",
            area: 40600,
            imageUrl: "https://www.churchofjesuschrist.org/imgs/17e2c70d687fffedfe115197e57fa8f5d1d369bb/full/320%2C/0/default"
        }
    ];

    // Function to create a temple card
    const createTempleCard = (temple) => {
        const figure = document.createElement('figure');

        const img = document.createElement('img');
        img.src = temple.imageUrl;
        img.alt = temple.templeName;
        img.loading = 'lazy';

        const figcaption = document.createElement('figcaption');
        figcaption.innerHTML = `
            <h3>${temple.templeName}</h3>
            <p>Location: ${temple.location}</p>
            <p>Dedicated: ${temple.dedicated}</p>
            <p>Area: ${temple.area} sq ft</p>
        `;

        figure.appendChild(img);
        figure.appendChild(figcaption);

        return figure;
    };

    // Function to render temples based on filter
    const renderTemples = (filterFn = () => true) => {
        const gallery = document.querySelector('.gallery');
        gallery.innerHTML = ''; // Clear the gallery
        temples.filter(filterFn).forEach(temple => {
            gallery.appendChild(createTempleCard(temple));
        });
    };

    // Event listeners for filtering
    document.querySelector('.nav-links').addEventListener('click', (event) => {
        if (event.target.tagName === 'A') {
            const filter = event.target.textContent.toLowerCase();
            switch (filter) {
                case 'home':
                    renderTemples();
                    break;
                case 'old':
                    renderTemples(temple => new Date(temple.dedicated).getFullYear() < 1900);
                    break;
                case 'new':
                    renderTemples(temple => new Date(temple.dedicated).getFullYear() > 2000);
                    break;
                case 'large':
                    renderTemples(temple => temple.area > 90000);
                    break;
                case 'small':
                    renderTemples(temple => temple.area < 10000);
                    break;
            }
        }
    });

    // Initial render
    renderTemples();

    // Dynamic footer information
    const yearSpan = document.getElementById('year');
    const lastModifiedSpan = document.getElementById('lastModified');

    yearSpan.textContent = new Date().getFullYear();
    lastModifiedSpan.textContent = document.lastModified;
});
