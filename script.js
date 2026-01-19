const apiKey = "6b953477baba5bc734a0b4423d6fd296";

// Clear weather info
function clearWeather() {
  document.getElementById("cityName").innerText = "";
  document.getElementById("temp").innerText = "";
  document.getElementById("description").innerText = "";
  document.getElementById("humidity").innerText = "";
  document.getElementById("wind").innerText = "";
}

// Set dynamic background based on weather
function setBackground(weather) {
  const app = document.getElementById("app");

  // Reset all classes
  app.className = "";

  switch (weather) {
    case "Clear":
      app.classList.add("clear");
      break;
    case "Clouds":
      app.classList.add("clouds");
      break;
    case "Rain":
    case "Drizzle":
      app.classList.add("rain");
      break;
    case "Snow":
      app.classList.add("snow");
      break;
    case "Thunderstorm":
      app.classList.add("thunderstorm");
      break;
    default:
      app.classList.add("default");
  }
}

// Fetch weather data
async function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  const message = document.getElementById("error");

  // Reset UI
  clearWeather();
  message.innerText = "";

  if (!city) {
    message.innerText = "Please enter a city name";
    return;
  }

  // Loading state
  message.innerText = "Loading weather...";

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    );

    const data = await response.json();

    if (data.cod !== 200) {
      message.innerText = "City not found";
      return;
    }

    // Clear loading text
    message.innerText = "";

    // Display weather
    document.getElementById("cityName").innerText = data.name;
    document.getElementById("temp").innerText = `${data.main.temp}°C`;
    document.getElementById("description").innerText =
      data.weather[0].description;
    document.getElementById("humidity").innerText =
      `Humidity: ${data.main.humidity}%`;
    document.getElementById("wind").innerText =
      `Wind: ${data.wind.speed} m/s`;

    // Set dynamic background
    setBackground(data.weather[0].main);

  } catch (err) {
    message.innerText = "Unable to fetch weather data. Try again later.";
  }
}

// Clear UI when user types again
document.getElementById("cityInput").addEventListener("input", () => {
  clearWeather();
  document.getElementById("error").innerText = "";
});
