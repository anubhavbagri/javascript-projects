
var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
// console.log(navMenuAnchorTag);

for (var i = 0; i <= navMenuAnchorTags.length; i++) {
    navMenuAnchorTags[i].addEventListener('click', function (e) {
        e.preventDefault();
        var targetSectionID = this.hash;
        // console.log(targetSectionID);
        var targetSection = document.querySelector(targetSectionID);
        // console.log(targetSection);
        var scrollInterval = setInterval(function () {
            var targetSectionCoordinates = targetSection.getBoundingClientRect();
            // console.log(targetSectionCoordinates);
            if (targetSectionCoordinates.top <= 0) {
                clearInterval(scrollInterval);
                return;
            }
            window.scrollBy(0, 50);
        }, 20);
    });
}

/*
//ALTERNATIVE
var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
for (var i = 0; i <= navMenuAnchorTags.length; i++) {
    navMenuAnchorTags[i].addEventListener('click', function (e) {
        e.preventDefault();
        var targetSectionID = this.textContent.trim().toLowerCase();
        var targetSection = document.getElementById(targetSectionID);
        var scrollInterval = setInterval(function () {
            var targetPos = targetSection.getBoundingClientRect().top;
            if (targetPos <= 0) {
                clearInterval(scrollInterval);
                return;
            }
            window.scrollBy(0, 50);
        }, 30);
    });
}
*/


/*
var targetPos = 1500;
var currentPos = 0;
var scrollInternal = setInterval(function () {
    if (currentPos >= targetPos) {
        clearInterval(scrollInterval);
        return;
    }
    currentPos += 50;
    window.scrollBy(0, 50);
}, 50);
*/
