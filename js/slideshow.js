let currentSlideIndex = 0

const slides = document.querySelectorAll(".slides")
const prev = document.querySelector(".slideshow-nav .prev")
const next = document.querySelector(".slideshow-nav .next")

let lastSlideIndex = slides.length - 1
let firstSlideIndex = 0

function goLeft() {
    // Remove active class from the current slide
    slides[currentSlideIndex].classList.remove("active")

    // Cycle slides, if it's the first, then show the last and go on
    currentSlideIndex =
        currentSlideIndex === firstSlideIndex
            ? lastSlideIndex
            : currentSlideIndex - 1

    // Add active class for a new current slide
    slides[currentSlideIndex].classList.add("active")
}

function goRight() {
    // Remove active class from the current slide
    slides[currentSlideIndex].classList.remove("active")

    // Cycle slides, if it's the last, then show the first and go on
    currentSlideIndex =
        currentSlideIndex === lastSlideIndex
            ? firstSlideIndex
            : currentSlideIndex + 1

    // Add active class for a new current slide
    slides[currentSlideIndex].classList.add("active")
}

prev.addEventListener("click", goLeft)
next.addEventListener("click", goRight)

// Cycled animation for sliding image
setInterval(goRight, 8000)
