// ========================================
// TECH PAGE JAVASCRIPT (tech.js)
// Add this to tech.html: <script src="tech.js"></script>
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ========== 1. INTERACTIVE SKILL BARS ==========
    var skillItems = document.querySelectorAll('.skill-item');
    
    // LOOP through all skill items
    for (var i = 0; i < skillItems.length; i++) {
        
        // MOUSE EVENT: click to adjust skill level
        skillItems[i].addEventListener('click', function() {
            var skillName = this.querySelector('.skill-name').textContent;
            var skillLevel = this.querySelector('.skill-level');
            var currentLevel = skillLevel.style.width;
            
            var newLevel = prompt('Adjust skill level for ' + skillName + '\nCurrent: ' + currentLevel + '\n\nEnter new level (0-100):');
            
            // IF CONDITION - check if cancelled
            if (newLevel === null || newLevel === '') {
                return;
            }
            
            // OPERATORS: convert string to number
            newLevel = parseInt(newLevel);
            
            // VALIDATION with IF-ELSE
            if (isNaN(newLevel) || newLevel < 0 || newLevel > 100) {
                alert('Please enter a number between 0 and 100!');
                return;
            }
            
            // CHANGING CSS
            skillLevel.style.width = newLevel + '%';
            alert('Skill level updated to ' + newLevel + '%!');
        });
        
        skillItems[i].style.cursor = 'pointer';
        
        // MOUSE EVENT: mouseover
        skillItems[i].addEventListener('mouseover', function() {
            this.style.background = '#f8f9fa';
            this.style.padding = '5px';
            this.style.borderRadius = '5px';
            this.style.transition = 'all 0.3s ease';
        });
        
        // MOUSE EVENT: mouseout
        skillItems[i].addEventListener('mouseout', function() {
            this.style.background = 'transparent';
        });
    }
    
    
    // ========== 2. PROJECT SEARCH FUNCTION ==========
    function searchProjects() {
        var searchTerm = prompt('Search projects by technology:\n\nExamples: React, Python, JavaScript, MongoDB');
        
        if (searchTerm === null || searchTerm === '') {
            return;
        }
        
        // STRING METHOD: toLowerCase()
        searchTerm = searchTerm.toLowerCase();
        var projectCards = document.querySelectorAll('.project-card');
        var foundCount = 0;
        
        // LOOP through projects
        for (var j = 0; j < projectCards.length; j++) {
            var cardText = projectCards[j].textContent.toLowerCase();
            
            // IF-ELSE to highlight matching projects
            if (cardText.includes(searchTerm)) {
                projectCards[j].style.display = 'block';
                projectCards[j].style.border = '3px solid #2ecc71';
                projectCards[j].style.opacity = '1';
                foundCount++;
            } else {
                projectCards[j].style.opacity = '0.3';
            }
        }
        
        // CONDITIONAL feedback
        if (foundCount === 0) {
            alert('No projects found with "' + searchTerm + '"');
        } else {
            alert('Found ' + foundCount + ' projects with "' + searchTerm + '"');
        }
    }
    
    
    // ========== 3. RESET PROJECT DISPLAY ==========
    function resetProjects() {
        var projectCards = document.querySelectorAll('.project-card');
        
        // LOOP to reset all projects
        for (var k = 0; k < projectCards.length; k++) {
            projectCards[k].style.display = 'block';
            projectCards[k].style.opacity = '1';
            projectCards[k].style.border = 'none';
        }
        
        alert('Project view reset!');
    }
    
    
    // ========== 4. PROJECT RATING SYSTEM ==========
    var projectCards = document.querySelectorAll('.project-card');
    var projectRatings = {}; // VARIABLE: object to store ratings
    
    // LOOP through projects
    for (var m = 0; m < projectCards.length; m++) {
        // Use closure to preserve index
        (function(index) {
            // MOUSE EVENT: double-click to rate
            projectCards[index].addEventListener('dblclick', function() {
                var projectName = this.querySelector('h3').textContent;
                var rating = prompt('Rate this project (1-5 stars):\n\n' + projectName);
                
                if (rating === null || rating === '') {
                    return;
                }
                
                // OPERATORS: convert to number
                rating = parseInt(rating);
                
                // VALIDATION
                if (isNaN(rating) || rating < 1 || rating > 5) {
                    alert('Please enter a number between 1 and 5!');
                    return;
                }
                
                projectRatings[projectName] = rating;
                
                // STRING building with LOOP
                var stars = '';
                for (var s = 0; s < rating; s++) {
                    stars += '⭐';
                }
                
                // Add or update rating display
                var ratingDiv = this.querySelector('.project-rating');
                if (!ratingDiv) {
                    ratingDiv = document.createElement('div');
                    ratingDiv.className = 'project-rating';
                    ratingDiv.style.marginTop = '10px';
                    ratingDiv.style.fontSize = '1.2rem';
                    this.appendChild(ratingDiv);
                }
                
                ratingDiv.textContent = 'Rating: ' + stars;
            });
        })(m);
    }
    
    
    
    
    // ========== 6. ADD CONTROL BUTTONS ==========
    var techSkills = document.querySelector('.tech-skills');
    
    if (techSkills) {
        var buttonContainer = document.createElement('div');
        buttonContainer.style.textAlign = 'center';
        buttonContainer.style.marginTop = '30px';
        
        // Create Search button
        var searchBtn = document.createElement('button');
        searchBtn.textContent = '🔍 Search Projects';
        searchBtn.className = 'tech-btn';
        searchBtn.onclick = searchProjects;
        
        // Create Reset button
        var resetBtn = document.createElement('button');
        resetBtn.textContent = '🔄 Reset View';
        resetBtn.className = 'tech-btn';
        resetBtn.onclick = resetProjects;
        
        // Create Quiz button
        // var quizBtn = document.createElement('button');
        // quizBtn.textContent = '🧠 Take Quiz';
        // quizBtn.className = 'tech-btn';
        // quizBtn.onclick = codingQuiz;
        
        buttonContainer.appendChild(searchBtn);
        buttonContainer.appendChild(resetBtn);
        // buttonContainer.appendChild(quizBtn);
        techSkills.appendChild(buttonContainer);
        
        // Add button styles
        var style = document.createElement('style');
        style.textContent = `
            .tech-btn {
                margin: 10px;
                padding: 12px 25px;
                background: #3498db;
                color: white;
                border: none;
                border-radius: 25px;
                cursor: pointer;
                font-size: 1rem;
                font-weight: bold;
                transition: all 0.3s ease;
            }
            .tech-btn:hover {
                transform: translateY(-3px);
                box-shadow: 0 5px 15px rgba(0,0,0,0.3);
            }
        `;
        document.head.appendChild(style);
        
        // Make functions globally accessible
        window.searchProjects = searchProjects;
        window.resetProjects = resetProjects;
        // window.codingQuiz = codingQuiz;
    }
    
    
  
    
    
    // ========== 8. SKILL SUMMARY FUNCTION ==========
    function showSkillSummary() {
        var allSkills = document.querySelectorAll('.skill-name');
        var summary = 'Your Technical Skills:\n\n';
        
        // LOOP to build summary
        for (var n = 0; n < allSkills.length; n++) {
            summary += (n+1) + '. ' + allSkills[n].textContent + '\n';
        }
        
        summary += '\nTotal Skills: ' + allSkills.length;
        alert(summary);
    }
    
    
    // ========== 9. SKILL LEVEL ANALYZER ==========
    function analyzeSkillLevels() {
        var skillLevels = document.querySelectorAll('.skill-level');
        var total = 0;
        var count = 0;
        
        // LOOP through all skill levels
        for (var p = 0; p < skillLevels.length; p++) {
            var width = skillLevels[p].style.width;
            var level = parseInt(width);
            
            if (!isNaN(level)) {
                total += level;
                count++;
            }
        }
        
        // OPERATORS: calculate average
        var average = total / count;
        
        var analysis = 'Skill Level Analysis:\n\n';
        analysis += 'Total Skills: ' + count + '\n';
        analysis += 'Average Level: ' + average.toFixed(1) + '%\n\n';
        
        // IF-ELSE for rating
        if (average >= 80) {
            analysis += 'Rating: Expert Level! 🌟';
        } else if (average >= 60) {
            analysis += 'Rating: Advanced Level! 👍';
        } else if (average >= 40) {
            analysis += 'Rating: Intermediate Level! 📚';
        } else {
            analysis += 'Rating: Beginner Level! Keep learning! 💪';
        }
        
        alert(analysis);
    }
    
    
    // ========== 10. AUTO-PROMPT FOR SKILL SUMMARY ==========
    setTimeout(function() {
        if (confirm('Would you like to see your skill summary?')) {
            showSkillSummary();
        }
    }, 2000);
    
    
   
});
