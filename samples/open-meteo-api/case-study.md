---
layout: default
title: "Case study: documenting the Open-Meteo Forecast API"
---

# Case study: documenting the Open-Meteo Forecast API

**Goal:** write API documentation that a developer can follow to a first successful request in five minutes, and that stays accurate because I tested every claim before writing it.

**Deliverables:** an [OpenAPI reference](reference.html) with live "Try it out", a [Quickstart](quickstart.html), and code samples in curl, Python and JavaScript. This is an independent portfolio sample for a public API, not official Open-Meteo documentation.

## How I worked

1. **Explored the API in Postman.** I called the forecast endpoint for current conditions, daily summaries and different timezones, and saved each call in a collection.
2. **Tested how it fails.** I sent an out-of-range latitude, left out a coordinate and requested an invalid daily variable. I also hit a temporary 503 and recorded it.
3. **Wrote the OpenAPI 3.0 spec** and checked it against live responses with Swagger's "Try it out", field by field.
4. **Ran every code sample** before publishing it, on 11 October 2026.
5. **Published on GitHub Pages**, with the spec rendered by Swagger UI.

## What testing found

- **The API returns a different location than you send.** I sent latitude 11.0168 and got 11.001758 back, because the data comes from the nearest grid point. The field descriptions now say so.
- **`timezone` does more than relabel times.** For current conditions only the time labels changed. For daily data, four of seven minimum temperatures changed. A day most likely follows the chosen timezone, so the docs explain the effect.
- **A missing coordinate gets an indirect error.** Leaving out latitude or longitude returns "must have the same number of elements", which does not say which one is missing. The docs state that both are required and list the exact message.
- **A misspelled parameter is silently ignored.** I found this by accident when I typed `time zone` instead of `timezone` and still got a 200. The Quickstart warns about it.

## Decisions

- **Documented what I observed, with dates.** The official page for a related endpoint says `timezone` is required with daily variables. On this endpoint a daily request without it succeeded, so the spec records what I saw.
- **Left out what I could not verify:** rate limits, the full list of weather variables and the valid longitude range.

## What I would improve next

- Cover hourly data and the full variable list.
- Run the JavaScript sample in Node.js, since I tested it in a browser console.
- Validate the OpenAPI file automatically on every commit.

**Tools:** Postman, OpenAPI 3.0, Swagger Editor and Swagger UI, curl, Python, JavaScript, Git and GitHub Pages.
