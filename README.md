# Shajar Hope Alliance 🌱

A modern, fully interactive multi-page web application built for connecting donors with deserving university students through interest-free scholarships and financial support.

---

## 🚀 Live Demo & Repository

- **Repository:** `c:\Users\gh\Desktop\iqra project`
- **Open:** `index.html` in any modern browser

---

## 📋 Project Overview

Shajar Hope Alliance is a data-driven scholarship management platform. It transforms a static website into a fully interactive application featuring complete CRUD operations, advanced JavaScript methods, dark/light mode, and modular code architecture.

---

## ✨ Key Features

| Feature | Description |
|---|---|
| 🔄 **Full CRUD** | Create, Read, Update, Delete student scholarship records |
| 🌙 **Dark / Light Mode** | Theme toggle persisted via `localStorage` across all pages |
| 🔍 **Search & Filters** | 5 filters + sort by name, GPA, amount, year |
| 📊 **Data Analytics** | Live stats using `reduce`, `find`, `every`, `some`, `Array.from` |
| 🔡 **String Methods** | 10 string methods visualised: `trim`, `toLowerCase`, `toUpperCase`, `charAt`, `slice`, `includes`, `startsWith`, `split`, `padStart`, `replace` |
| 🧩 **Object Methods** | `Object.keys`, `Object.values`, `Object.entries`, `Object.assign`, `Object.fromEntries`, `hasOwnProperty` |
| 🗂️ **Modular Structure** | Separate files for constants, database, and utilities |
| 📱 **Responsive** | Mobile-friendly layout with burger menu |
| ♿ **Accessible** | Semantic HTML5, ARIA labels, proper heading hierarchy |

---

## 🛠️ Technologies Used

- **HTML5** — Semantic markup
- **Tailwind CSS** (CDN) — Utility-first styling with `darkMode: 'class'`
- **Vanilla JavaScript (ES6+)** — Arrow functions, destructuring, spread, template literals
- **Flowbite** — UI components on Contact & Sign In pages
- **localStorage** — Theme persistence
- **Google Fonts** — Outfit typeface

---

## 📁 Project Structure

```text
iqra project/
├── index.html                        # Home page
├── README.md
├── assets/
│   ├── css/
│   │   └── style.css                 # Custom CSS + dark mode overrides
│   └── img/
│       └── logo.png
└── src/
    ├── constants/
    │   ├── config.js                 # APP_CONFIG (universities, tiers, thresholds)
    │   └── themeConstants.js         # ThemeUtils (init, toggle, apply)
    ├── database/
    │   └── students.js               # studentsDB array + nextStudentId
    └── pages/
        ├── home/
        │   └── home.js               # Global JS (nav, FAQ, forms, scroll)
        ├── about/about.html          # About Us
        ├── contact/contact.html      # Contact (Formspree + Flowbite)
        ├── signin/signin.html        # Sign In (floating labels)
        ├── signup/signup.html        # Sign Up (password strength)
        └── students/students.html    # CRUD Dashboard (main assignment page)
```

---

## ▶️ How to Run

1. Clone or download the repository
2. Open `index.html` in a modern browser (Chrome, Firefox, Edge)
3. Navigate using the top navbar — all pages are linked
4. Visit **Students** page for the full CRUD + methods demo

> No build tools or server required. Everything runs client-side.

---

## 📸 Screenshots

### Home Page
![Home](img/logo.png)

### Student Records (CRUD Dashboard)
- Cards view with Edit / Delete buttons
- Search bar + 5 filter dropdowns + sort
- Data Analytics panel (reduce, find, every, some)
- 10 String Methods panel
- Object Methods panel
- GPA Categories (for loop + if-else)
- Add / Edit modals

### Dark Mode
- Toggle 🌙/☀️ button in navbar on every page
- Theme persisted in `localStorage`

---

## 📚 JavaScript Methods Reference

### Array Methods Used
| Method | Where Used |
|---|---|
| `map()` | Render cards from data array |
| `filter()` | Delete records & apply search filters |
| `reduce()` | Total funds & average GPA calculation |
| `find()` | Locate top scholar & student by ID |
| `every()` | Validate all students have GPA ≥ 2.0 |
| `some()` | Check if any student holds full scholarship |
| `sort()` | Multi-column sorting (name, GPA, amount, year) |
| `push()` | Add new student record |
| `includes()` | City tier check |

### String Methods Used
`trim` · `toLowerCase` · `toUpperCase` · `charAt` · `slice` · `includes` · `startsWith` · `split` · `padStart` · `replace`

### Object Methods Used
`Object.keys` · `Object.values` · `Object.entries` · `Object.assign` · `Object.fromEntries` · `hasOwnProperty`

---

## 👩‍💻 Author

**Iqra Tanveer** — Founder, Shajar Hope Alliance  
© 2026 Shajar Hope Alliance. All rights reserved.
