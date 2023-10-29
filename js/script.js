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
    const themeLink = document.getElementById('theme-stylesheet');
    // Check for the initial state (e.g., based on user preferences or a cookie)
    let isDarkModeEnabled = localStorage.getItem("darkModeEnabled") === "true";

    // Function to toggle dark mode
    function toggleDarkMode() {
        if (isDarkModeEnabled) {
            themeLink.href = "/css/style.css";
            darkModeButton.querySelector("img").src = "/img/night-mode.png";
        } else {
            themeLink.href = "/css/dark_style.css";
            darkModeButton.querySelector("img").src = "/img/day-mode.png";
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


//back to top btn
let mybutton = document.getElementById("topBtn");

// When the user scrolls down 200px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


// switching content of services box
document.getElementById('first-button').addEventListener('click', function() {
    document.querySelector('.content').innerHTML = '<p>Content about First.</p>';
});

document.getElementById('second-button').addEventListener('click', function() {
    document.querySelector('.content').innerHTML = '<p>Content about Second.</p>';
});

document.getElementById('third-button').addEventListener('click', function() {
    document.querySelector('.content').innerHTML = '<p>Content about Third.</p>';
});
