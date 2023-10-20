

document.addEventListener('DOMContentLoaded', function () {
    var containers = document.querySelectorAll('.container');

    containers.forEach(function (container) {
        var portfolioImg = container.querySelector('.portfolio-img');
        var titleToAffect = container.querySelector('.hover-effect h4');

        // Add transition to the title within the container
        if (titleToAffect) {
            titleToAffect.style.transition = 'font-size 0.3s ease-in-out';

            portfolioImg.addEventListener('mouseover', function () {
                titleToAffect.style.fontSize = '3.2em'; // Change this to your desired font size
                console.log("pepe");
            });

            portfolioImg.addEventListener('mouseout', function () {
                titleToAffect.style.fontSize = '3em'; // Reset the font size on mouseout if needed
            });
        }
    });
});

var marker = document.querySelector('#marker');
var item = document.querySelectorAll('.filter-trigger');

function indicator(e) {
    marker.style.left = e.offsetLeft + "px";
    marker.style.width = e.offsetWidth + "px";
}

if (item.length > 0) {
    //initializes the active marker
    indicator(item[0]);
}

item.forEach(link => {
    link.addEventListener('click', (e) => {
        indicator(e.target);
    })
})