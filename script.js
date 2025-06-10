const apiKey = '9351eed7aeb016f1628a280b65c4aca5';


async function getWeather() {
  const city = document.getElementById('cityInput').value;
  const resultDiv = document.getElementById('weatherResult');

  if (!city) {
    resultDiv.innerHTML = "Please enter a city name.";
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("City not found");

    const data = await response.json();
    const temp = data.main.temp;
    const description = data.weather[0].description;
    const location = data.name;
    const time = new Date().toLocaleTimeString();

    resultDiv.innerHTML = `
      <p><strong>${location}</strong></p>
      <p>${temp} °C</p>
      <p>${description}</p>
      <p>${time}</p>
    `;
  } catch (error) {
    resultDiv.innerHTML = `Error: ${error.message}`;
  }
}
