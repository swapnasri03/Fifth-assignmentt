// --- 1. Color Changer Logic ---

// Get the two elements we need
const button = document.getElementById('color-btn');
const box = document.getElementById('color-box');

// Simple array of colors
const colors = ['#ff6347', '#4682b4', '#3cb371', '#daa520'];
let index = 0; // Start at the first color (index 0)

// Function to handle the color change
button.addEventListener('click', function() {
    // Set the background color
    box.style.backgroundColor = colors[index];
    
    // Move to the next color
    index = index + 1;
    
    // If we run out of colors, go back to the start (0)
    if (index >= colors.length) {
        index = 0;
    }
});


// --- 2. Simple Form Validation Logic ---

// Get all the form elements
const form = document.getElementById('check-form');
const input = document.getElementById('input-data');
const errorMsg = document.getElementById('error-msg');
const finalResult = document.getElementById('final-result');

// Listen for when the form is submitted
form.addEventListener('submit', function(event) {
    // Stop the page from reloading! Very important.
    event.preventDefault(); 
    
    // Reset messages
    errorMsg.textContent = '';
    finalResult.textContent = '';
    finalResult.className = 'message'; // clear previous styles
    
    // Get the user's input, removing extra spaces
    const userInput = input.value.trim();
    
    // Simple Validation: Check if the input is empty or too short
    if (userInput.length < 3) {
        // Validation Fails
        errorMsg.textContent = 'Name must be at least 3 letters long.';
        errorMsg.classList.add('error');
        finalResult.textContent = 'Form check failed.';
        finalResult.classList.add('error');
    } else {
        // Validation Passes
        finalResult.textContent = `Success! Hello, ${userInput}.`;
        finalResult.classList.add('success');
        
        // Clear the form after success
        form.reset(); 
    }
});