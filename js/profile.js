

const aboutBtn = document.getElementById('about-btn');
const skillsBtn = document.getElementById('skills-btn');
const qualificationsBtn = document.getElementById('qualifications-btn');
const languagesBtn = document.getElementById('languages-btn');
const contactMenuBtn = document.getElementById('contact-menu-btn');

const firstOption = document.getElementById('first-option');
const secondOption = document.getElementById('second-option');
const thirdOption = document.getElementById('third-option');

const firstOptionContent = document.getElementById('first-option-content');
const secondOptionContent = document.getElementById('second-option-content');
const thirdOptionContent = document.getElementById('third-option-content');

const actualContent = document.querySelector('.actual-content');

aboutBtn.addEventListener('click', function () {
    firstOptionContent.classList.remove('show');
    firstOptionContent.classList.add('hide');
    secondOptionContent.classList.remove('show');
    secondOptionContent.classList.add('hide');
    thirdOptionContent.classList.remove('show');
    thirdOptionContent.classList.add('hide');

    firstOption.innerHTML = '<div class="menu-img"><img src="img/user.png" alt=""></div><p>Name</p>';
    secondOption.innerHTML = '<div class="menu-img"><img src="img/age.png" alt=""></div><p>Age</p>';
    thirdOption.innerHTML = '<div class="menu-img"><img src="img/location-pin.png" alt=""></div><p>Location</p>';

    firstOption.classList.remove(...firstOption.classList)
    firstOption.classList.add('about-class');

    actualContent.innerHTML = `
    <p><span>Full Name</span><br>Muhammad Saad Arif Dhillon</p>
    <p><span>Father Name</span><br>Muhammad Arif</p>
`;
})
skillsBtn.addEventListener('click', function () {
    firstOption.innerHTML = '<div class="menu-img"><img src="img/code.png" alt=""></div><p>Technical</p>';
    secondOption.innerHTML = '<div class="menu-img"><img src="img/high-five.png" alt=""></div><p>Social</p>';
    thirdOption.innerHTML = '<div class="menu-img"><img src="img/deep-learning.png" alt=""></div><p>Other</p>';

    firstOption.classList.remove(...firstOption.classList)
    firstOption.classList.add('skills-class');

    firstOptionContent.classList.remove('hide');
    firstOptionContent.classList.add('show');
    secondOptionContent.classList.remove('hide');
    secondOptionContent.classList.add('show');
    thirdOptionContent.classList.remove('hide');
    thirdOptionContent.classList.add('show');


    firstOptionContent.innerText = "Languages"
    secondOptionContent.innerText = "Databases"
    thirdOptionContent.innerText = "Frameworks"

    actualContent.innerHTML = `
    <p><span>Front-End</span><br>Html, CSS, JavaScript</p>
    <p><span>Back-End</span><br>C++, Java, MySQL</p>
`;
})
qualificationsBtn.addEventListener('click', function () {
    firstOption.innerHTML = '<div class="menu-img"><img src="img/suitcase.png" alt=""></div><p>Experience</p>';
    secondOption.innerHTML = '<div class="menu-img"><img src="img/graduation.png" alt=""></div><p>Education</p>';
    thirdOption.innerHTML = '<div class="menu-img"><img src="img/certificate.png" alt=""></div><p>Acheivements</p>';

    firstOption.classList.remove(...firstOption.classList)
    firstOption.classList.add('qualifications-class');

    firstOptionContent.classList.remove('show');
    firstOptionContent.classList.add('hide');
    secondOptionContent.classList.remove('show');
    secondOptionContent.classList.add('hide');
    thirdOptionContent.classList.remove('show');
    thirdOptionContent.classList.add('hide');

    actualContent.innerHTML = `
    <p><span>Punjab Information Technology Board(PITB)</span><br>Intern<br>Spring Boot Java<br>August 2023 - September 2023</p>
    `;

})
languagesBtn.addEventListener('click', function () {
    firstOption.innerHTML = '<div class="menu-img"><img src="img/eng.png" alt=""></div><p>English</p>';
    secondOption.innerHTML = '<div class="menu-img"><img src="img/translate.png" alt=""></div><p>Urdu</p>';
    thirdOption.innerHTML = '<div class="menu-img"><img src="img/translate.png" alt=""></div><p>Punjabi</p>';

    firstOption.classList.remove(...firstOption.classList)
    firstOption.classList.add('languages-class');

    firstOptionContent.classList.remove('show');
    firstOptionContent.classList.add('hide');
    secondOptionContent.classList.remove('show');
    secondOptionContent.classList.add('hide');
    thirdOptionContent.classList.remove('show');
    thirdOptionContent.classList.add('hide');

    actualContent.innerHTML = `
            <p><span>Speaking</span><br>Good</p>
            <p><span>Writing</span><br>Excellent</p>
        `;
})
contactMenuBtn.addEventListener('click', function () {
    firstOption.innerHTML = '<div class="menu-img"><img src="img/telephone.png" alt=""></div><p>Phone</p>';
    secondOption.innerHTML = '<div class="menu-img"><img src="img/email.png" alt=""></div><p>Email</p>';
    thirdOption.innerHTML = '<div class="menu-img"><img src="img/social.png" alt=""></div><p>Other</p>';

    firstOptionContent.classList.remove('show');
    firstOptionContent.classList.add('hide');
    secondOptionContent.classList.remove('show');
    secondOptionContent.classList.add('hide');
    thirdOptionContent.classList.remove('show');
    thirdOptionContent.classList.add('hide');

    firstOption.classList.remove(...firstOption.classList)
    firstOption.classList.add('contact-class');


    actualContent.innerHTML = `
            <p><span>Phone</span><br>+92 324 2037312</p>
            <p><span>WhatsApp</span><br>+92 324 2037312</p>
        `;
})

