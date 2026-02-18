# JavaScript Files - Task II Documentation

## 📋 Overview
This package contains 5 separate JavaScript files that add dynamic and interactive features to your website. Each file corresponds to a specific page and can be linked independently.

---

## 🔗 How to Link JavaScript Files to HTML

Add these lines **before the closing `</body>` tag** in each HTML file:

### index.html (Landing Page)
```html
<script src="index.js"></script>
</body>
</html>
```

### education.html
```html
<script src="education.js"></script>
</body>
</html>
```

### hobbies.html
```html
<script src="hobbies.js"></script>
</body>
</html>
```

### tech.html
```html
<script src="tech.js"></script>
</body>
</html>
```

### contact.html
```html
<script src="contact.js"></script>
</body>
</html>
```

---

## 📚 JavaScript Concepts Covered

### ✅ 1. VARIABLES
- **var** - Old way to declare variables
- **let** - Modern way (can be changed)
- **const** - Modern way (cannot be changed)

**Example from code:**
```javascript
var currentHour = new Date().getHours();
var greeting = "";
```

### ✅ 2. OPERATORS
- **Arithmetic:** +, -, *, /, %
- **Comparison:** ==, !=, <, >, <=, >=
- **Logical:** &&, ||, !
- **Assignment:** =, +=, -=

**Example from code:**
```javascript
clickCount++;  // Increment
visits = parseInt(visits) + 1;  // Addition
var gpa = totalGrade / subjects;  // Division
```

### ✅ 3. IF-ELSE CONDITIONS
Decision making in code

**Example from code:**
```javascript
if (currentHour < 12) {
    greeting = "Good Morning! ☀️";
} else if (currentHour < 18) {
    greeting = "Good Afternoon! 🌤️";
} else {
    greeting = "Good Evening! 🌙";
}
```

### ✅ 4. LOOPS
Repeat code multiple times

**Example from code:**
```javascript
// FOR LOOP
for (var i = 0; i < featureCards.length; i++) {
    featureCards[i].addEventListener('click', function() {
        // code here
    });
}

// FOR-IN LOOP (for objects)
for (var hobby in hobbyTimes) {
    summary += hobby + ': ' + hobbyTimes[hobby] + ' hours\n';
}
```

### ✅ 5. STRINGS
Working with text data

**Example from code:**
```javascript
// String concatenation
var message = 'Hello, ' + userName + '!';

// String methods
userName.toUpperCase();      // JOHN
email.toLowerCase();         // john@email.com
text.includes('@');          // true/false
text.substring(0, 50);       // First 50 characters
email.split('@');            // Split into array
text.length;                 // Get length
```

### ✅ 6. FUNCTIONS
Reusable blocks of code

**Example from code:**
```javascript
function calculateGPA() {
    var subjects = parseInt(prompt('How many subjects?'));
    // function code here
}

function toggleTheme() {
    clickCount++;
    // function code here
}
```

### ✅ 7. SELECTING ELEMENTS
Access HTML elements with JavaScript

**Example from code:**
```javascript
// Select by class
var featureCards = document.querySelectorAll('.feature-card');

// Select by ID
var messageInput = document.getElementById('message');

// Select single element
var navbar = document.querySelector('.navbar');
```

### ✅ 8. CHANGING HTML
Modify page content dynamically

**Example from code:**
```javascript
// Change text content
heroTitle.textContent = greeting + " " + originalTitle;

// Change HTML content
counterDiv.innerHTML = '👁️ Visits: ' + visits;

// Add/remove classes
body.classList.add('dark-theme');
body.classList.remove('dark-theme');
```

### ✅ 9. CHANGING CSS
Modify styles with JavaScript

**Example from code:**
```javascript
// Change individual styles
this.style.borderColor = 'red';
this.style.transform = 'translateY(-5px)';
this.style.background = '#3498db';
this.style.fontSize = '1.2rem';

// Change multiple properties
navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)';
```

### ✅ 10. MOUSE EVENTS
Respond to mouse interactions

**Example from code:**
```javascript
// Click event
element.addEventListener('click', function() {
    alert('Clicked!');
});

// Mouse over
element.addEventListener('mouseover', function() {
    this.style.transform = 'scale(1.1)';
});

// Mouse out
element.addEventListener('mouseout', function() {
    this.style.transform = 'scale(1)';
});

// Double click
element.addEventListener('dblclick', function() {
    // code here
});
```

### ✅ 11. KEYBOARD EVENTS
Respond to keyboard input

**Example from code:**
```javascript
// Key press event
document.addEventListener('keypress', function(event) {
    var key = event.key.toLowerCase();
    
    if (key === 'h') {
        window.location.href = 'index.html';
    }
});

// Input event (real-time typing)
messageInput.addEventListener('input', function() {
    var charCount = this.value.length;
    // update counter
});
```

---

## 🎯 Features by Page

### 📄 index.js (Landing Page)
1. **Dynamic Greeting** - Shows greeting based on time of day
2. **Theme Toggle** - Switch between light/dark themes
3. **Visit Counter** - Tracks page visits (localStorage)
4. **Interactive Cards** - Hover and click effects
5. **Keyboard Navigation** - Press H, E, T, C for navigation
6. **Personalized Welcome** - Asks for name and displays message
7. **Scroll Effects** - Navbar changes on scroll
8. **Help Tooltip** - Shows keyboard shortcuts

