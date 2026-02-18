// ==================== TAB FUNCTIONALITY ====================
document.addEventListener('DOMContentLoaded', function() {
    initializeTabs();
    initializeFeeCalculator();
    initializeScrollAnimations();
});

// Initialize tab switching functionality
function initializeTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            switchTab(tabId);
        });
    });
}

function switchTab(tabId) {
    // Remove active class from all buttons and content
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    
    // Add active class to selected button and content
    const activeButton = document.querySelector(`[data-tab="${tabId}"]`);
    const activeContent = document.getElementById(tabId);
    
    if (activeButton && activeContent) {
        activeButton.classList.add('active');
        activeContent.classList.add('active');
        
        // Add animation
        activeContent.style.animation = 'none';
        setTimeout(() => {
            activeContent.style.animation = 'fadeIn 0.5s ease-in';
        }, 10);
    }
}

// ==================== FEE CALCULATOR ====================
const feeData = {
    phd: {
        general: {
            admissionFee: 320,
            initialFee: 330,
            tuitionFee: 1090,
            miscFee: 3630,
            depositFee: 1750,
            total: 7120
        },
        foreign: {
            perSemester: 1400,
            currency: 'USD'
        }
    },
    integrated: {
        general: {
            admissionFee: 320,
            initialFee: 19330,
            tuitionFee: 10465,
            miscFee: 5905,
            depositFee: 1750,
            total: 37770
        },
        foreign: {
            perSemester: 1400,
            currency: 'USD'
        }
    },
    mtech: {
        general: {
            admissionFee: 320,
            initialFee: 19330,
            tuitionFee: 10465,
            miscFee: 5905,
            depositFee: 1750,
            total: 37770
        },
        foreign: {
            perSemester: 1400,
            currency: 'USD'
        }
    },
    mca: {
        general: {
            admissionFee: 320,
            initialFee: 19330,
            tuitionFee: 10540,
            miscFee: 5685,
            depositFee: 1755,
            total: 37630
        },
        foreign: {
            perSemester: 1400,
            currency: 'USD'
        }
    }
};

function initializeFeeCalculator() {
    updateFees();
}

function updateFees() {
    const program = document.getElementById('program-select').value;
    const category = document.getElementById('category-select').value;
    
    const feeElements = {
        admissionFee: document.getElementById('admission-fee'),
        initialFee: document.getElementById('initial-fee'),
        tuitionFee: document.getElementById('tuition-fee'),
        miscFee: document.getElementById('misc-fee'),
        depositFee: document.getElementById('deposit-fee'),
        totalFee: document.getElementById('total-fee')
    };
    
    if (category === 'foreign') {
        const foreignData = feeData[program].foreign;
        
        // Update all fields to show foreign student fee
        Object.keys(feeElements).forEach(key => {
            if (key === 'totalFee') {
                feeElements[key].innerHTML = `<strong>$${foreignData.perSemester} per semester</strong>`;
            } else {
                feeElements[key].textContent = 'Included';
            }
            animateValue(feeElements[key]);
        });
    } else {
        const generalData = feeData[program].general;
        
        feeElements.admissionFee.textContent = `₹${generalData.admissionFee.toLocaleString('en-IN')}`;
        feeElements.initialFee.textContent = `₹${generalData.initialFee.toLocaleString('en-IN')}`;
        feeElements.tuitionFee.textContent = `₹${generalData.tuitionFee.toLocaleString('en-IN')}`;
        feeElements.miscFee.textContent = `₹${generalData.miscFee.toLocaleString('en-IN')}`;
        feeElements.depositFee.textContent = `₹${generalData.depositFee.toLocaleString('en-IN')}`;
        feeElements.totalFee.innerHTML = `<strong>₹${generalData.total.toLocaleString('en-IN')}</strong>`;
        
        // Animate all fee elements
        Object.values(feeElements).forEach(element => {
            animateValue(element);
        });
    }
}

function animateValue(element) {
    element.style.transform = 'scale(1.1)';
    element.style.color = '#10b981';
    
    setTimeout(() => {
        element.style.transform = 'scale(1)';
        element.style.color = '#2563eb';
    }, 300);
}

function showFeeCalculator(programId) {
    // Update the fee calculator program selection
    document.getElementById('program-select').value = programId;
    updateFees();
    
    // Scroll to fee calculator section smoothly
    const feeSection = document.getElementById('fee-section');
    feeSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
    });
    
    // Add highlight animation
    feeSection.style.animation = 'highlight 1s ease-in-out';
    setTimeout(() => {
        feeSection.style.animation = '';
    }, 1000);
}

// ==================== ACCORDION FUNCTIONALITY ====================
function toggleAccordion(id) {
    const content = document.getElementById(id);
    const button = content.previousElementSibling;
    
    // Toggle active class
    button.classList.toggle('active');
    content.classList.toggle('active');
    
    // Animate icon rotation
    const icon = button.querySelector('.accordion-icon');
    if (content.classList.contains('active')) {
        icon.style.transform = 'rotate(180deg)';
    } else {
        icon.style.transform = 'rotate(0deg)';
    }
}

