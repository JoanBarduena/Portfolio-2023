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
            console.log(marker.style.width);
        }

        item.forEach(link => {
            link.addEventListener('click', (e) => {
                indicator(e.target);
            })
        })
    }
});

// ----- THEME MODE (DARK/LIGHT) -----
var theme = "dark";
const root = document.querySelector(":root");
const container = document.getElementsByClassName("theme-container");
const themeIcon = document.getElementById("theme-icon");

const sun = "../img/sun.svg";
const moon = "../img/moon.svg";

function setTheme() {
    switch (theme) {
        case "dark":
            setLight();
            theme = "light";
            break;
        case "light":
            setDark();
            theme = "dark";
            break;
    }
}


function setLight() {
    root.style.setProperty('--color-light', '#212121');
    root.style.setProperty('--color-dark', '#FAFAFA');

    themeIcon.src = sun;
}

function setDark() {
    root.style.setProperty('--color-light', '#FAFAFA');
    root.style.setProperty('--color-dark', '#212121');

    themeIcon.src = moon;
}

