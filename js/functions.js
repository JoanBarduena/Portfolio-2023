document.addEventListener("DOMContentLoaded", function () {
  dataTheme();

  // ----- HOVER EFFECT ON H4 PROJECT-TITLE
  var containers = document.querySelectorAll(".container");

  containers.forEach(function (container) {
    var portfolioImg = container.querySelector(".portfolio-img");
    var titleToAffect = container.querySelector(".hover-effect h4");

    if (titleToAffect && window.innerWidth > 768) {
      titleToAffect.style.transition = "transform 0.3s ease-in-out";

      portfolioImg.addEventListener("mouseenter", function () {
        titleToAffect.style.transform = "scale(1.05)";
      });

      portfolioImg.addEventListener("mouseleave", function () {
        titleToAffect.style.transform = "scale(1)";
      });
    }
  });

  // ----- ANIMATION ON NAVIGATION BAR
  var marker = document.querySelector("#portfolio-marker");
  var item = document.querySelectorAll(".filter-trigger");

  navAnimation(marker, item);

  function navAnimation(marker, item) {
    if (item.length > 0) {
      indicator(item[0]);
    }

    function indicator(e) {
      marker.style.left = e.offsetLeft + "px";
      marker.style.width = e.offsetWidth + "px";
    }

    item.forEach((link) => {
      link.addEventListener("click", (e) => {
        indicator(e.target);
      });
    });
  }

  // ----- HAMBURGUER MENU -----
  var hamburgerMenu = document.querySelector(".hamburger-menu");
  var mainNav = document.querySelector(".main-nav");

  hamburgerMenu.addEventListener("click", function () {
    mainNav.classList.toggle("active");
  });
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

var sun = "img/sun.svg";
var moon = "img/moon.svg";

function switchTheme() {
  theme = theme === "Dark" ? "Light" : "Dark";
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);

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
    container.style.setProperty("--box-shadow", "rgba(33, 33, 33, 0.5)");
    themeIcon.src = sun;
  }

  if (iconBoxes || educationBoxes) {
    loopBoxes(iconBoxes, lightColorBoxes);
    loopBoxes(educationBoxes, lightColorBoxes);
  }
}

function setDark() {
  if (container) {
    container.style.setProperty("--box-shadow", "rgba(250, 250, 250, 0.3)");
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

const storedTheme = localStorage.getItem("theme");
if (storedTheme && (storedTheme === "Dark" || storedTheme === "Light")) {
  theme = storedTheme;
  console.log("storedTheme: ", theme);
}

//----- ADD ANCHOR ELEMENTS CLASS="HOVERABLE"
var links = document.querySelectorAll("a");
var projectImages = document.querySelectorAll(".project-carrousel img");

links.forEach(function (link) {
  link.classList.add("hoverable");
});

projectImages.forEach(function (image) {
  image.classList.add("hoverable");
});

// ----- PROJECT GO-BACK BUTTON ANCHOR LINK -----
function goBack() {
  if (history.length > 1) {
    history.back();
  } else {
    window.location.href = "/index.html#portfolio"; //go back to Projects title if not history
  }
}
window.addEventListener("popstate", function (event) {
  var currentURL = window.location.pathname;
});

// ----- MODAL FOR PROJECTS IMAGES -----
const modal = document.getElementById("modal");
var images = document.querySelectorAll("img.project-img");
var modalImage = document.getElementById("modal-img");

for (let i = 0; i < images.length; i++) {
  images[i].onclick = function () {
    modal.style.display = "flex";
    modalImage.src = this.src;
  };
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
