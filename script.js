const getWeatherBtn = document.getElementById("getWeatherBtn");
const weatherDataDiv = document.getElementById("weatherData");

getWeatherBtn.addEventListener("click", () => {
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={4929ccc13d3c700c550ba9093c80cd28}";
    
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherDescription = data.weather[0].description;
            weatherDataDiv.textContent = `Current weather in London: ${weatherDescription}`;
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
        });
});