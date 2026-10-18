import requests

params = {
    "latitude": 11.0168,
    "longitude": 76.9558,
    "current": "temperature_2m,wind_speed_10m",
    "timezone": "Asia/Kolkata",
}

response = requests.get("https://api.open-meteo.com/v1/forecast", params=params, timeout=10)
response.raise_for_status()

data = response.json()
temperature = data["current"]["temperature_2m"]
unit = data["current_units"]["temperature_2m"]
print(f"{temperature} {unit}")