---
layout: default
title: "Quickstart: get the current weather in one request"
---

# Quickstart: get the current weather in one request

Get the current temperature and wind speed for any location in under five minutes. No account and no API key.

> **Independent sample documentation.** This is a portfolio sample written for the public Open-Meteo Forecast API. It is not official Open-Meteo documentation. For the official reference, see open-meteo.com.

**Last verified:** 11 October 2026 (curl, Python 3.15 with requests 2.34, JavaScript in a Chrome console)

## Before you begin

- Open-Meteo is free for non-commercial use and needs no API key. For commercial use, check Open-Meteo's terms.
- Pick one way to send requests: `curl`, Python 3 with the `requests` library, or JavaScript in a browser console.

## 1. Send your first request

This request asks for the current temperature and wind speed in Coimbatore, India.

```bash
curl "https://api.open-meteo.com/v1/forecast?latitude=11.0168&longitude=76.9558&current=temperature_2m,wind_speed_10m"
```

| Part | Value | Meaning |
|---|---|---|
| Base URL | `https://api.open-meteo.com/v1` | Where the API lives |
| Path | `/forecast` | The forecast endpoint |
| `latitude`, `longitude` | `11.0168`, `76.9558` | Location in degrees. Both are required. |
| `current` | `temperature_2m,wind_speed_10m` | The variables you want, separated by commas |

## 2. Read the response

A successful request returns status `200 OK` and JSON like this (formatted here for readability; the API returns it on one line):

```json
{
  "latitude": 11.001758,
  "longitude": 76.99468,
  "generationtime_ms": 0.046,
  "utc_offset_seconds": 0,
  "timezone": "GMT",
  "timezone_abbreviation": "GMT",
  "elevation": 431,
  "current_units": {
    "time": "iso8601",
    "interval": "seconds",
    "temperature_2m": "°C",
    "wind_speed_10m": "km/h"
  },
  "current": {
    "time": "2026-10-11T14:45",
    "interval": 900,
    "temperature_2m": 27.8,
    "wind_speed_10m": 5.5
  }
}
```

| Field | Meaning |
|---|---|
| `current.temperature_2m` | Air temperature. The unit is in `current_units`. |
| `current.wind_speed_10m` | Wind speed. The unit is in `current_units`. |
| `current.time` | Time of the reading, in the response timezone. |
| `latitude`, `longitude` | The grid point the data comes from. These can differ slightly from the values you sent. |

Every variable you request appears twice: its value in `current` and its unit in `current_units`.

## 3. Get local time

Timestamps are in GMT unless you set `timezone`. Add it to the request:

```bash
curl "https://api.open-meteo.com/v1/forecast?latitude=11.0168&longitude=76.9558&current=temperature_2m,wind_speed_10m&timezone=Asia/Kolkata"
```

These fields change:

| Field | Before | After |
|---|---|---|
| `utc_offset_seconds` | `0` | `19800` |
| `timezone` | `GMT` | `Asia/Kolkata` |
| `timezone_abbreviation` | `GMT` | `GMT+5:30` |
| `current.time` | GMT time | The same moment, 5 hours 30 minutes later |

The weather values stay the same. Only the time labels change.

## 4. Call the API from code

**Python**

```python
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
```

**JavaScript (browser console)**

```javascript
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
```

## 5. If something goes wrong

Errors return a JSON body with `error: true` and a `reason` message.

| Status | `reason` message | What it means | Fix |
|---|---|---|---|
| 400 | `Latitude must be in range of -90 to 90°. Given: 999.0.` | A value is out of range. | Use a latitude between -90 and 90. |
| 400 | `Parameter 'latitude' and 'longitude' must have the same number of elements` | `latitude` or `longitude` is missing. The message does not say which. | Send both parameters. |
| 503 | `The service is overloaded` | The server is temporarily busy. | Wait a short while and retry. |

A misspelled parameter name is ignored without an error. If a parameter seems to have no effect, check its spelling.

## Next steps

- Read the full parameter and response reference in the [API reference](reference.html).
- Try daily summaries with the `daily` parameter, for example `daily=temperature_2m_max,temperature_2m_min`.