firstOption.addEventListener('click', function () {
    if (firstOption.classList.contains('about-class')) {
        actualContent.innerHTML = `
            <p><span>Full Name</span><br>Muhammad Saad Arif Dhillon</p>
            <p><span>Father Name</span><br>Muhammad Arif</p>
        `;
    } else if (firstOption.classList.contains('skills-class')) {
        firstOptionContent.classList.remove('hide');
        firstOptionContent.classList.add('show');
        secondOptionContent.classList.remove('hide');
        secondOptionContent.classList.add('show');
        thirdOptionContent.classList.remove('hide');
        thirdOptionContent.classList.add('show');

        actualContent.innerHTML = `
        <p><span>Front-End</span><br>Html, CSS, JavaScript</p>
        <p><span>Back-End</span><br>C++, Java, MySQL</p>
        `;

        firstOptionContent.innerText = "Languages"
        secondOptionContent.innerText = "Databases"
        thirdOptionContent.innerText = "Frameworks"

        firstOptionContent.addEventListener('click', function () {
            actualContent.innerHTML = `
            <p><span>Front-End</span><br>Html, CSS, JavaScript</p>
            <p><span>Back-End</span><br>C++, Java, MySQL</p>
        `;
        })
        secondOptionContent.addEventListener('click', function () {
            actualContent.innerHTML = `
            <p><span>Relational</span><br>MySQL</p>
        `;
        })
        thirdOptionContent.addEventListener('click', function () {
            actualContent.innerHTML = `
            <p><span>Frameworks</span><br>Spring Boot Java</p>
        `;
        })
    } else if (firstOption.classList.contains('qualifications-class')) {
        firstOptionContent.classList.remove('show');
        firstOptionContent.classList.add('hide');
        secondOptionContent.classList.remove('show');
        secondOptionContent.classList.add('hide');
        thirdOptionContent.classList.remove('show');
        thirdOptionContent.classList.add('hide');

        actualContent.innerHTML = `
        <p><span>Punjab Information Technology Board(PITB)</span><br>Intern<br>Spring Boot Java<br>August 2023 - September 2023</p>
        `;
    } else if (firstOption.classList.contains('languages-class')) {
        actualContent.innerHTML = `
            <p><span>Speaking</span><br>Good</p>
            <p><span>Writing</span><br>Excellent</p>
        `;
    } else if (firstOption.classList.contains('contact-class')) {
        actualContent.innerHTML = `
            <p><span>Phone</span><br>+92 324 2037312</p>
            <p><span>WhatsApp</span><br>+92 324 2037312</p>
        `;
    }
})
secondOption.addEventListener('click', function () {
    if (firstOption.classList.contains('about-class')) {
        actualContent.innerHTML = `
            <p><span>Birth Date</span><br>31-12-2002</p>
            <p><span>Age</span><br>20 years</p>
        `;
    } else if (firstOption.classList.contains('skills-class')) {
        firstOptionContent.classList.remove('show');
        firstOptionContent.classList.add('hide');
        secondOptionContent.classList.remove('show');
        secondOptionContent.classList.add('hide');
        thirdOptionContent.classList.remove('show');
        thirdOptionContent.classList.add('hide');

        actualContent.innerHTML = `
            <p>Active Listening</p>
            <p>Remote Communication</p>
            <p>Appreciating Feedbacks</p>
            <p>Continuous Learning</p>
        `;
    } else if (firstOption.classList.contains('qualifications-class')) {
        firstOptionContent.classList.remove('hide');
        firstOptionContent.classList.add('show');
        secondOptionContent.classList.remove('hide');
        secondOptionContent.classList.add('shosw');
        thirdOptionContent.classList.remove('hide');
        thirdOptionContent.classList.add('show');

        actualContent.innerHTML = `
        <p><span>University of Central Punjab(UCP)-Lahore</span><br>Student<br>BS Software Engineering<br>Octuber 2020 - Octuber 2024</p>
        `;

        firstOptionContent.innerText = "University"
        secondOptionContent.innerText = "College"
        thirdOptionContent.innerText = "School"

        firstOptionContent.addEventListener('click', function () {
            actualContent.innerHTML = `
            <p><span>University of Central Punjab(UCP)-Lahore</span><br>Student<br>BS Software Engineering<br>Octuber 2020 - Octuber 2024</p>
        `;
        })
        secondOptionContent.addEventListener('click', function () {
            actualContent.innerHTML = `
            <p><span>Punjab College of Sciences-Gujranwala</span><br>Student<br>F.Sc pre-Engineering<br>Aprinl 2018 - April 2019</p>
            `;
        })
        thirdOptionContent.addEventListener('click', function () {
            actualContent.innerHTML = `
            <p><span>Jadeed Dastgir Ideal High School-GRW (PCC)</span><br>Student<br>Matriculation<br>March 2016 - March 2018</p>
        `;
        })
    } else if (firstOption.classList.contains('languages-class')) {
        actualContent.innerHTML = `
            <p><span>Proficiency</span><br>Native</p>
        `;
    } else if (firstOption.classList.contains('contact-class')) {
        actualContent.innerHTML = `
            <p><span>Email</span><br>saadaryf@gmail.com</p>
        `;
    }
})
thirdOption.addEventListener('click', function () {
    if (firstOption.classList.contains('about-class')) {
        actualContent.innerHTML = `
            <p><span>City</span><br>Lahore, Pakistan</p>
            <p><span>Area</span><br>Architect Engineers Housing Society</p>
        `;
    } else if (firstOption.classList.contains('skills-class')) {
        firstOptionContent.classList.remove('hide');
        firstOptionContent.classList.add('show');
        secondOptionContent.classList.remove('hide');
        secondOptionContent.classList.add('show');
        thirdOptionContent.classList.remove('hide');
        thirdOptionContent.classList.add('show');

        actualContent.innerHTML = `
            <p>Visual Studio, VS Code</p>
            <p>IntelliJ IDEA</p>
            <p>MySQL workbench, PostMan</p>
            <p>Xaamp, Sublime</p>
        `;

        firstOptionContent.innerText = "Softwares"
        secondOptionContent.innerText = "Learning"
        thirdOptionContent.innerText = "Familarity"

        firstOptionContent.addEventListener('click', function () {
            actualContent.innerHTML = `
            <p>Visual Studio, VS Code</p>
            <p>IntelliJ IDEA</p>
            <p>MySQL workbench, PostMan</p>
            <p>Xaamp, Sublime</p>
        `;
        })
        secondOptionContent.addEventListener('click', function () {
            actualContent.innerHTML = `
            <p>Machine Learning, Python</p>
            <p>Cloud Computing, AWS Cloud</p>
            <p>Laravel, PHP</p>
            <p>Docker</p>
        `;
        })
        thirdOptionContent.addEventListener('click', function () {
            actualContent.innerHTML = `
            <p>Flutter</p>
            <p>.dart</p>
        `;
        })
    } else if (firstOption.classList.contains('qualifications-class')) {
        firstOptionContent.classList.remove('show');
        firstOptionContent.classList.add('hide');
        secondOptionContent.classList.remove('show');
        secondOptionContent.classList.add('hide');
        thirdOptionContent.classList.remove('show');
        thirdOptionContent.classList.add('hide');

        actualContent.innerHTML = `
        <p><span>Projects Completed</span><br>11</p>
        <p><span>Certifications</span><br>01</p>
        `;
    } else if (firstOption.classList.contains('languages-class')) {
        actualContent.innerHTML = `
            <p><span>Proficiency</span><br>Native</p>
        `;
    } else if (firstOption.classList.contains('contact-class')) {
        actualContent.innerHTML = `
            <p><span>LinkedIn: </span><a href="https://www.linkedin.com/in/saadaryf">saadaryf</a></p>
            <p><span>GitHub: </span><a href="https://github.com/saadaryf">saadaryf</a></p>
            <p><span>Insta: </span><a href="https://www.instagram.com/saadaryf">saadaryf</a></p>
        `;
    }
})

// for mobile responsive only

const menuBtn = document.querySelector('.phone-menu-button button');
const leftDiv = document.querySelector('.left-menu');
const menuList = document.querySelector('.left-menu ul');

let isClosed = true;

menuBtn.addEventListener('click', function () {
    if (isClosed) {
        leftDiv.style.width = '200px';
        menuList.style.width = '200px';
        menuList.style.display = 'flex';
        menuBtn.innerText='«'; 
        isClosed = false;
    } else {
        leftDiv.style.width = '0';
        menuList.style.width = '0';
        menuList.style.display = 'none';
        menuBtn.innerText='»'; 
        isClosed = true;
    }
});
