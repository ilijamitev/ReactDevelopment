# PROJECT.md — App Overview

## What You Are Building

**CountrySearch** is a browser-based web application that lets users search for countries and view key information about them in real time using a public REST API.

## Goals

- Demonstrate how a real-world app is structured using **Vanilla JavaScript only**
- Apply **ES Modules** (`import`/`export`) for clean code separation
- Fetch and display live data from an external REST API

## Hard Constraints

| Constraint | Detail |
|-----------|--------|
| Language | Vanilla JavaScript only — no frameworks, no libraries |
| Module system | ES Modules (`type="module"`) — no bundler needed |
| No inline JS | All JavaScript lives in `.js` files, never in HTML |
| Browser target | Modern browsers (Chrome, Firefox, Edge latest) |

## Non-Goals

- No backend, no server, no Node.js runtime
- No authentication
- No persistent storage (localStorage, cookies, etc.)
- No routing or multiple pages