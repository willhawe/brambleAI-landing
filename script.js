// DOM elements
const form = document.getElementById('signup-form');
const submitBtn = document.querySelector('.submit-btn');
const btnText = document.querySelector('.btn-text');
const loadingSpinner = document.querySelector('.loading-spinner');
const successMessage = document.getElementById('success-message');
const logo = document.getElementById('company-logo');

// Google Apps Script Web App URL - Replace with your deployed web app URL
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyOht2g80rG15gGPOxrA7FPCxm4NZSZJrX-9kZ7PQspYQPz70BKa95nhzvXHjQRnLv6zA/exec';

// Handle form submission
form.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(form);
    const data = {
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        email: formData.get('email'),
        company: formData.get('company'),
        newsletter: formData.get('newsletter') === 'on',
        
    };
    
    // Validate required fields
    if (!data.firstName || !data.lastName || !data.email) {
        showError('Please fill in all required fields.');
        return;
    }
    
    // Validate email format
    if (!isValidEmail(data.email)) {
        showError('Please enter a valid email address.');
        return;
    }
    
    // Show loading state
    showLoading(true);
    
    try {
        // Submit to Google Sheets
        await submitToGoogleSheets(data);
        
    } catch (error) {
        showError('Something went wrong. Please try again.');
        console.error('Form submission error:', error);
    } finally {
        showLoading(false);
    }
});

// Submit to Google Sheets
async function submitToGoogleSheets(data) {
    console.log('Submitting to Google Sheets:', data);
    
    const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Important for Google Apps Script
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    
    // Note: With no-cors mode, we can't read the response
    // So we assume success if no error was thrown
    showSuccess();
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show loading state
function showLoading(isLoading) {
    if (isLoading) {
        submitBtn.disabled = true;
        btnText.textContent = 'Submitting...';
        loadingSpinner.style.display = 'inline-block';
    } else {
        submitBtn.disabled = false;
        btnText.textContent = 'Get Updates';
        loadingSpinner.style.display = 'none';
    }
}

// Show success message
function showSuccess() {
    form.style.display = 'none';
    successMessage.style.display = 'block';
    
    // Add animation
    successMessage.style.opacity = '0';
    successMessage.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        successMessage.style.transition = 'all 0.5s ease';
        successMessage.style.opacity = '1';
        successMessage.style.transform = 'translateY(0)';
    }, 100);
}

// Show error message
function showError(message) {
    // Remove any existing error messages
    const existingError = document.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
    
    // Create error message element
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.innerHTML = `
        <div style="
            background: #fef2f2;
            border: 2px solid #fecaca;
            color: #dc2626;
            padding: 1rem;
            border-radius: 8px;
            margin-bottom: 1rem;
            text-align: center;
            font-weight: 500;
        ">
            ${message}
        </div>
    `;
    
    // Insert before the form
    form.parentNode.insertBefore(errorDiv, form);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (errorDiv.parentNode) {
            errorDiv.remove();
        }
    }, 5000);
}

// Handle logo error (if logo file doesn't exist)
logo.addEventListener('error', function() {
    // Hide the logo if it can't be loaded
    this.style.display = 'none';
    
    // Adjust the layout to center the company name
    document.querySelector('.logo-container').style.justifyContent = 'center';
});

// Add smooth scrolling for any internal links
document.addEventListener('DOMContentLoaded', function() {
    // Add focus styles for accessibility
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.style.transform = 'scale(1.02)';
            this.parentElement.style.transition = 'transform 0.2s ease';
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.style.transform = 'scale(1)';
        });
    });
    
    // Console log for debugging
    console.log('BrambleAI Landing Page loaded successfully!');
    console.log('Form submissions will be sent to Google Sheets.');
});
