const images = [
    "images/nike-dunk-low-sb-x-travis-scott-1717-nbukh (1).jpg",
    "images/nike-dunk-low-sb-x-travis-scott-1343-piydb.webp",
    "images/nike-dunk-low-sb-x-travis-scott-5792-ahjbg.webp"
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

