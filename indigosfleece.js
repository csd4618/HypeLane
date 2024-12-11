const images = [
    "images/image00017.jpeg",
    "images/image00014.jpeg",
    "images/image00016.jpeg"
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

