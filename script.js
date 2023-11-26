// Create scroll to top button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// When the user scrolls down, show the button
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    const pxValue = (150 * window.innerHeight) / 100;

    if (document.body.scrollTop > pxValue || document.documentElement.scrollTop > pxValue) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}

document.addEventListener("DOMContentLoaded", function () {
    scrollToTop();
});


document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.getElementById('why-carousel');
    const iconElements = carousel.querySelectorAll('.icon-element');

    carousel.addEventListener("slide.bs.carousel", (event) => {
        const activeSlide = event.relatedTarget;
        const activeIconElement = activeSlide.querySelector('.big-icon');

        iconElements.forEach((icon) => {
            icon.classList.remove("show");
        });

        activeIconElement.classList.add("show");
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("myAudio");
    const playStop = document.getElementById("playStop");
    const volumeUp = document.getElementById("volumeUp");
    const volumeDown = document.getElementById("volumeDown");

    if (audio !== null) audio.volume = 0.3;

    playStop.addEventListener("click", function (event) {
        event.preventDefault();
        if (audio.paused) {
            audio.play();
            playStop.classList.remove("bi-play");
            playStop.classList.add("bi-pause");
        } else {
            audio.pause();
            playStop.classList.add("bi-play");
            playStop.classList.remove("bi-pause");
        }
    });

    volumeUp.addEventListener("click", function () {
        if (audio.volume < 1) {
            audio.volume += 0.05;
        }
    });

    volumeDown.addEventListener("click", function () {
        if (audio.volume > 0.05) {
            audio.volume -= 0.05;
        }
    });
});


function toggleText(buttonID, textID) {
    const button = document.getElementById(buttonID);
    const text = document.getElementById(textID);

    if (text.classList.contains("d-none")) {
        button.innerText = "Read less";
        text.classList.remove("d-none");
    } else {
        button.innerText = "Read more";
        text.classList.add("d-none");
    }
}


$(document).ready(function() {
    $('.card-img-top').hover(function() {
        $(this).css({
            'transition': '.6s linear',
            'transform': 'scale(1.3)'
        });
    }, function() {
        $(this).css('transform', 'scale(1)');
    });
});


$(document).ready(function() {
    $('.btn-animated').hover(
        function(){
            $(this).addClass('animate__animated animate__bounce');
            $('<span class="_temp"> <i class="bi bi-play-fill"></i></span>').appendTo(this);
        },
        function(){
            $(this).removeClass('animate__animated animate__bounce');
            $('._temp').remove();
        }
    );
});


function playVideo(videoId) {
    var player = new YT.Player(videoId, {
        events: {
            'onReady': function(event) {
                event.target.playVideo();
            }
        }
    });
}


function submitForm(event) {
    event.preventDefault();
    const closeButton = document.querySelector("#contactModal .btn-close");
    closeButton.click();
    window.alert("Your form submitted successfully!");
}
