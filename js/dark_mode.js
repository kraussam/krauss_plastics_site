// Apply dark mode styles
function applyDarkModeStyles() {
    const body = document.body;
    body.style.backgroundColor = "#000000"; // Black background color
    body.style.color = "#ffffff"; // White text color
    document.getElementById("pageTitle").style.color = "#ffffff"; // White page title color
    document.getElementById("paragraph").style.color = "#ffffff"; // White paragraph text color
}

// Apply light mode styles
function applyLightModeStyles() {
    const body = document.body;
    body.style.backgroundColor = "#ffffff"; // White background color
    body.style.color = "#000000"; // Black text color
    document.getElementById("pageTitle").style.color = "#000000"; // Black page title color
    document.getElementById("paragraph").style.color = "#000000"; // Black paragraph text color
}

// Toggle dark mode
function toggleDarkMode() {
    const body = document.body;
    if (body.classList.contains("dark-mode")) {
        body.classList.remove("dark-mode");
        applyLightModeStyles();
        localStorage.setItem("darkMode", false);
    } else {
        body.classList.add("dark-mode");
        applyDarkModeStyles();
        localStorage.setItem("darkMode", true);
    }
}

// Initialize dark mode based on user preference
function initializeDarkMode() {
    const darkMode = JSON.parse(localStorage.getItem("darkMode"));
    if (darkMode) {
        document.body.classList.add("dark-mode");
        applyDarkModeStyles();
    } else {
        applyLightModeStyles();
    }
}

// Add event listener to the dark mode toggle button after DOM content is loaded
document.addEventListener("DOMContentLoaded", function() {
    // Add event listener to the dark mode toggle button
    document.getElementById("dark_mode_toggle").addEventListener("click", toggleDarkMode);

    // Initialize dark mode on page load
    initializeDarkMode();
});
s