// Tested in a Chrome browser console: paste this code into the console and press Enter.

async function getWeather() {
  const params = new URLSearchParams({
    latitude: "11.0168",
    longitude: "76.9558",
    current: "temperature_2m,wind_speed_10m",
    timezone: "Asia/Kolkata",
  });

  const response = await fetch(`https://api.open-meteo.com/v1/forecast?${params}`);
  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  const data = await response.json();
  console.log(`${data.current.temperature_2m} ${data.current_units.temperature_2m}`);
}

getWeather();