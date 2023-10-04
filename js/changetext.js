document.addEventListener('DOMContentLoaded', function () {
    var typingElement = document.querySelector('.dynamic-text li span');
    const wordElement = document.getElementById('wordElement');
    const words = ['websites', 'videogames', '3D assets'];
    let currentTextIndex = 0;

    function startTypingAnimation() {
        changeWord();
        typingElement.classList.add('typing');
    }

    function handleAnimationEnd() {
        if (typingElement.classList.contains('typing')) {
            setTimeout(function () {
                typingElement.classList.remove('typing');
                typingElement.classList.add('untyping');
            }, 1000);
        } else {
            setTimeout(function () {
                typingElement.classList.remove('untyping');
                currentTextIndex = (currentTextIndex + 1) % words.length;
                startTypingAnimation();
            }, 1000);
        }
    }

    startTypingAnimation();

    // Fix the loop variable name
    typingElement.addEventListener('animationend', handleAnimationEnd);

    function changeWord() {
        if (currentTextIndex == 0) {
            wordElement.textContent = words[0];
        } else if (currentTextIndex == 1) {
            wordElement.textContent = words[1];
        } else if (currentTextIndex == 2) {
            wordElement.textContent = words[2];
        }
    }
});