document.addEventListener('DOMContentLoaded', function () {
    var typingElement = document.querySelector('.dynamic-text li span');
    const wordElement = document.getElementById('wordElement');
    const words = ['websites', 'videogames', '3D assets'];
    let currentTextIndex = 0;

    function startTypingAnimation() {
        wordElement.textContent = words[currentTextIndex];
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

    typingElement.addEventListener('animationend', handleAnimationEnd);
});