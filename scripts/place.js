document.addEventListener("DOMContentLoaded", function () {
    const {lastModified} = document;
    document.getElementById('last-modified').textContent = lastModified;

    const temperature = 25;
    const windSpeed = 15;


    function calculateWindChill(temp, windSpeed) {
        if (temp <= 10 && windSpeed > 4.8) {
            return (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(1) + '°C';
        } 
        else {
            return "Wind chill calculation is only valid for temperatures below 10°C and wind speeds above 4.8 km/h.";
        }
    }

    document.getElementById('windchill').textContent = calculateWindChill(temperature, windSpeed);
});
