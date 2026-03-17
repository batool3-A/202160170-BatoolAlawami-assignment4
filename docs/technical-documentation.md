# Technical Documentation — Assignment 1

## 1️⃣ Project Overview

This project is a responsive personal portfolio website developed using HTML, CSS, and JavaScript. It represents the initial foundation of my professional portfolio and highlights my background, technical skills, projects, and contact information.

The website focuses on clean layout design, user-friendly navigation, responsive behavior, and basic interactivity features.

---

## 2️⃣ Project Structure

The project follows an organized folder structure to separate structure, styling, functionality, and documentation.

```
assignment-1/
├── index.html
├── README.md
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── assets/
│   └── images/
│       ├── FolderSystem.png
│       ├── HorseDB.png
│       ├── HorseDb2.png
│       └── personalPic.jpg
├── docs/
│   ├── ai-usage-report.md
│   └── technical-documentation.md
```

### File Responsibilities

* **index.html** → Contains the website structure and content sections.
* **styles.css** → Controls layout, colors, responsiveness, and theme styling.
* **script.js** → Implements interactivity and dynamic behaviors.
* **assets/images** → Stores all project and profile images.
* **docs** → Contains AI documentation and technical explanations.

---

## 3️⃣ Website Sections

The portfolio includes the following sections:

### About Me

Provides a personal introduction, academic background, career interests, and a personal tagline.

### Skills

Divided into:

* Technical skills
* Soft skills

### Projects

Includes at least two projects with:

* Title
* Description
* Images

### Contact

A contact form including:

* Name
* Email
* Message

Form validation is handled using built-in HTML attributes.

---

## 4️⃣ Features Implementation

### Fixed Navigation Bar

The navigation bar is fixed at the top using:

```css
position: fixed;
```

This ensures constant visibility while scrolling.

---

### Smooth Scrolling

Implemented using CSS:

```css
scroll-behavior: smooth;
```

This enhances navigation experience between sections.

---

### Active Section Highlight

JavaScript detects the visible section during scrolling and dynamically applies the `active` class to the corresponding navigation link.

Key logic includes:

* Detecting section position
* Comparing viewport offset
* Updating navigation state

---

### Dark / Light Theme Toggle

A theme toggle button switches between light and dark modes.

Implementation approach:

* JavaScript toggles a `dark-mode` class on `<body>`.
* CSS applies override color styles.
* Button icon changes dynamically (🌙 / ☀️).

---

### Contact Form

The contact form structure includes input validation using:

```html
required
type="email"
```

No backend functionality is implemented as it is outside assignment scope.

---

## 5️⃣ Design & Styling

The visual design follows a soft purple color palette aligned with personal branding.

Styling includes:

* Hover effects
* Active navigation indicators
* Rounded form elements
* Section separators

Flexbox is used for layout alignment in:

* Navigation bar
* Header
* Contact section

---

## 6️⃣ Responsiveness

Responsive design is implemented using media queries targeting:

* Tablets
* Mobile devices
* Small screens

Adjustments include:

* Image resizing
* Spacing reduction
* Text scaling
* Form width adaptation

The design maintains layout consistency while improving screen adaptability.

---

## 7️⃣ Challenges & Solutions

### Navbar Overlapping Sections

Because the navbar is fixed, it overlapped section headers.

**Solution:**
Offset adjustments were applied in JavaScript using:

```js
section.offsetTop - 120;
```

---

### Dark Mode Styling Conflicts

Some elements did not initially adapt to dark mode.

**Solution:**
CSS override selectors were implemented to ensure consistent theme application.

---

### Maintaining Design While Responsive

Making the layout responsive without altering the original design required careful adjustments.

**Solution:**
Non-destructive media queries were used to resize and adapt elements without restructuring layout.

---

## 8️⃣ Conclusion

This project demonstrates the integration of structure (HTML), styling (CSS), and interactivity (JavaScript) to create a responsive and user-friendly personal portfolio website.

It establishes a scalable technical foundation for future portfolio expansion and feature development.
