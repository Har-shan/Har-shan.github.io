// ========================================
// HOBBIES PAGE JAVASCRIPT (hobbies.js)
// Add this to hobbies.html: <script src="hobbies.js"></script>
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ========== 1. VARIABLES - Hobby Time Tracker ==========
    var hobbyTimes = {
        'Reading': 0,
        'Music': 0,
        'Photography': 0,
        'Gaming': 0,
        'Sports & Fitness': 0,
        'Travel': 0
    };
    
    
    // ========== 2. FUNCTION - Track Hobby Time ==========
    function trackHobbyTime() {
        var hobbyList = '1. Reading\n2. Music\n3. Photography\n4. Gaming\n5. Sports & Fitness\n6. Travel';
        var hobbyName = prompt('Which hobby did you spend time on today?\n\n' + hobbyList + '\n\nEnter the name:');
        
        // IF CONDITION - check if cancelled
        if (hobbyName === null || hobbyName === '') {
            return;
        }
        
        // STRING METHOD: toLowerCase() for comparison
        var foundHobby = null;
        
        // LOOP through object keys
        for (var hobby in hobbyTimes) {
            if (hobby.toLowerCase() === hobbyName.toLowerCase()) {
                foundHobby = hobby;
                break;
            }
        }
        
        // IF-ELSE validation
        if (foundHobby === null) {
            alert('Hobby not found! Please enter a valid hobby name.');
            return;
        }
        
        var hours = parseFloat(prompt('How many hours did you spend on ' + foundHobby + '?'));
        
        // VALIDATION with IF
        if (isNaN(hours) || hours < 0) {
            alert('Please enter a valid number of hours!');
            return;
        }
        
        // OPERATORS: addition assignment
        hobbyTimes[foundHobby] += hours;
        
        // Display summary
        var summary = 'Hobby Time Summary:\n\n';
        var totalHours = 0;
        
        // LOOP to calculate total
        for (var h in hobbyTimes) {
            summary += h + ': ' + hobbyTimes[h] + ' hours\n';
            totalHours += hobbyTimes[h];
        }
        
        summary += '\nTotal: ' + totalHours + ' hours';
        alert(summary);
    }
    
    
    // ========== 3. INTERACTIVE HOBBY CARDS ==========
    var hobbyCards = document.querySelectorAll('.hobby-card');
    var favoriteHobby = null;
    
    // LOOP through all hobby cards
    for (var i = 0; i < hobbyCards.length; i++) {
        
        // MOUSE EVENT: click to mark favorite
        hobbyCards[i].addEventListener('click', function() {
            // Remove previous favorite highlighting
            for (var j = 0; j < hobbyCards.length; j++) {
                hobbyCards[j].style.border = 'none';
                hobbyCards[j].style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
            }
            
            // CHANGING CSS - mark this as favorite
            this.style.border = '4px solid gold';
            this.style.boxShadow = '0 10px 30px rgba(255, 215, 0, 0.5)';
            
            // SELECTING ELEMENTS
            var hobbyName = this.querySelector('h3').textContent;
            favoriteHobby = hobbyName;
            
            alert('⭐ ' + hobbyName + ' marked as your favorite hobby!');
        });
        
        // MOUSE EVENT: double-click for details
        hobbyCards[i].addEventListener('dblclick', function() {
            var hobbyName = this.querySelector('h3').textContent;
            var hobbyDesc = this.querySelector('p').textContent;
            var details = this.querySelector('.hobby-details').textContent;
            
            // STRING concatenation
            var message = '🎨 ' + hobbyName + '\n\n';
            message += hobbyDesc + '\n\n';
            message += details;
            
            alert(message);
        });
        
        // MOUSE EVENT: mouseover
        hobbyCards[i].addEventListener('mouseover', function() {
            this.style.transform = 'translateY(-8px)';
            this.style.transition = 'all 0.3s ease';
            this.style.cursor = 'pointer';
        });
        
        // MOUSE EVENT: mouseout
        hobbyCards[i].addEventListener('mouseout', function() {
            this.style.transform = 'translateY(0)';
        });
    }
    
    
    // ========== 4. FILTER HOBBIES FUNCTION ==========
    function filterHobbies(category) {
        var searchTerm = category.toLowerCase();
        var visibleCount = 0;
        
        // LOOP through all hobby cards
        for (var k = 0; k < hobbyCards.length; k++) {
            var cardText = hobbyCards[k].textContent.toLowerCase();
            
            // IF-ELSE to show/hide cards
            if (searchTerm === 'all' || cardText.includes(searchTerm)) {
                hobbyCards[k].style.display = 'block';
                visibleCount++;
            } else {
                hobbyCards[k].style.display = 'none';
            }
        }
        
        // Update result display
        var resultDiv = document.getElementById('filterResult');
        if (resultDiv) {
            resultDiv.textContent = 'Showing ' + visibleCount + ' hobbies';
        }
    }
    
    
    // ========== 5. ADD FILTER BUTTONS ==========
    var header = document.querySelector('.page-header');
    if (header) {
        var filterContainer = document.createElement('div');
        filterContainer.style.textAlign = 'center';
        filterContainer.style.margin = '20px 0';
        
        var filterHTML = '<h3 style="color: #2c3e50; margin-bottom: 10px;">Filter Hobbies:</h3>';
        filterHTML += '<button onclick="filterHobbies(\'all\')" class="filter-btn">All</button>';
        filterHTML += '<button onclick="filterHobbies(\'reading\')" class="filter-btn">Reading</button>';
        filterHTML += '<button onclick="filterHobbies(\'music\')" class="filter-btn">Music</button>';
        filterHTML += '<button onclick="filterHobbies(\'active\')" class="filter-btn">Active</button>';
        filterHTML += '<div id="filterResult" style="margin-top: 10px; color: #7f8c8d; font-weight: bold;"></div>';
        
        filterContainer.innerHTML = filterHTML;
        header.appendChild(filterContainer);
        
        // Add styles to filter buttons
        var style = document.createElement('style');
        style.textContent = `
            .filter-btn {
                margin: 5px;
                padding: 10px 20px;
                background: #3498db;
                color: white;
                border: none;
                border-radius: 20px;
                cursor: pointer;
                font-size: 1rem;
                transition: all 0.3s ease;
            }
            .filter-btn:hover {
                background: #2980b9;
                transform: scale(1.05);
            }
        `;
        document.head.appendChild(style);
        
        // Make filterHobbies globally accessible
        window.filterHobbies = filterHobbies;
    }
    
    
    // ========== 6. RANDOM HOBBY SUGGESTION ==========
    function suggestRandomHobby() {
        var hobbies = ['Reading', 'Music', 'Photography', 'Gaming', 'Sports & Fitness', 'Travel'];
        
        // OPERATORS: Math.random() and Math.floor()
        var randomIndex = Math.floor(Math.random() * hobbies.length);
        var suggestion = hobbies[randomIndex];
        
        alert('🎲 Random Hobby Suggestion:\n\nWhy not spend some time on ' + suggestion + ' today?');
    }
    
    
    // ========== 7. ADD TIME TRACKER BUTTON ==========
    var trackerButton = document.createElement('button');
    trackerButton.textContent = '⏱️ Track Hobby Time';
    trackerButton.style.position = 'fixed';
    trackerButton.style.bottom = '30px';
    trackerButton.style.right = '30px';
    trackerButton.style.padding = '15px 25px';
    trackerButton.style.background = 'linear-gradient(135deg, #f093fb, #f5576c)';
    trackerButton.style.color = 'white';
    trackerButton.style.border = 'none';
    trackerButton.style.borderRadius = '50px';
    trackerButton.style.fontSize = '1rem';
    trackerButton.style.fontWeight = 'bold';
    trackerButton.style.cursor = 'pointer';
    trackerButton.style.boxShadow = '0 5px 15px rgba(0,0,0,0.3)';
    trackerButton.style.zIndex = '1000';
    
    // MOUSE EVENTS
    trackerButton.addEventListener('click', trackHobbyTime);
    
    trackerButton.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.1)';
        this.style.transition = 'all 0.3s ease';
    });
    
    trackerButton.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
    });
    
    document.body.appendChild(trackerButton);
    
    
    // // ========== 8. KEYBOARD SHORTCUTS ==========
    // document.addEventListener('keypress', function(event) {
    //     var key = event.key.toLowerCase();
        
    //     // IF-ELSE for different keys
    //     if (key === 't') {
    //         trackHobbyTime();
    //     } else if (key === 'r') {
    //         suggestRandomHobby();
    //     } else if (key === 'a') {
    //         filterHobbies('all');
    //     } else if (key === 'h') {
    //         if (confirm('Go back to Home page?')) {
    //             window.location.href = 'index.html';
    //         }
    //     }
    // });
    
    
    // ========== 9. HOBBY STATISTICS ==========
    function showHobbyStats() {
        var totalHobbies = hobbyCards.length;
        
        // LOOP to count different types
        var activeCount = 0;
        var creativeCount = 0;
        
        for (var m = 0; m < hobbyCards.length; m++) {
            var text = hobbyCards[m].textContent.toLowerCase();
            
            if (text.includes('sport') || text.includes('active') || text.includes('fitness')) {
                activeCount++;
            }
            if (text.includes('music') || text.includes('photo') || text.includes('reading')) {
                creativeCount++;
            }
        }
        
        var stats = 'Hobby Statistics:\n\n';
        stats += 'Total Hobbies: ' + totalHobbies + '\n';
        stats += 'Active Hobbies: ' + activeCount + '\n';
        stats += 'Creative Hobbies: ' + creativeCount + '\n';
        
        alert(stats);
    }
    
   
    console.log('Hobbies page JavaScript loaded successfully!');
});
