const images = [
    "images/corteiz 1.jpeg",
    "images/fixedratio_20231017173359_f885a55a.jpeg",
    "images/fixedratio_20231017173401_69047673.jpeg"
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

