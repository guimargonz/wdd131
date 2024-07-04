document.addEventListener("DOMContentLoaded", function() {
    const lastModified = document.lastModified;
    document.getElementById('last-modified').textContent = lastModified;

    const temperature = 25;
    const windSpeed = 15;


    function calculateWindChill(temp, windSpeed) {
        if (temp <= 10 && windSpeed > 4.8) {
            return (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(1) + '°C';
        } else {
            return 'N/A';
        }
    }

    document.getElementById('windchill').textContent = calculateWindChill(temperature, windSpeed);
});
