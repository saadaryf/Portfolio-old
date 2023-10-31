// hide loading after opening site
window.onload = function() {
    document.querySelector('.loading-container').style.display = 'none';
}


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
    const cvBtn = document.getElementById('cv-button');
    const themeLink = document.getElementById('theme-stylesheet');
    // Check for the initial state (e.g., based on user preferences or a cookie)
    let isDarkModeEnabled = localStorage.getItem("darkModeEnabled") === "true";

    // Function to toggle dark mode
    function toggleDarkMode() {
        if (isDarkModeEnabled) {
            themeLink.href = "css/style.css";
            darkModeButton.querySelector("img").src = "img/night-mode.png";
            cvBtn.querySelector("img").src = "img/cv-dark.PNG";
        } else {
            themeLink.href = "css/dark_style.css";
            darkModeButton.querySelector("img").src = "img/day-mode.png";
            cvBtn.querySelector("img").src = "img/cv-light.PNG";
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
window.onscroll = function () { scrollFunction() };

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
document.getElementById('first-button').addEventListener('click', function () {
    document.querySelector('.content').innerHTML = `
    <h5>Skills and Technologies</h5>
    <ul>
        <br>
        <li>Html, CSS</li>
        <li>Javascript</li><br>
    </ul>
    <h5>Key Features</h5>
    <ul>
        <br>
        <li>User Friendly</li>
        <li>Responsiveness</li><br>
    </ul>
`;

});

document.getElementById('second-button').addEventListener('click', function () {
    document.querySelector('.content').innerHTML = `
    <h5>Programming Languages</h5>
    <ul>
        <br>
        <li>Java (Spring Boot)</li>
        <li>MySQL</li><br>
    </ul>
    <h5>Key Features</h5>
    <ul>
        <br>
        <li>API Development</li>
        <li>JPA Hibernate</li>
        <li>Spring Security</li><br>
    </ul>
`;

});

document.getElementById('third-button').addEventListener('click', function () {
    document.querySelector('.content').innerHTML = `
    <h5>Skills and Technologies</h5>
    <ul>
        <br>
        <li>Html, CSS</li>
        <li>Javascript</li>
        <li>Java (Spring Boot)</li>
        <li>MySQL</li><br>
    </ul>
    <h5>Key Features</h5>
    <ul>
        <br>
        <li>End-to-End Development</li>
        <li>Database Integration</li>
        <li>Testing and Debugging</li><br>
    </ul>
`;

});


// toogle hamburger lines to make a cross
const hamburger = document.querySelector('.hamburger');
const header = document.querySelector('header ul');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');

    // showing and hiding menu/header ul
    if ((hamburger.classList.contains('open'))) {
        header.style.opacity = 1;
        header.style.pointerEvents = 'auto';
    }else{
        header.style.opacity = 0;
        header.style.pointerEvents = 'none';
    }
});

