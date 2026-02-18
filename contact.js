// ========================================
// CONTACT PAGE JAVASCRIPT (contact.js)
// Add this to contact.html: <script src="contact.js"></script>
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ========== 1. FORM VALIDATION ==========
    var submitBtn = document.querySelector('.submit-btn');
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var subjectInput = document.getElementById('subject');
    var messageInput = document.getElementById('message');
    
    if (submitBtn && nameInput && emailInput && subjectInput && messageInput) {
        
        // MOUSE EVENT: click on submit button
        submitBtn.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent actual form submission
            
            // VARIABLES: get form values
            var name = nameInput.value;
            var email = emailInput.value;
            var subject = subjectInput.value;
            var message = messageInput.value;
            
            // ========== VALIDATION WITH IF CONDITIONS ==========
            
            // Check name length using STRING property
            if (name === '' || name.length < 2) {
                alert('❌ Please enter a valid name (at least 2 characters)!');
                nameInput.focus();
                nameInput.style.borderColor = 'red';
                return;
            }
            
            // Email validation with STRING METHODS: includes()
            if (email === '' || !email.includes('@') || !email.includes('.')) {
                alert('❌ Please enter a valid email address!');
                emailInput.focus();
                emailInput.style.borderColor = 'red';
                return;
            }
            
            // Check subject
            if (subject === '' || subject.length < 3) {
                alert('❌ Please enter a subject (at least 3 characters)!');
                subjectInput.focus();
                subjectInput.style.borderColor = 'red';
                return;
            }
            
            // Check message
            if (message === '' || message.length < 10) {
                alert('❌ Please enter a message (at least 10 characters)!');
                messageInput.focus();
                messageInput.style.borderColor = 'red';
                return;
            }
            
            // ========== SUCCESS MESSAGE ==========
            // STRING concatenation
            var successMsg = '✅ Message Sent Successfully!\n\n';
            successMsg += 'Name: ' + name + '\n';
            successMsg += 'Email: ' + email + '\n';
            successMsg += 'Subject: ' + subject + '\n';
            
            // STRING METHOD: substring()
            successMsg += 'Message: ' + message.substring(0, 50) + '...\n\n';
            successMsg += 'Thank you for contacting me!';
            
            alert(successMsg);
            
            // Clear form
            nameInput.value = '';
            emailInput.value = '';
            subjectInput.value = '';
            messageInput.value = '';
            
            // Reset border colors - CHANGING CSS
            nameInput.style.borderColor = '#ecf0f1';
            emailInput.style.borderColor = '#ecf0f1';
            subjectInput.style.borderColor = '#ecf0f1';
            messageInput.style.borderColor = '#ecf0f1';
        });
    }
    
    
    // ========== 2. REAL-TIME CHARACTER COUNTER ==========
    if (messageInput) {
        // KEYBOARD EVENT: input
        messageInput.addEventListener('input', function() {
            var charCount = this.value.length; // STRING property: length
            var maxChars = 500;
            
            var counterDiv = document.getElementById('charCounter');
            if (!counterDiv) {
                counterDiv = document.createElement('div');
                counterDiv.id = 'charCounter';
                counterDiv.style.marginTop = '5px';
                counterDiv.style.fontSize = '0.9rem';
                this.parentNode.appendChild(counterDiv);
            }
            
            // CHANGING HTML
            counterDiv.textContent = charCount + ' / ' + maxChars + ' characters';
            
            // IF-ELSE CONDITIONS for color coding
            if (charCount > maxChars) {
                counterDiv.style.color = 'red';
                // STRING METHOD: substring() to limit length
                this.value = this.value.substring(0, maxChars);
            } else if (charCount > maxChars * 0.8) {
                counterDiv.style.color = 'orange';
            } else {
                counterDiv.style.color = 'green';
            }
        });
    }
    
    
    // ========== 3. INPUT FIELD FOCUS EFFECTS ==========
    var inputs = [nameInput, emailInput, subjectInput, messageInput];
    
    // LOOP through all inputs
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i]) {
            // MOUSE EVENT: focus
            inputs[i].addEventListener('focus', function() {
                // CHANGING CSS
                this.style.borderColor = '#e67e22';
                this.style.boxShadow = '0 0 10px rgba(230, 126, 34, 0.3)';
                this.style.transition = 'all 0.3s ease';
            });
            
            // MOUSE EVENT: blur (when input loses focus)
            inputs[i].addEventListener('blur', function() {
                this.style.borderColor = '#ecf0f1';
                this.style.boxShadow = 'none';
            });
        }
    }
    
    
    // ========== 4. SOCIAL LINK CLICK TRACKER ==========
    var socialLinks = document.querySelectorAll('.social-link');
    var clickCounts = {}; // VARIABLE: object
    
    // LOOP through social links
    for (var j = 0; j < socialLinks.length; j++) {
        // MOUSE EVENT: click
        socialLinks[j].addEventListener('click', function(event) {
            event.preventDefault();
            
            var platform = this.querySelector('span:last-child').textContent;
            
            // IF to initialize counter
            if (!clickCounts[platform]) {
                clickCounts[platform] = 0;
            }
            
            // OPERATORS: increment
            clickCounts[platform]++;
            
            alert('You clicked on ' + platform + '!\n\nTotal clicks: ' + clickCounts[platform]);
        });
    }
    
    
    // ========== 5. QUICK MESSAGE TEMPLATES FUNCTION ==========
    function insertTemplate() {
        // VARIABLE: object with templates
        var templates = {
            '1': 'Hi! I would like to discuss a project collaboration opportunity.',
            '2': 'Hello! I am interested in learning more about your technical skills.',
            '3': 'Hi there! I would like to connect and network with you.'
        };
        
        var choice = prompt('Choose a message template:\n\n1. Project Collaboration\n2. Technical Inquiry\n3. Networking\n\nEnter number (1-3):');
        
        // IF to check valid choice
        if (templates[choice]) {
            messageInput.value = templates[choice];
            messageInput.focus();
        } else if (choice !== null) {
            alert('Invalid choice! Please enter 1, 2, or 3.');
        }
    }
    
    
    // ========== 6. EMAIL SUGGESTION ==========
    if (emailInput) {
        emailInput.addEventListener('blur', function() {
            var email = this.value.toLowerCase();
            var commonDomains = ['gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com'];
            
            // IF: check if email has @ but missing .com
            if (email.includes('@') && !email.includes('.com') && !email.includes('.net')) {
                var suggestion = '';
                
                // LOOP through common domains
                for (var k = 0; k < commonDomains.length; k++) {
                    // STRING METHOD: split()
                    if (email.includes(commonDomains[k].split('.')[0])) {
                        suggestion = commonDomains[k];
                        break;
                    }
                }
                
                if (suggestion) {
                    var parts = email.split('@');
                    var suggested = parts[0] + '@' + suggestion;
                    
                    if (confirm('Did you mean: ' + suggested + '?')) {
                        this.value = suggested;
                    }
                }
            }
        });
    }
    
    
    // ========== 7. ADD TEMPLATE BUTTON ==========
    var formWrapper = document.querySelector('.form-wrapper');
    
    if (formWrapper) {
        var templateBtn = document.createElement('button');
        templateBtn.textContent = '📝 Use Template';
        templateBtn.style.width = '100%';
        templateBtn.style.padding = '10px';
        templateBtn.style.marginBottom = '15px';
        templateBtn.style.background = '#3498db';
        templateBtn.style.color = 'white';
        templateBtn.style.border = 'none';
        templateBtn.style.borderRadius = '8px';
        templateBtn.style.cursor = 'pointer';
        templateBtn.style.fontSize = '1rem';
        templateBtn.style.transition = 'all 0.3s ease';
        
        // MOUSE EVENTS
        templateBtn.addEventListener('click', function(e) {
            e.preventDefault();
            insertTemplate();
        });
        
        templateBtn.addEventListener('mouseover', function() {
            this.style.background = '#2980b9';
            this.style.transform = 'scale(1.02)';
        });
        
        templateBtn.addEventListener('mouseout', function() {
            this.style.background = '#3498db';
            this.style.transform = 'scale(1)';
        });
        
        formWrapper.insertBefore(templateBtn, formWrapper.firstChild);
    }
    
    
    // ========== 8. CONTACT INFO COPY FUNCTIONALITY ==========
    var infoItems = document.querySelectorAll('.info-item a');
    
    // LOOP through info items
    for (var m = 0; m < infoItems.length; m++) {
        infoItems[m].addEventListener('click', function(event) {
            event.preventDefault();
            var text = this.textContent;
            
            var confirmed = confirm('Copy to clipboard?\n\n' + text);
            if (confirmed) {
                alert('✅ Copied: ' + text + '\n\n(Simulated - actual clipboard requires permissions)');
            }
        });
    }
    
    
  
    
    
    // ========== 10. FORM FIELD VALIDATOR ==========
    function validateField(field, minLength, fieldName) {
        var value = field.value;
        
        // IF-ELSE validation
        if (value.length < minLength) {
            field.style.borderColor = 'red';
            return false;
        } else {
            field.style.borderColor = 'green';
            return true;
        }
    }
    
    
    // ========== 11. MESSAGE LENGTH ANALYZER ==========
    function analyzeMessage() {
        var text = messageInput.value;
        
        // STRING METHODS
        var wordCount = text.split(' ').length;
        var charCount = text.length;
        var sentenceCount = text.split('.').length - 1;
        
        var analysis = 'Message Analysis:\n\n';
        analysis += 'Characters: ' + charCount + '\n';
        analysis += 'Words: ' + wordCount + '\n';
        analysis += 'Sentences: ' + sentenceCount + '\n\n';
        
        // IF-ELSE for recommendation
        if (wordCount < 10) {
            analysis += 'Recommendation: Add more details';
        } else if (wordCount > 100) {
            analysis += 'Recommendation: Message is detailed!';
        } else {
            analysis += 'Recommendation: Good length!';
        }
        
        alert(analysis);
    }
    
    
    
    // ========== 13. WELCOME MESSAGE ==========
    // setTimeout(function() {
    //     alert('👋 Welcome to the Contact Page!\n\nFeel free to reach out. I typically respond within 24-48 hours.');
    // }, 1000);
    
    console.log('Contact page JavaScript loaded successfully!');
});
