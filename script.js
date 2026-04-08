// JavaScript functionality for the Law Firm website

// Function to display the current date and time
function displayCurrentDateTime() {
    const dateTime = new Date().toISOString().replace('T', ' ').substr(0, 19);
    console.log(`Current Date and Time (UTC): ${dateTime}`);
}

displayCurrentDateTime();

// Additional functionality can be added below.