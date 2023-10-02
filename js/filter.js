const triggers = document.querySelectorAll('li.filter-trigger');
const projects = document.querySelectorAll('.portfolio');
var all = document.querySelector('.reset');

function clearActive() {
    var activeLink = document.querySelector('.active');
    activeLink.classList.remove("active");
}

triggers.forEach(element => {
    element.addEventListener('click', function () {
        clearActive();
        element.classList.add('active');

        let filter = element.dataset.filter;
        //console.log(filter);

        projects.forEach(projects => {
            if (!projects.classList.contains(filter)) {
                projects.classList.add('hide');
            } else {
                projects.classList.remove('hide');
            }
        });

        if (filter === 'all') {
            projects.forEach(projects => {
                projects.classList.remove('hide');
            })
        }
    })
});