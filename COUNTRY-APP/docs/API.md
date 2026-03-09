# API.md — External API Contract

## Base URL

```
https://restcountries.com/v3.1
```

## Endpoints to Use

### Search by name
```
GET /name/{query}
```
Used when the user types a country name or partial name into the search bar.

### Get all countries in a region
```
GET /region/{region}
```
Used for the "Europe" quick button. Region value: `europe`

### Get a country by its code
```
GET /alpha/{code}
```
Used for the "Macedonia" quick button. Macedonia's code: `MKD`

### Get multiple countries by code list
```
GET /alpha?codes={code1},{code2},...
```
Used to fetch the neighbors of Macedonia. You will first fetch Macedonia to get its `borders` array (list of 3-letter country codes), then pass all those codes to this endpoint.

## Fields Filter

Always append `?fields=` to limit response size. Request only the fields you need:

```
fields=name,flags,population,capital,area,borders,cca3
```

Combine with other query params using `&`:
```
/region/europe?fields=name,flags,population,capital,area,borders,cca3
```

## Response Shape (per country object)

```json
{
  "name": {
    "common": "North Macedonia",
    "official": "Republic of North Macedonia"
  },
  "flags": {
    "png": "https://flagcdn.com/w320/mk.png",
    "svg": "...",
    "alt": "Flag description"
  },
  "population": 2077132,
  "capital": ["Skopje"],
  "area": 25713.0,
  "borders": ["ALB", "BGR", "GRC", "SRB", "XKX"],
  "cca3": "MKD"
}
```

## Error Handling

- A `404` response means no countries matched — treat this as "no results found", not a crash
- Any other non-`ok` response should be treated as a network/server error
- Always check `response.ok` before parsing JSON
- The `CountryAPI` class should throw a descriptive `Error` with a human-readable message so `main.js` can catch and display it via `Notification`
