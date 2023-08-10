const getWeatherBtn = document.getElementById("getWeatherButton");
const weatherDataDiv = document.getElementById("weatherData");

getWeatherBtn.addEventListener("click", () => {
    // const apiUrl1 = "https://api.openweathermap.org/geo/1.0/direct?q=India&appi?d=117a142046bf80b24ded8dbab6fbedd3";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=117a142046bf80b24ded8dbab6fbedd3"

    
	fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherDescription = data.weather[0].main;
            weatherDataDiv.textContent = `Current weather in London: ${weatherDescription}`;
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
        });

	
});