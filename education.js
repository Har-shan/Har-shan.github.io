// ========================================
// EDUCATION PAGE JAVASCRIPT (education.js)
// Add this to education.html: <script src="education.js"></script>
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ========== 1. VARIABLES & TIMELINE HIGHLIGHTING ==========
    var timelineItems = document.querySelectorAll('.timeline-item');
    var currentIndex = 0;
    
    // FUNCTION to highlight timeline items
    function highlightTimeline() {
        // LOOP through all items to reset
        for (var i = 0; i < timelineItems.length; i++) {
            timelineItems[i].style.opacity = '0.5';
            timelineItems[i].style.transition = 'opacity 0.5s ease';
        }
        
        // IF CONDITION to check index
        if (currentIndex < timelineItems.length) {
            timelineItems[currentIndex].style.opacity = '1';
            currentIndex++;
        } else {
            currentIndex = 0; // Reset to beginning
        }
    }
    
    // Auto-cycle every 2 seconds
    setInterval(highlightTimeline, 2000);
    
    
    // ========== 2. INTERACTIVE CERTIFICATION CARDS ==========
    var certCards = document.querySelectorAll('.cert-card');
    
    // LOOP through all certification cards
    for (var j = 0; j < certCards.length; j++) {
        
        // MOUSE EVENT: click
        certCards[j].addEventListener('click', function() {
            var title = this.querySelector('h4').textContent;
            var details = this.querySelector('p').textContent;
            
            // STRING concatenation
            var message = 'Certificate: ' + title + '\n\n' + details;
            alert(message);
            
            // CHANGING CSS - Random border color
            var colors = ['#e74c3c', '#3498db', '#2ecc71', '#f39c12', '#9b59b6'];
            var randomIndex = Math.floor(Math.random() * colors.length);
            this.style.borderLeftColor = colors[randomIndex];
            this.style.borderLeftWidth = '5px';
        });
        
        // MOUSE EVENT: mouseover
        certCards[j].addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.05)';
            this.style.cursor = 'pointer';
            this.style.transition = 'transform 0.3s ease';
        });
        
        // MOUSE EVENT: mouseout
        certCards[j].addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    }
    
    
    // ========== 3. GPA CALCULATOR FUNCTION ==========
    function calculateGPA() {
        var subjects = parseInt(prompt('How many subjects do you want to calculate GPA for?'));
        
        // VALIDATION with IF
        if (isNaN(subjects) || subjects <= 0) {
            alert('Please enter a valid number!');
            return;
        }
        
        var totalGrade = 0;
        
        // LOOP to get grades for each subject
        for (var k = 0; k < subjects; k++) {
            var grade = parseFloat(prompt('Enter grade for subject ' + (k + 1) + ' (0-4):'));
            
            // VALIDATION
            if (isNaN(grade) || grade < 0 || grade > 4) {
                alert('Invalid grade! Please enter between 0 and 4.');
                k--; // Retry this subject
                continue;
            }
            
            // OPERATORS: addition
            totalGrade += grade;
        }
        
        // OPERATORS: division
        var gpa = totalGrade / subjects;
        
        // STRING methods: toFixed()
        var message = 'Your GPA is: ' + gpa.toFixed(2) + '\n\n';
        
        // IF-ELSE CONDITIONS for grade evaluation
        if (gpa >= 3.5) {
            message += 'Excellent! 🌟';
        } else if (gpa >= 3.0) {
            message += 'Very Good! 👍';
        } else if (gpa >= 2.5) {
            message += 'Good! Keep it up! 📚';
        } else {
            message += 'You can do better! 💪';
        }
        
        alert(message);
    }
    
    
    
    

    
    
    // ========== 7. TIMELINE ITEM CLICK INFO ==========
    for (var m = 0; m < timelineItems.length; m++) {
        timelineItems[m].addEventListener('click', function() {
            var degree = this.querySelector('h3').textContent;
            var institution = this.querySelector('.institution').textContent;
            var description = this.querySelector('p:not(.institution)').textContent;
            
            // STRING manipulation
            var info = 'Education Details:\n\n';
            info += 'Degree: ' + degree + '\n';
            info += 'Institution: ' + institution + '\n';
            info += 'Description: ' + description;
            
            alert(info);
        });
        
        timelineItems[m].style.cursor = 'pointer';
    }
    
    
    // ========== 8. STUDY TIME CALCULATOR ==========
    function calculateStudyTime() {
        var hoursPerDay = parseFloat(prompt('How many hours do you study per day?'));
        
        if (isNaN(hoursPerDay) || hoursPerDay < 0) {
            alert('Please enter a valid number!');
            return;
        }
        
        // OPERATORS: multiplication
        var hoursPerWeek = hoursPerDay * 7;
        var hoursPerMonth = hoursPerDay * 30;
        var hoursPerYear = hoursPerDay * 365;
        
        var result = 'Study Time Analysis:\n\n';
        result += 'Daily: ' + hoursPerDay + ' hours\n';
        result += 'Weekly: ' + hoursPerWeek + ' hours\n';
        result += 'Monthly: ' + hoursPerMonth + ' hours\n';
        result += 'Yearly: ' + hoursPerYear + ' hours\n\n';
        
        // IF CONDITIONS for feedback
        if (hoursPerDay >= 8) {
            result += 'Excellent dedication! 🌟';
        } else if (hoursPerDay >= 5) {
            result += 'Great effort! 👍';
        } else if (hoursPerDay >= 3) {
            result += 'Good! Consider studying more. 📚';
        } else {
            result += 'Try to increase study time! 💪';
        }
        
        alert(result);
    }
    
    
   
    
    console.log('Education page JavaScript loaded successfully!');
});
