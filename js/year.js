
const years = [];
var yearsDiv = document.querySelector('.years');

function displayYears() {

    const yearElement = document.querySelectorAll('.year-number');

    yearElement.forEach(function (yearElement) {
        const parentElement = yearElement.closest('.hide');

        if (!parentElement) {
            const yearText = yearElement.textContent;
            const yearNumber = parseInt(yearText, 10);
            years.push(yearNumber);
        }

    })

    if (years.length > 0) {
        let lowerValue = years[0];
        let higherValue = years[0];

        for (let i = 1; i < years.length; i++) {
            if (years[i] < lowerValue) {
                lowerValue = years[i];
            }
            if (years[i] > higherValue) {
                higherValue = years[i];
            }
        }

        var contentToInsert = '';

        if (lowerValue == higherValue) {
            contentToInsert = lowerValue;
        } else {
            contentToInsert = lowerValue + " - " + higherValue;
        }

        var textNode = document.createTextNode(contentToInsert);
        yearsDiv.appendChild(textNode);
    }
}

function resetYears() {
    years.length = 0;
    yearsDiv.innerHTML = '';
    displayYears();
}



