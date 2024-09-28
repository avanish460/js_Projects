// Get references to DOM elements
const check = document.getElementById("check-btn");
const userInput = document.getElementById("user-input");
const clear = document.getElementById("clear-btn");
const result = document.getElementById("result-div");

// Function to validate phone number format
const validCheck = (input) => {
  // Check for empty input and alert user
  if (input === '') {
    alert("Please provide a phone number");
    return;
  }

  // Regular expression patterns for phone number components
  const countryCode = '^(1\\s?)?';  // Optional country code (US: 1 or empty)
  const areaCode = '(\\([0-9]{3}\\)|[0-9]{3})';  // Area code (3 digits with or without parentheses)
  const spacesDashes = '[\\s\\-]?'; // Optional spaces or dashes between parts
  const phoneNumber = '[0-9]{3}[\\s\\-]?[0-9]{4}$'; // Last 7 digits with optional spaces or dashes

  // Combine patterns into a regular expression
  const phoneRegex = new RegExp(`${countryCode}${areaCode}${spacesDashes}${phoneNumber}`);

  // Create a paragraph element to display the result
  const pTag = document.createElement('p');
  pTag.className = 'results-text';

  // Set text color based on validation result
  phoneRegex.test(input) ? (pTag.style.color = "#00471b") : (pTag.style.color = "#4d3800");  // Green for valid, red for invalid

  // Create text node with validation message and phone number
  const resultText = document.createTextNode(
    `${phoneRegex.test(input) ? 'Valid' : 'Invalid'} US number: ${input}`
  );

  // Add text node to the paragraph element
  pTag.appendChild(resultText);

  // Append the paragraph element to the result container
  result.appendChild(pTag);
};

// Add event listener for click on "check" button
check.addEventListener('click', () => {
  validCheck(userInput.value);
  userInput.value = '';  // Clear input field after check
});

// Add event listener for Enter key press on "check" button
check.addEventListener("keydown", (e) => {
  if (e.key === 'Enter') {
    validCheck(userInput.value);
    userInput.value = '';  // Clear input field after check
  }
});

// Add event listener for click on "clear" button
clear.addEventListener('click', () => {
  result.textContent = '';  // Clear result container
});