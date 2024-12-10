const apiKey = '82869f49849f04c34c3fff6f8e96ef9d'; // Replace with your API key
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

document.getElementById('fetch-weather-btn').addEventListener('click', () => {
    const city = document.getElementById('city-input').value;
    if (city.trim() === '') {
        alert('Please enter a city name');
        return;
    }
    fetchWeatherData(city);
});

async function fetchWeatherData(city) {
    try {
        const response = await fetch(`${apiUrl}?q=${city}&appid=${apiKey}&units=metric`);
        if (!response.ok) {
            throw new Error('City not found');
        }
        const data = await response.json();
        displayWeatherData(data);
    } catch (error) {
        alert(error.message);
    }
}

function displayWeatherData(data) {
    const weatherDisplay = document.getElementById('weather-display');
    weatherDisplay.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;
}
