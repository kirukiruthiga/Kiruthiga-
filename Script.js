document.addEventListener("DOMContentLoaded", function () {
    const typewriterText = "Welcome to My Portfolio";
    let i = 0;

    function typeEffect() {
        if (i < typewriterText.length) {
            document.getElementById('typewriter').innerHTML += typewriterText.charAt(i);
            i++;
            setTimeout(typeEffect, 150);
        }
    }

    window.onload = function() {
        window.scrollTo(0, 0);
    };

    typeEffect();

    const buttons = document.querySelectorAll('a[href^="#"]');
    buttons.forEach(button => {
        button.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));

            window.scrollTo({
                top: target.offsetTop - document.querySelector('.header').offsetHeight,
                behavior: "smooth"
            });
        });
    });

    const diveInButton = document.querySelector('.dive-in');
    if (diveInButton) {
        diveInButton.addEventListener("click", function () {
            const aboutSection = document.querySelector("#about");
            window.scrollTo({
                top: aboutSection.offsetTop - document.querySelector('.header').offsetHeight,
                behavior: "smooth"
            });
        });
    }
});
