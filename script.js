async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "6b953477baba5bc734a0b4423d6fd296";
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
  const data = await response.json();
  if(data.cod === 200){
    document.getElementById("cityName").innerText = data.name;
    document.getElementById("temp").innerText = data.main.temp + "°C";
    document.getElementById("description").innerText = data.weather[0].description;
  } else {
    alert("City not found");
  }
}
