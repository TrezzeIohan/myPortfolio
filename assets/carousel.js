// Defining all variables referencing to DOM Elements 

const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);

const nextButton = document.querySelector('.carousel__button--right')
const prevButton = document.querySelector('.carousel__button--left')

const dotsNav = document.querySelector('.carousel__nav');
const dots = Array.from(dotsNav.children);


// Get the width of the first slide image
const slideWidth = slides[0].getBoundingClientRect().width;


// Create a function to arrange the slides next to one another and call it
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
}
slides.forEach(setSlidePosition);


// Creates a function that can be called for both previous slide and next slide
const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}
// Update the style of the dots when one is clicked
const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
}

// Hide or show arrows according to it's if there are other slides to go on or go back
const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
    if(targetIndex === 0){
        prevButton.classList.add('is-hidden');
        nextButton.classList.remove('is-hidden');
    }
    else if (targetIndex === slides.length - 1){
    prevButton.classList.remove('is-hidden');
    nextButton.classList.add('is-hidden');
    }
    else{
        prevButton.classList.remove('is-hidden');
        nextButton.classList.remove('is-hidden');
    }
}

// Move the slide when clicking the left arrow
prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const nextDot = currentDot.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide);

    moveToSlide(track, currentSlide, prevSlide);
    updateDots(currentDot, nextDot);

    hideShowArrows(slides, prevButton, nextButton, prevIndex);
});

// Move the slide when clicking the right arrow
nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide);

    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);

    hideShowArrows(slides, prevButton, nextButton, nextIndex);
});


// Updates the dot slide tracker
dotsNav.addEventListener('click', e => {
    // Track wich dot was clicked
    const targetDot = e.target.closest('button');

    // If the click on the dotsNav isn't in a button, do nothing 
    if(!targetDot) return;
    
    // Tracks the current slide and dot
    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-slide');

    // Return te index of the clicked dot
    const targetIndex = dots.findIndex(dot => dot === targetDot)
    
    // This makes the connection between the clicked dot and it's respective slide
    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);

    
    hideShowArrows(slides, prevButton, nextButton, targetIndex);
})
