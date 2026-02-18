// ========================================
// LANDING PAGE JAVASCRIPT (index.js)
// Add this to index.html: <script src="index.js"></script>
// ========================================

// Wait for page to load
document.addEventListener('DOMContentLoaded', function() {
    
    // ========== 1. VARIABLES & DYNAMIC GREETING ==========
    var currentHour = new Date().getHours();
    var greeting = "";
    
    // IF CONDITIONS to determine greeting
    if (currentHour < 12) {
        greeting = "Good Morning! ";
    } else if (currentHour < 18) {
        greeting = "Good Afternoon! ";
    } else {
        greeting = "Good Evening! ";
    }
    
    // SELECTING ELEMENTS & CHANGING HTML
    var heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        var originalTitle = heroTitle.textContent;
        heroTitle.textContent = greeting + " " + originalTitle;
    }
    
    
    // ========== 2. THEME TOGGLE FEATURE ==========
    var clickCount = 0;
    
    function toggleTheme() {
        clickCount++; // OPERATORS: increment
        var body = document.body;
        
        // CHANGING CSS
        if (body.classList.contains('dark-theme')) {
            body.classList.remove('dark-theme');
            body.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
            alert('Light mode activated! You have clicked ' + clickCount + ' times.');
        } else {
            body.classList.add('dark-theme');
            body.style.background = 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)';
            alert('Dark mode activated! You have clicked ' + clickCount + ' times.');
        }
    }
    
    // Add theme toggle button dynamically
    var heroButtons = document.querySelector('.hero-buttons');
    if (heroButtons) {
        var themeBtn = document.createElement('a');
        themeBtn.textContent = '🎨 Toggle Theme';
        themeBtn.className = 'btn btn-secondary';
        themeBtn.style.cursor = 'pointer';
        
        // MOUSE EVENT: click
        themeBtn.addEventListener('click', toggleTheme);
        heroButtons.appendChild(themeBtn);
    }
    
    
    // ========== 3. INTERACTIVE FEATURE CARDS ==========
    var featureCards = document.querySelectorAll('.feature-card');
    
    // LOOPS: Add event listeners to all cards
    for (var i = 0; i < featureCards.length; i++) {
        
        // MOUSE EVENT: mouseover
        featureCards[i].addEventListener('mouseover', function() {
            this.style.transform = 'translateY(-15px) scale(1.05)';
            this.style.transition = 'all 0.3s ease';
        });
        
        // MOUSE EVENT: mouseout
        featureCards[i].addEventListener('mouseout', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        // MOUSE EVENT: click
        featureCards[i].addEventListener('click', function(event) {
            var cardTitle = this.querySelector('h3').textContent;
            var response = confirm('You clicked on "' + cardTitle + '"! Do you want to visit this page?');
            
            if (!response) {
                event.preventDefault();
            }
        });
    }
    
    

    
    
    // ========== 5. FUNCTION - Visit Counter ==========
    // function updateVisitCounter() {
    //     // Get stored count or set to 0
    //     var visits = localStorage.getItem('visitCount');
        
    //     if (visits === null) {
    //         visits = 0;
    //     }
        
    //     // OPERATORS: convert string to number and add
    //     visits = parseInt(visits) + 1;
        
    //     // Save back to storage
    //     localStorage.setItem('visitCount', visits);
        
    //     // Create counter display
    //     var counterDiv = document.createElement('div');
    //     counterDiv.style.position = 'fixed';
    //     counterDiv.style.bottom = '80px';
    //     counterDiv.style.right = '20px';
    //     counterDiv.style.background = 'rgba(255,255,255,0.95)';
    //     counterDiv.style.padding = '10px 20px';
    //     counterDiv.style.borderRadius = '25px';
    //     counterDiv.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)';
    //     counterDiv.style.color = '#2c3e50';
    //     counterDiv.style.fontWeight = 'bold';
    //     counterDiv.style.zIndex = '9999';
        
    //     // STRING concatenation
    //     counterDiv.innerHTML = '👁️ Visits: ' + visits;
    //     document.body.appendChild(counterDiv);
    // }
    
    // updateVisitCounter();
    
    
    // ========== 6. STRING MANIPULATION ==========
    // var userName = prompt('Welcome! What is your name?');
    
    // if (userName !== null && userName !== '') {
    //     // STRING METHODS: toUpperCase(), concatenation
    //     var welcomeMsg = 'Hello, ' + userName.toUpperCase() + '! Welcome to my portfolio! 🎉';
        
    //     var welcomeDiv = document.createElement('div');
    //     welcomeDiv.style.position = 'fixed';
    //     welcomeDiv.style.top = '80px';
    //     welcomeDiv.style.left = '50%';
    //     welcomeDiv.style.transform = 'translateX(-50%)';
    //     welcomeDiv.style.background = 'rgba(46, 204, 113, 0.95)';
    //     welcomeDiv.style.color = 'white';
    //     welcomeDiv.style.padding = '15px 30px';
    //     welcomeDiv.style.borderRadius = '10px';
    //     welcomeDiv.style.boxShadow = '0 4px 15px rgba(0,0,0,0.3)';
    //     welcomeDiv.style.fontSize = '1.2rem';
    //     welcomeDiv.style.zIndex = '9999';
    //     welcomeDiv.textContent = welcomeMsg;
    //     document.body.appendChild(welcomeDiv);
        
    //     // FUNCTION with setTimeout
    //     setTimeout(function() {
    //         welcomeDiv.style.display = 'none';
    //     }, 5000);
    // }
    
    
    // ========== 7. ANIMATED SCROLL EFFECT ==========
    window.addEventListener('scroll', function() {
        var scrolled = window.pageYOffset;
        var navbar = document.querySelector('.navbar');
        
        if (navbar) {
            if (scrolled > 50) {
                navbar.style.background = 'rgba(44, 62, 80, 0.95)';
                navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)';
            } else {
                navbar.style.background = 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)';
                navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
            }
        }
    });
    
    
    
    
    console.log('Landing page JavaScript loaded successfully!');
});