// ==================== SCROLL ANIMATIONS ====================
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all cards and sections
    const elementsToAnimate = document.querySelectorAll(
        '.program-card, .link-card, .fee-breakdown, .stat-card'
    );
    
    elementsToAnimate.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}

// ==================== SMOOTH SCROLL FOR NAVIGATION ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ==================== DYNAMIC STAT COUNTER ====================
function animateStatCounters() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(stat => {
        const target = parseInt(stat.textContent.replace('+', ''));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                stat.textContent = Math.floor(current) + (stat.textContent.includes('+') ? '+' : '');
                requestAnimationFrame(updateCounter);
            } else {
                stat.textContent = target + (stat.textContent.includes('+') ? '+' : '');
            }
        };
        
        updateCounter();
    });
}

// Run counter animation when page loads
window.addEventListener('load', animateStatCounters);

// ==================== MOBILE MENU TOGGLE ====================
function toggleMobileMenu() {
    const nav = document.querySelector('.main-nav ul');
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
}

// ==================== SEARCH FUNCTIONALITY (Example) ====================
function initializeSearch() {
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            // Implementation for search would go here
            console.log('Searching for:', searchTerm);
        });
    }
}

// ==================== FORM VALIDATION (Example) ====================
function validateForm(formId) {
    const form = document.getElementById(formId);
    if (!form) return false;
    
    let isValid = true;
    const inputs = form.querySelectorAll('input[required], select[required]');
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.borderColor = '#ef4444';
            isValid = false;
        } else {
            input.style.borderColor = '#10b981';
        }
    });
    
    return isValid;
}

// ==================== TOOLTIP FUNCTIONALITY ====================
function createTooltip(element, text) {
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.textContent = text;
    tooltip.style.cssText = `
        position: absolute;
        background: #1f2937;
        color: white;
        padding: 0.5rem 1rem;
        border-radius: 6px;
        font-size: 0.875rem;
        white-space: nowrap;
        z-index: 1000;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;
    
    element.addEventListener('mouseenter', function() {
        document.body.appendChild(tooltip);
        const rect = element.getBoundingClientRect();
        tooltip.style.top = (rect.top - tooltip.offsetHeight - 5) + 'px';
        tooltip.style.left = (rect.left + (rect.width - tooltip.offsetWidth) / 2) + 'px';
        setTimeout(() => tooltip.style.opacity = '1', 10);
    });
    
    element.addEventListener('mouseleave', function() {
        tooltip.style.opacity = '0';
        setTimeout(() => {
            if (tooltip.parentNode) {
                document.body.removeChild(tooltip);
            }
        }, 300);
    });
}

// ==================== KEYBOARD NAVIGATION ====================
document.addEventListener('keydown', function(e) {
    // Tab navigation for tabs
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        const activeTab = document.querySelector('.tab-btn.active');
        if (activeTab) {
            const tabs = Array.from(document.querySelectorAll('.tab-btn'));
            const currentIndex = tabs.indexOf(activeTab);
            let nextIndex;
            
            if (e.key === 'ArrowRight') {
                nextIndex = (currentIndex + 1) % tabs.length;
            } else {
                nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
            }
            
            tabs[nextIndex].click();
        }
    }
});

// ==================== PRINT FUNCTIONALITY ====================
function printFeeStructure() {
    window.print();
}

// ==================== EXPORT TO PDF (Example) ====================
function exportToPDF() {
    // This would require a PDF library like jsPDF
    console.log('Export to PDF functionality would be implemented here');
    alert('PDF export feature - would require jsPDF library integration');
}

// ==================== HIGHLIGHT ANIMATION ====================
const highlightKeyframes = `
    @keyframes highlight {
        0%, 100% {
            background-color: transparent;
        }
        50% {
            background-color: rgba(37, 99, 235, 0.1);
        }
    }
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = highlightKeyframes;
document.head.appendChild(styleSheet);

// ==================== ACCESSIBILITY IMPROVEMENTS ====================
// Add ARIA labels and roles where needed
function improveAccessibility() {
    // Add role and aria-label to interactive elements
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach((btn, index) => {
        btn.setAttribute('role', 'tab');
        btn.setAttribute('aria-selected', btn.classList.contains('active'));
        btn.setAttribute('tabindex', btn.classList.contains('active') ? '0' : '-1');
    });
    
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        content.setAttribute('role', 'tabpanel');
    });
}

// Run accessibility improvements on load
window.addEventListener('load', improveAccessibility);

// ==================== UTILITY FUNCTIONS ====================
function formatCurrency(amount, currency = 'INR') {
    if (currency === 'INR') {
        return `₹${amount.toLocaleString('en-IN')}`;
    } else if (currency === 'USD') {
        return `$${amount.toLocaleString('en-US')}`;
    }
    return amount;
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ==================== CONSOLE GREETING ====================
console.log('%c Welcome to SCIS UOH Admissions! ', 'background: #2563eb; color: white; font-size: 16px; padding: 10px;');
console.log('%c Redesigned with modern web technologies', 'color: #6b7280; font-size: 12px;');
