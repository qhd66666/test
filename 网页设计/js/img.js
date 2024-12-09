const banner = document.querySelector('#banner');
const imagesContainer = banner.querySelector('.carousel-images');
const images = imagesContainer.querySelectorAll('img');
const prevBtn = banner.querySelector('.prev');
const nextBtn = banner.querySelector('.next');
const indicatorsContainer = banner.querySelector('.indicators');
let currentIndex = 0;
let timer;

// Create indicators
images.forEach((_, index) => {
    const indicator = document.createElement('button');
    indicator.addEventListener('click', () => {
        goToSlide(index);
        resetTimer();
    });
    indicatorsContainer.appendChild(indicator);
});
updateIndicators();

// Event listeners for buttons
prevBtn.addEventListener('click', () => {
    goToSlide(currentIndex - 1);
    resetTimer();
});

nextBtn.addEventListener('click', () => {
    goToSlide(currentIndex + 1);
    resetTimer();
});

// Auto slide
function startTimer() {
    timer = setInterval(() => {
        goToSlide(currentIndex + 1);
    }, 3000);
}

function resetTimer() {
    clearInterval(timer);
    startTimer();
}

// Update slide position
function goToSlide(index) {
    if (index < 0) {
        currentIndex = images.length - 1;
    } else if (index >= images.length) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }
    imagesContainer.style.transform = `translateX(-${1000 * currentIndex}px)`;
    updateIndicators();
}

// Update indicators
function updateIndicators() {
    indicatorsContainer.childNodes.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentIndex);
    });
}

// Initialize
startTimer();
