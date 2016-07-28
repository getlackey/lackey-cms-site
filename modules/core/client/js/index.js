/*jslint node: true, browser: true */
'use strict';

var headerFigure = document.querySelector('header.page > figure');
var headerXPercent = 0;
var headerYPercent = 0;

var parallaxMultiplier = 0.4;

function updateFigureScroll(scrollPos) {
    headerFigure.style.transform =
        'translateX(' + headerXPercent + '%) ' +
        'translateY(' + headerYPercent + '%) ' +
        'translateY(-' + (scrollPos * parallaxMultiplier) + 'px)';
}

function bindView() {
    var waitingForAnimation = false;

    headerXPercent = parseInt(headerFigure.getAttribute('data-x-offset'), 10);
    if (isNaN(headerXPercent)) { headerXPercent = 0; }

    headerYPercent = parseInt(headerFigure.getAttribute('data-y-offset'), 10);
    if (isNaN(headerYPercent)) { headerYPercent = 0; }

    if (!isNaN(headerFigure.getAttribute('data-size'))) {
        headerFigure.style.width = headerFigure.getAttribute('data-size') + '%';
    }

    updateFigureScroll(0);

    window.addEventListener('scroll', function () {
        var scrollPosition = window.scrollY;

        if (!waitingForAnimation) {
            window.requestAnimationFrame(function () {
                updateFigureScroll(scrollPosition);

                waitingForAnimation = false;
            });
        }
        waitingForAnimation = true;
    });
}

bindView();
