# Technical Documentation — Assignment 3

## 1️⃣ Project Overview

This project is a responsive personal portfolio website developed using HTML, CSS, and JavaScript. It represents the foundation of my professional portfolio and showcases my background, skills, projects, and contact information.

The website emphasizes clean design, user-friendly navigation, responsive behavior, and interactive features such as API integration, state management, dynamic content updates, and enhanced user experience.

---

## 2️⃣ Project Structure

The project follows a modular folder structure to separate concerns between structure, styling, functionality, and documentation.

assignment-swe363/
├── index.html
├── css/
│   └── styles.css
├── js/
│   ├── script.js
│   ├── contactForm.js
│   ├── showProject.js
│   └── Quote.js
├── assets/
│   └── images/
├── docs/
│   ├── ai-usage-report.md
│   └── technical-documentation.md

### File Responsibilities

* **index.html** → Contains the website structure and content sections.
* **styles.css** → Controls layout, colors, responsiveness, and theme styling using CSS variables.
* **script.js** → Implements general interactivity such as navigation highlighting and theme toggle with localStorage.
* **contactForm.js** → Handles form validation logic and user feedback.
* **showProject.js** → Controls expand/collapse functionality for project details.
* **Quote.js** → Handles API integration and dynamic quote display.
* **assets/images** → Stores all project and profile images.
* **docs** → Contains AI documentation and technical explanations.

---

## 3️⃣ Website Sections

### About Me
Provides a personal introduction, academic background, career interests, and a personal tagline.

### Skills
Divided into:
* Technical skills
* Soft skills

### Projects
Includes projects with:
* Title
* Description
* Images
* Expand/collapse interaction

### Contact
A contact form including:
* Name
* Email
* Message

Enhanced with custom validation logic and user feedback messages.

---

## 4️⃣ Features Implementation

### Fixed Navigation Bar
position: fixed;

### Smooth Scrolling
scroll-behavior: smooth;

### Active Section Highlight
JavaScript detects the visible section and updates the active navigation link dynamically.

### API Integration (Dynamic Quotes)
- Uses fetch() to retrieve data
- Displays quotes dynamically
- Handles errors with user-friendly messages

### Complex Logic (Form Validation)
- Checks empty fields
- Validates email format
- Checks message length
- Displays feedback messages

### State Management (Dark Mode)
- Toggle button
- dark-mode class
- localStorage to save preference
- Persists after refresh

### Show/Hide Project Details
- Click to expand/collapse
- Dynamic arrow update

---

## 5️⃣ Design & Styling

- CSS variables (:root)
- Flexbox layout
- Hover effects
- Card-style components
- Smooth transitions
- Removed !important for cleaner code

---

## 6️⃣ Responsiveness

- Tablets
- Mobile devices
- Small screens

Adjustments include image resizing, flexible layout, and spacing improvements.

---

## 7️⃣ Performance Optimization

- Image optimization
- Clean CSS structure
- Avoid unnecessary selectors
- Modular JavaScript files

---

## 8️⃣ Challenges & Solutions

Navbar overlap:
section.offsetTop - 120;

Dark mode conflicts:
Solved using CSS variables instead of !important

API issues:
Used stable API with error handling

Form validation complexity:
Implemented step-by-step logic

---

## 9️⃣ Conclusion

This project demonstrates building a responsive and interactive portfolio using HTML, CSS, and JavaScript, including API integration, state management, and performance optimization.