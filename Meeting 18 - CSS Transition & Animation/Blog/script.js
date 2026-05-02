function changeText() {

    var replaceText = document.getElementsByClassName("mini-text");
    replaceText[0].innerHTML = "Scroll down";

    document.getElementById("icon-up").style.display = "none";
    document.getElementById("icon-down").style.display = "block";

}

var slides = document.querySelectorAll(".slide");
var buttons = document.querySelectorAll(".slider-btn");
let currentSlide = 1;

// Manual images slider
var manualNav = function (index) {

    slides.forEach(function (slide) {
        slide.classList.remove("active");
        buttons.forEach((btn) => {
            btn.classList.remove("active");
        });
    });

    slides[index].classList.add("active");
    buttons[index].classList.add("active");

}

buttons.forEach(function (btn, i) {
    btn.addEventListener("click", function () {
        manualNav(i);
        currentSlide = i;
    });
})

var repeat = function (activeClass) {

    let active = document.getElementsByClassName("active");
    let i = 1;

    var repeater = function () {

        setTimeout(function () {

            [...active].forEach(function (activeSlide) {
                activeSlide.classList.remove("active");
            });

            slides[i].classList.add("active");
            buttons[i].classList.add("active");
            i++;

            // if reach the last image 
            if (slides.length == i) {
                i = 0;
            }

            if (i >= slides.length) {
                return;
            }

            repeater();

        }, 5000);

    }

    repeater();

}

repeat();
