document.addEventListener('DOMContentLoaded', function () {

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
var theme = "isDark";

const root = document.querySelector(":root");
const container = document.getElementById("theme-container");
const themeIcon = document.getElementById("theme-icon");

const sun = "../img/sun.svg";
const moon = "../img/moon.svg";

function switchTheme() {
    theme = (theme === "isDark") ? "isLight" : "isDark";
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    setTheme();
}

function setTheme() {
    switch (theme) {
        case "isDark":
            setLight();
            console.log("setting to light");
            break;
        case "isLight":
            setDark();
            console.log("setting to dark");
            break;
    }
}

function setLight() {
    root.style.setProperty('--color-light', '#212121');
    root.style.setProperty('--color-dark', '#FAFAFA');
    container.style.setProperty('--box-shadow', 'rgba(33, 33, 33, 0.5)');

    themeIcon.src = sun;
}

function setDark() {
    root.style.setProperty('--color-light', '#FAFAFA');
    root.style.setProperty('--color-dark', '#212121');
    container.style.setProperty('--box-shadow', 'rgba(250, 250, 250, 0.3)');

    themeIcon.src = moon;
}

const storedTheme = localStorage.getItem('theme');
if (storedTheme && (storedTheme === "isDark" || storedTheme === "isLight")) {
    console.log("stored theme:", storedTheme);
    theme = storedTheme;
    //switchTheme();
}

