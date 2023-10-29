// more buttom scrolloing down
const moreBtn = document.querySelector(".more-btn");
moreBtn.addEventListener("click", () => {
    window.scrollBy({
        top: window.innerHeight,
        behavior: "smooth",
    });
});

// contact buttom scrolling to the bottom
const contactBtn = document.querySelector(".contact-btn")
contactBtn.addEventListener("click", () => {
    const scrollHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
    );
    window.scrollBy({
        top: scrollHeight - window.scrollY,
        behavior: "smooth",
    });
});

//switching dark mode
document.addEventListener("DOMContentLoaded", function () {
    const darkModeButton = document.getElementById("dark-mode-button");
    const themeStyle = document.getElementById("theme-style");
    const darkThemeStyle = document.getElementById("dark-theme-style");

    // Check for the initial state (e.g., based on user preferences or a cookie)
    let isDarkModeEnabled = localStorage.getItem("darkModeEnabled") === "true";

    // Function to toggle dark mode
    function toggleDarkMode() {
        if (isDarkModeEnabled) {
            themeStyle.removeAttribute("disabled");
            darkThemeStyle.setAttribute("disabled", "disabled");
        } else {
            themeStyle.setAttribute("disabled", "disabled");
            darkThemeStyle.removeAttribute("disabled");
        }
        isDarkModeEnabled = !isDarkModeEnabled;

        // Save the user's preference in local storage
        localStorage.setItem("darkModeEnabled", isDarkModeEnabled);
    }

    // Toggle dark mode when the button is clicked
    darkModeButton.addEventListener("click", toggleDarkMode);

    // Initialize dark mode based on the saved preference
    if (isDarkModeEnabled) {
        toggleDarkMode();
    }
});
