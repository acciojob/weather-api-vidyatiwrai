//your JS code here. If required.
  const apiKey = '117a142046bf80b24ded8dbab6fbedd3'; // Replace with your actual API key

        // Function to fetch weather data
        function getWeatherData() {
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={117a142046bf80b24ded8dbab6fbedd3}`;
            
            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    const weatherDescription = data.weather[0].description;
                    const cityName = data.name;
                    const weatherInfo = `Current weather in ${cityName}: ${weatherDescription}`;
                    
                    document.getElementById('weatherData').textContent = weatherInfo;
                })
                .catch(error => {
                    console.error('Error fetching weather data:', error);
                });
        }

        // Add click event listener to the button
        const getWeatherButton = document.getElementById('getWeatherButton');
        getWeatherButton.addEventListener('click', getWeatherData);