# ARCHITECTURE.md — Structure & Module Design

## Folder Structure

```
CountrySearch/
├── index.html
├── css/
│   └── style.css
└── js/
    ├── main.js                        ← entry point, bootstraps the app
    ├── api/
    │   └── country-api.js             ← all fetch logic
    ├── components/
    │   ├── search-bar.js              ← search input + button
    │   ├── quick-buttons.js           ← the 3 preset + sort buttons
    │   ├── country-card.js            ← single country card rendering
    │   ├── country-list.js            ← renders a collection of cards
    │   ├── notification.js            ← user messages (errors, warnings)
    │   ├── loader.js                  ← loading spinner
    │   └── sort-menu.js               ← sort dropdown logic
    ├── models/
    │   ├── country-model.js           ← CountryModel factory + shape
    │   ├── notification-model.js      ← NotificationModel factory + shape
    │   └── sort-model.js              ← SortModel factory + shape
    └── utils/
        └── formatter.js               ← number formatting, string helpers
```

## Module Responsibilities

### `country-api.js`
- Encapsulates all `fetch()` calls to the REST Countries API
- Has one function per query type (by name, by region, by code, by borders)
- Maps every raw API response object into a `CountryModel` (see `MODELS.md`) before returning
- Throws meaningful errors that other modules can catch and display
- Never touches the DOM

### `search-bar.js`
- Owns the `<input>` and Search `<button>` elements
- Accepts a callback on initialisation: `onSearch(query)`
- Triggers the callback when the button is clicked or Enter is pressed
- Validates that the input is not empty before triggering

### `quick-buttons.js`
- Owns the 3 preset region/country buttons and the Sort button
- Accepts callbacks for each action on initialisation
- Delegates click handling to the provided callbacks

### `country-card.js`
- Receives a single `CountryModel` object (see `MODELS.md`)
- Has a `render()` function that returns an `HTMLElement`
- Responsible for building the card's full HTML structure

### `country-list.js`
- Owns the list container element in the DOM
- Has `display(countries)` — accepts a `CountryModel[]` array, clears and re-renders cards
- Has `clear()` — empties the container
- Holds the active `SortModel` internally for re-sorting without a new API call
- Uses `country-card.js` internally to render each country

### `notification.js`
- Owns a notification `<div>` in the DOM
- Has `show(notificationModel)` — accepts a `NotificationModel` object (see `MODELS.md`)
- Has `hide()`
- Auto-hides after the duration specified in the `NotificationModel`

### `loader.js`
- Owns a loading overlay or spinner element
- Has `show()` and `hide()` functions

### `sort-menu.js`
- Owns the sort dropdown UI
- Accepts a callback `onSort(sortModel)` that receives a `SortModel` object (see `MODELS.md`)
- Supports sorting by: `name`, `population`, `area`
- Supports directions: `asc`, `desc`

### `formatter.js`
- Utility module — export individual functions, no instantiation needed
- `formatPopulation(number)` → e.g. `"44,012,345"`
- `formatArea(number)` → e.g. `"603,550 km²"`
- `wikiUrl(countryName)` → e.g. `"https://en.wikipedia.org/wiki/North_Macedonia"`

### `country-model.js`
- Exports a `createCountryModel(raw)` factory function
- Maps raw API data to a clean `CountryModel` shape
- Applies all fallbacks at creation time

### `notification-model.js`
- Exports a `createNotificationModel(message, type, duration)` factory function
- `duration` defaults to `5000` ms if not provided

### `sort-model.js`
- Exports a `createSortModel(field, direction)` factory function

## Entry Point: `main.js`

- Imports all modules using their kebab-case paths
  e.g. `import { CountryAPI } from './api/country-api.js'`
- Instantiates and wires all modules together (search-bar → country-api → country-list)
- Handles all top-level `try/catch` for API errors
- Is the only file that knows about all other modules