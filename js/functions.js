document.addEventListener('DOMContentLoaded', function () {

    dataTheme();

    // ----- HOVER EFFECT ON H4 PROJECT-TITLE
    var containers = document.querySelectorAll('.container');

    containers.forEach(function (container) {
        var portfolioImg = container.querySelector('.portfolio-img');
        var titleToAffect = container.querySelector('.hover-effect h4');

        // Add transition to the title within the container
        if (titleToAffect) {
            titleToAffect.style.transition = 'font-size 0.3s ease-in-out';

            portfolioImg.addEventListener('mouseover', function () {
                titleToAffect.style.fontSize = '3.2em'; // Change this to your desired font size
            });

            portfolioImg.addEventListener('mouseout', function () {
                titleToAffect.style.fontSize = '3em'; // Reset the font size on mouseout if needed
            });
        }
    });

    // ----- ANIMATION ON NAVIGATION BAR 
    var marker = document.querySelector('#portfolio-marker');
    var item = document.querySelectorAll('.filter-trigger');

    var marker2 = document.querySelector('#main-marker');
    var item2 = document.querySelectorAll('.main-nav .active-link');

    navAnimation(marker, item);
    navAnimation(marker2, item2);


    function navAnimation(marker, item) {
        if (item.length > 0) {
            indicator(item[0]);
        }

        function indicator(e) {
            marker.style.left = e.offsetLeft + "px";
            marker.style.width = e.offsetWidth + "px";
        }

        item.forEach(link => {
            link.addEventListener('click', (e) => {
                indicator(e.target);
            })
        })
    }
});

// ----- THEME MODE (DARK/LIGHT) -----
var theme = "Dark";

const root = document.querySelector(":root");
const container = document.getElementById("theme-container");
const themeIcon = document.getElementById("theme-icon");

const iconBoxes = document.querySelectorAll(".icon-box");
const educationBoxes = document.querySelectorAll(".education-box");

const lightColorBoxes = "rgba(85, 85, 85, 1)";
const darkColorBoxes = "rgba(216, 216, 216, 1)";

var sun = "../img/sun.svg";
var moon = "../img/moon.svg";

const projectID = document.getElementById("projectID");

if (projectID) {
    sun = "../" + sun;
    moon = "../" + moon;
}

function switchTheme() {
    theme = (theme === "Dark") ? "Light" : "Dark";
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    dataTheme();
}

function dataTheme() {
    document.body.setAttribute("data-theme", theme);
    setTheme();
}

function setTheme() {
    switch (theme) {
        case "Light":
            setLight();
            break;
        case "Dark":
            setDark();
            break;
    }
}

function setLight() {
    if (container) {
        container.style.setProperty('--box-shadow', 'rgba(33, 33, 33, 0.5)');
        themeIcon.src = sun;
    }

    if (iconBoxes || educationBoxes) {
        loopBoxes(iconBoxes, lightColorBoxes);
        loopBoxes(educationBoxes, lightColorBoxes);
    }
}

function setDark() {
    if (container) {
        container.style.setProperty('--box-shadow', 'rgba(250, 250, 250, 0.3)');
        themeIcon.src = moon;
    }
    if (iconBoxes) {
        loopBoxes(iconBoxes, darkColorBoxes);
        loopBoxes(educationBoxes, darkColorBoxes);
    }
}

function loopBoxes(boxes, color) {
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = color;
    }
}

const storedTheme = localStorage.getItem('theme');
if (storedTheme && (storedTheme === "Dark" || storedTheme === "Light")) {
    theme = storedTheme;
    console.log("storedTheme: ", theme);
}

// ----- SET IFRAME HEIGHT AS PROJECT-IMAGES
// function setIframeHeight() {
//     var imgHeight = document.querySelector('.project-img').clientHeight;
//     document.getElementById('video-iframe').style.height = imgHeight + 'px';
// }

// setIframeHeight();
// window.addEventListener('resize', setIframeHeight);

