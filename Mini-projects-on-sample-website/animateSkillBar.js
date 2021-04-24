// Handle scroll event on window
// check that skills container is visible or not
// ensure that initial width of colored skill divs is Zero -> initialized/Reset to 0 width value
// Start animation on every skill -> increase skill width from 0 to skill level at regular intervals
// Store skill level (Add data attribute to the skill bars in HTML code and in js code, fetch that skill level)

var progressBars = document.querySelectorAll('.skill-progress > div');
var skillsContainer = document.getElementById('skill-container');
var animationDone = false;      //flag variable

window.addEventListener('scroll', checkScroll);

function initializeBars() {
    for (let bar of progressBars) {  //for every bar, you have to set its width to 0.
        bar.style.width = 0 + '%';
    }
}

initializeBars();

function fillBars() {

    for (let bar of progressBars) {
        let targetWidth = bar.getAttribute('data-skill');
        // console.log(targetWidth);
        let currentWidth = 0;
        let interval = setInterval(function () {
            if (currentWidth > targetWidth) {
                clearInterval(interval);
                return;
            }
            currentWidth++;
            bar.style.width = currentWidth + '%';
        }, 5);
    }
}

function checkScroll() {
    //You have to check whether skill container is visible
    var coordinates = skillsContainer.getBoundingClientRect();
    if (!animationDone && coordinates.top < window.innerHeight) {
        animationDone = true;       //for every slight scroll there's no need of animation from scratch
        // console.log('suckreen visibel');
        fillBars();
    } else if (coordinates.top > window.innerHeight) {
        animationDone = false;
        initializeBars();
    }
}



















/* ---------WRONG---------------
const skillsSection = document.getElementById('skills');

const skillBars = document.querySelectorAll(".skill-name");

var progressBars = document.querySelectorAll(".skill-progress > div");

function showProgress() {
    skillBars.forEach(function (e) {
        let value = e.dataset.skill;
        let width = 1;
        let id = setInterval(frame, 10);
        function frame() {
            if (width >= value) {
                clearInterval(id);
            } else {
                width++;
                e.style.width = width + "%";
            }
        }
    });
}

window.addEventListener('scroll', function () {
    const sectionPos = skillsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight;

    if (sectionPos < screenPos) {
        showProgress();
    } else {
        // hideProgress();
    }
});
*/