const images = [
    "images/nike-p-6000.jpg",
    "images/nike-p-6000 (2).jpg",
    "images/nike-p-6000 (1).jpg"
];

let currentImageIndex = 0;

function updateSlider() {
    const sliderImage = document.getElementById("slider-image");
    sliderImage.src = images[currentImageIndex];
}

function prevSlide() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateSlider();
}

function nextSlide() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateSlider();
}

function changeImage(index) {
    currentImageIndex = index;
    updateSlider();
}

