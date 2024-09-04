let currentSlidePosition = 0;
const slides = document.querySelectorAll('.carousel-slide');
const indicators = document.querySelectorAll('.indicator');
const totalSlides = slides.length;

function displaySlide(index) {
    // Update slide classes
    slides.forEach((slide, i) => {
        slide.classList.remove('active-slide');
        if (i === index) {
            slide.classList.add('active-slide');
        }
    });

    // Update indicator classes
    indicators.forEach((indicator, i) => {
        indicator.classList.remove('active-indicator');
        if (i === index) {
            indicator.classList.add('active-indicator');
        }
    });

    // Move the carousel to the correct position
    document.querySelector('.carousel-track').style.transform = `translateX(-${index * 103}%)`;
}

function advanceSlide() {
    currentSlidePosition = (currentSlidePosition + 1) % totalSlides;
    displaySlide(currentSlidePosition);
}

function goToSlide(index) {
    currentSlidePosition = index;
    displaySlide(currentSlidePosition);
}

// Automatically advance slides every 3 seconds
setInterval(advanceSlide, 3000);
