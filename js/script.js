// hide loading after opening site
window.onload = function () {
    document.querySelector('.loading-container').style.display = 'none';
}


// contact buttom scrolling to the bottom
const contactBtn = document.getElementById("contact-btn")
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
    const themeLink = document.getElementById('theme-stylesheet');

    const darkModeButton = document.getElementById("dark-mode-button");
    const cvBtn = document.getElementById('cv-button');
    const linkedinBtn = document.getElementById('linkedin-button');
    const githubBtn = document.getElementById('github-button');
    const instaBtn = document.getElementById('insta-button');
    // Check for the initial state (e.g., based on user preferences or a cookie)
    let isDarkModeEnabled = localStorage.getItem("darkModeEnabled") === "true";

    // Function to toggle dark mode & changing menu icon/button with theme
    function toggleDarkMode() {
        if (isDarkModeEnabled) {
            themeLink.href = "css/style.css";

            darkModeButton.querySelector("img").src = "img/night-mode.png";
            cvBtn.querySelector("img").src = "img/cv-dark.PNG";
            linkedinBtn.querySelector("img").src = "img/linkedin-dark.png";
            githubBtn.querySelector("img").src = "img/github-dark.png";
            instaBtn.querySelector("img").src = "img/instagram-dark.png";
            contactBtn.querySelector("img").src = "img/contact-dark.png";
        } else {
            themeLink.href = "css/dark_style.css";

            darkModeButton.querySelector("img").src = "img/day-mode.png";
            cvBtn.querySelector("img").src = "img/cv-light.PNG";
            linkedinBtn.querySelector("img").src = "img/linkedin-light.png";
            githubBtn.querySelector("img").src = "img/github-light.png";
            instaBtn.querySelector("img").src = "img/instagram-light.png";
            contactBtn.querySelector("img").src = "img/contact-light.png";
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
document.getElementById('front-end-button').addEventListener('click', function () {
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

document.getElementById('back-end-button').addEventListener('click', function () {
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

document.getElementById('full-stack-button').addEventListener('click', function () {
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
    } else {
        header.style.opacity = 0;
        header.style.pointerEvents = 'none';
    }
});


// making project boxes move with cursor
const projectsArea = document.getElementById('projects');
const parallaxStrength = 10;

function applyParallaxEffect(e) {
    const xOffset = (e.clientX - projectsArea.getBoundingClientRect().left) / projectsArea.offsetWidth;
    const yOffset = (e.clientY - projectsArea.getBoundingClientRect().top) / projectsArea.offsetHeight;

    const blocks = document.querySelectorAll('.grid a');
    blocks.forEach((block) => {
        const rotation = parallaxStrength * (xOffset - 0.5);
        block.style.transform = `rotate(${rotation}deg)`;
    });
}
function resetParallaxEffect() {
    const blocks = document.querySelectorAll('.grid a');
    blocks.forEach((block) => {
        block.style.transform = 'rotate(0deg)';
    });
}
if (window.innerWidth >= 960) { 
    projectsArea.addEventListener('mouseover', applyParallaxEffect);
    projectsArea.addEventListener('mouseleave', resetParallaxEffect);
}


