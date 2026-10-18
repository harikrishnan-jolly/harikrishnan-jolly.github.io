# Open-Meteo Forecast API: sample documentation

Sample API documentation written and verified against the live, public Open-Meteo Forecast API. Every parameter, response field, error message and code sample was tested before it was documented.

> **Independent portfolio sample.** This project is not official Open-Meteo documentation and is not affiliated with Open-Meteo. For the official reference, see open-meteo.com.

**Author:** Hari Krishnan, technical writer

## What's included

| File | What it is |
|---|---|
| `quickstart.md` | A five-minute guide to a first successful request, with curl, Python and JavaScript samples, local time handling and an error table |
| `openapi.yaml` | OpenAPI 3.0 reference for `GET /forecast`: 5 parameters, 11 response fields, and 200, 400 and 503 responses |
| `reference.html` | Live, interactive rendering of `openapi.yaml` with Swagger UI |
| `code/weather.py` | Python sample (requests library) |
| `code/weather.js` | JavaScript sample (tested in a Chrome console) |

## How it was built

1. **Explored the API in Postman.** Sent requests for current conditions, daily forecasts and timezone handling.
2. **Tested failure cases.** Triggered a missing parameter, an out-of-range latitude, an invalid variable name and a temporary server overload, and recorded each response.
3. **Wrote the OpenAPI spec** and checked it against live responses with Swagger's "Try it out".
4. **Ran every code sample** on 11 October 2026 before publishing it.

## What testing found

- The API returns the coordinates of the grid point it used, which can differ slightly from the coordinates you send.
- The `timezone` parameter changes timestamps, and it can also change daily minimum values, because a "day" follows the chosen timezone.
- A missing `latitude` or `longitude` returns the same indirect error message, so the message does not say which parameter is missing.
- A misspelled parameter name is ignored without an error.

Each of these is explained in the documentation where a reader would hit it.

## View the API reference

Open the live reference at [harikrishnan-jolly.github.io/samples/open-meteo-api/reference.html](https://harikrishnan-jolly.github.io/samples/open-meteo-api/reference.html). "Try it out" sends live requests to the API.

## Scope

The documentation covers `current` and `daily` requests, the `timezone` parameter and the error responses I tested. It does not cover hourly data, multiple locations or the full list of weather variables.
