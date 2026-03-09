# DONE.md — Acceptance Checklist

Before considering the task complete, verify every item below. Do not skip any.

## Project Structure
- [ ] Folder structure matches `ARCHITECTURE.md` exactly — including `js/models/` folder
- [ ] All filenames are kebab-case (e.g. `country-card.js`, `sort-menu.js`)
- [ ] `index.html` uses `<script type="module" src="js/main.js">`
- [ ] No JavaScript exists inside `index.html`
- [ ] All styles are in `css/style.css` — no inline styles in HTML

## ES Modules
- [ ] Every module lives in its own `.js` file
- [ ] All files use `export` / `import` — no global variables
- [ ] `main.js` is the only file that imports all other modules and wires them together

## Data Models
- [ ] `createCountryModel(raw)` factory function exists and maps all fields from raw API data
- [ ] All fallbacks (`"N/A"`, `[]`, `0`) are applied inside the factory function
- [ ] No module receives raw API data — only mapped `CountryModel` objects
- [ ] `NotificationModel` shape is used when calling `Notification.show()`
- [ ] `SortModel` shape is used when `SortMenu` emits a sort event
- [ ] `CountryList` uses `SortModel` to sort its internal `CountryModel[]` array

## Features
- [ ] Search input + button works and fetches by country name
- [ ] Pressing Enter in the input triggers search
- [ ] Empty search shows the correct warning notification
- [ ] "Europe" button fetches and displays all European countries
- [ ] "Neighbors of Macedonia" button performs the two-step fetch correctly
- [ ] "Macedonia" button fetches and displays North Macedonia
- [ ] Each card shows: flag, name, population (formatted), capital, Wikipedia link
- [ ] Wikipedia link opens in a new tab
- [ ] Sort dropdown works on all three sort fields in both directions
- [ ] Sorting does not trigger a new API call

## Loading & Errors
- [ ] Loader is visible during every fetch operation
- [ ] Loader disappears when the fetch completes (success or failure)
- [ ] Buttons are disabled while loading
- [ ] A 404 / no-results response shows a friendly notification, not a crash
- [ ] Network errors show a descriptive error notification
- [ ] Notifications auto-dismiss after 5 seconds

## Styling
- [ ] App uses CSS custom properties for all colors
- [ ] Layout is responsive (tested at 375px, 768px, 1280px widths)
- [ ] Cards display in a CSS Grid that collapses on smaller screens
- [ ] Loader is a pure CSS spinner (no external assets)
- [ ] Notification has color-coded left border per type

## Code Quality
- [ ] No `console.error` left uncaught — all errors flow through `notification.js`
- [ ] Code has comments explaining non-obvious logic
- [ ] No dead code or unused imports
- [ ] `country-api.js` never touches the DOM
- [ ] `formatter.js` exports only pure functions with no side effects
- [ ] All `import` paths use kebab-case and include the `.js` extension