// script.js
const slides = document.querySelector('.slides');
const slideImages = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const totalSlides = slideImages.length;
let index = 0;

function showSlide(n) {
    if (n >= totalSlides) {
        index = 0;
    } else if (n < 0) {
        index = totalSlides - 1;
    } else {
        index = n;
    }
    slides.style.transform = `translateX(-${index * 100}%)`;

    // Update dots
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

document.querySelector('.prev').addEventListener('click', () => {
    showSlide(index - 1);
});

document.querySelector('.next').addEventListener('click', () => {
    showSlide(index + 1);
});

// Add event listeners to dots
dots.forEach(dot => {
    dot.addEventListener('click', () => {
        const dotIndex = parseInt(dot.getAttribute('data-index'));
        showSlide(dotIndex);
    });
});

// Auto-slide every 3 seconds
setInterval(() => {
    showSlide(index + 1);
}, 3000);

// Initialize dots
showSlide(index);