**Keyboard Shortcuts:**
- H - Home (you're already here)
- E - Education page
- T - Tech page
- C - Contact page

---

### 📚 education.js (Education Page)
1. **Timeline Highlighting** - Auto-cycles through timeline items
2. **Interactive Certificates** - Click for details
3. **GPA Calculator** - Calculate grade point average
4. **Achievement Counter** - Displays total badges
5. **Timeline Click Info** - Click timeline items for details
6. **Random Border Colors** - Changes on certificate click
7. **Study Time Calculator** - Analyze study hours
8. **Help Tooltip** - Shows tips and shortcuts

**Keyboard Shortcuts:**
- G - Open GPA Calculator
- H - Go to Home page

---

### 🎨 hobbies.js (Hobbies Page)
1. **Hobby Time Tracker** - Track hours spent on each hobby
2. **Filter System** - Filter hobbies by category
3. **Favorite Marking** - Click to mark favorite (gold border)
4. **Double-click Details** - Shows hobby information
5. **Random Suggestions** - Get random hobby ideas
6. **Hover Effects** - Cards lift on hover
7. **Hobby Statistics** - Count different hobby types
8. **Help Tooltip** - Shows shortcuts

**Keyboard Shortcuts:**
- T - Track hobby time
- R - Random hobby suggestion
- A - Show all hobbies
- H - Go to Home page

---

### 💻 tech.js (Tech Page)
1. **Adjustable Skills** - Click to change skill levels
2. **Project Search** - Search projects by technology
3. **Project Rating** - Double-click to rate (1-5 stars)
4. **Coding Quiz** - Test your knowledge
5. **Reset View** - Clear all filters
6. **Skill Summary** - View all your skills
7. **Skill Analyzer** - Analyze average skill level
8. **Help Tooltip** - Shows tips and shortcuts

**Keyboard Shortcuts:**
- S - Search projects
- Q - Take coding quiz
- R - Reset view
- H - Go to Home page

---

### 📧 contact.js (Contact Page)
1. **Form Validation** - Validates all fields before submit
2. **Character Counter** - Real-time message length display
3. **Focus Effects** - Visual feedback on input fields
4. **Social Link Tracker** - Counts clicks on social links
5. **Message Templates** - Quick insert common messages
6. **Email Suggestions** - Suggests common email domains
7. **Copy Functionality** - Click contact info to copy
8. **Message Analyzer** - Analyzes word/character count
9. **Help Tooltip** - Shows tips
10. **Welcome Message** - Greets visitors

**Keyboard Shortcuts:**
- T - Use message template
- H - Go to Home page

---

## 🎓 Understanding w3_open() and w3_close()

From the W3Schools ITLab2026 course home page source code:

```javascript
function w3_open() {
    // Select the sidebar element by its ID
    var sidebar = document.getElementById("mySidebar");
    
    // Change the display property to show it
    sidebar.style.display = "block";
}

function w3_close() {
    // Select the sidebar element by its ID
    var sidebar = document.getElementById("mySidebar");
    
    // Change the display property to hide it
    sidebar.style.display = "none";
}
```

**Explanation:**
- **getElementById()** - Selects an HTML element with a specific ID
- **style.display** - Changes the CSS display property
- **"block"** - Makes the element visible
- **"none"** - Hides the element completely

This is a simple but effective way to toggle UI elements on/off!

---

## 🚀 Quick Start Guide

### Step 1: Link JavaScript Files
Add the `<script>` tags to your HTML files as shown above.

### Step 2: Test Each Feature
Open each page in your browser and try:
- Clicking on interactive elements
- Using keyboard shortcuts
- Filling out forms (contact page)
- Using calculators and tools

### Step 3: Check Browser Console
Open Developer Tools (F12) and check the Console tab:
- You should see "Page JavaScript loaded successfully!" messages
- Any errors will show here

### Step 4: Customize
Feel free to modify:
- Alert messages
- Color schemes
- Keyboard shortcuts
- Validation rules

---

## 📝 Important Notes

1. **No HTML Changes Required** - These JavaScript files work with your existing HTML
2. **Independent Files** - Each page has its own JavaScript file
3. **No Dependencies** - Pure JavaScript, no libraries needed
4. **Browser Compatibility** - Works in all modern browsers
5. **localStorage** - Used for visit counter (persists across sessions)
6. **Event Listeners** - Used instead of inline onclick attributes

---

## 🔍 Debugging Tips

If something doesn't work:

1. **Check Console** - Press F12 and look for errors
2. **Verify File Path** - Make sure `src="filename.js"` matches your file location
3. **Check Element Classes** - JavaScript selects elements by class names
4. **Test One Feature** - Isolate the problem by testing one thing at a time

---

## 📖 Learning Resources

To learn more about these concepts:

1. **W3Schools JavaScript Tutorial**
   - https://www.w3schools.com/js/

2. **MDN Web Docs (More Advanced)**
   - https://developer.mozilla.org/en-US/docs/Web/JavaScript

3. **Practice Online**
   - https://www.w3schools.com/js/js_exercises.asp

---

## ✅ Task II Requirements Met

- ✅ JavaScript basics: syntax, variables, operators
- ✅ If conditions and loops
- ✅ Strings and functions
- ✅ Selecting HTML elements
- ✅ Changing HTML content
- ✅ Changing CSS styles
- ✅ Mouse events (click, hover, double-click)
- ✅ Keyboard events (keypress)
- ✅ Dynamic and interactive features
- ✅ Understanding of w3_open() and w3_close() functions

---

## 🎉 Enjoy Your Interactive Website!

Your website now has:
- 50+ interactive features
- Dynamic content
- User input handling
- Keyboard shortcuts
- Form validation
- And much more!

**Have fun exploring and learning JavaScript!** 🚀
