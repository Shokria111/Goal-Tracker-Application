# Goal Tracker Dashboard

A responsive multi-page React application that allows users to create, manage, and track goals or habits, with analytics, categories, and gamification features.

---

## Tech Stack

* React + Vite
* React Router
* MUI (Material UI)
* LocalStorage (data persistence)
* i18next (multi-language support)

---

## Features Checklist

### Core Features

* Create, edit, delete goals (CRUD)
* Track goal progress
* Automatic progress calculation
* Completed goals archive
* Responsive design (mobile + desktop)

### Pages (Routes)

* `/dashboard`

  * Overview (completion %, XP, streak)
  * Active goals
  * Completed preview

* `/goals`

  * All goals list
  * Filter (Active / Completed / Paused)
  * Search & sort

* `/goals/new`

  * Create goal form with validation

* `/goals/:id`

  * Goal details
  * Progress history
  * Actions (edit, pause, complete)

* `/categories`

  * Category cards
  * Analytics (charts)

* `/settings`

  * Language toggle (RTL/LTR)
  * Theme toggle

* `*`

  * 404 page

---

## Goal System

Each goal includes:

```js
{
  id,
  title,
  category,
  type, // daily | count | time
  target,
  progress,
  status, // active | paused | completed
  logs: [{ date, amount }]
}
```

---

## Progress Tracking

* Users can log progress per goal
* Progress % is calculated automatically
* Goals are marked as completed when target is reached

---

## Streak System

* Streak increases when user logs progress on consecutive days
* Missing a day resets the streak

---

## XP System

* Each progress update gives XP (e.g., +20 XP)
* Total XP is displayed on the dashboard

---

## Internationalization (i18n)

* Supports 2 languages (e.g., English + Arabic)
* Layout direction changes automatically:

  * English → LTR
  * Arabic → RTL
* UI remains fully responsive in both modes

---

## UI & Responsiveness

* Built with MUI components
* Fully responsive (mobile + desktop)
* Includes:

  * Cards
  * Progress bars
  * Charts
  * Empty states

---

## Data Persistence

* Data is stored in LocalStorage
* State is preserved across page reloads

---

## How to Run

```bash
npm install
npm run dev
```

---

## Screenshots

(Add your screenshots here)

* Dashboard (Desktop)
* Dashboard (Mobile)
* Goals Page
* Categories Page

---

## Folder Structure (Example)

```
src/
  components/
  pages/
  context/
  routes/
  utils/
```

---

## Code Quality

* Reusable components
* Clean folder structure
* Separation of logic and UI
* Context API for state management

---

## Bonus Features Implemented

* Charts (MUI Charts)
* Dark/Light theme toggle

---

## Notes

* RTL/LTR switching handled via i18n + MUI theme direction
* Charts are responsive using flexible containers
* Layout tested across screen sizes

---
## Author
Shokria Muhsini
