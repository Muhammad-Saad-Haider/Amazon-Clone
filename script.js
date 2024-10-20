const left = document.querySelector(".left");
const right = document.querySelector(".right");

let images = document.querySelector(".images");

const image = document.querySelectorAll(".image");

let slideNumber = 1;

left.addEventListener("click", () => {
    if(slideNumber > 1) {
        //prev slide
        images.style.transform = `translateX(-${(slideNumber-2)*1518}px)`;
        slideNumber--;
    } else {
        //last slide
        images.style.transform = `translateX(-${(image.length-1)*1518}px)`;
        slideNumber = image.length;
    }
});

right.addEventListener("click", () => {
    if(slideNumber < image.length) {
        images.style.transform = `translateX(-${slideNumber*1518}px)`;
        slideNumber++;
    } else {
        images.style.transform = `translate(0px)`;
        slideNumber = 1;
    }
});

const stopSlideShow = () => {
    clearInterval(slideInterval);
};


// auto slider

let slideInterval;

const startSlideShow = () => {
    slideInterval = setInterval(() => {
        if(slideNumber < image.length) {
            images.style.transform = `translateX(-${slideNumber*1518}px)`;
            slideNumber++;
        } else {
            images.style.transform = `translate(0px)`;
            slideNumber = 1;
        }
    }, 5000);
};

startSlideShow();

left.addEventListener("mouseover",  stopSlideShow);
left.addEventListener("mouseout",  startSlideShow);

right.addEventListener("mouseover",  stopSlideShow);
right.addEventListener("mouseout",  startSlideShow);


// Horizontal Slider - 1

const horizontalSlider1Left = document.querySelector(".horizontal-slider1-arrow-left");
const horizontalSlider1Right = document.querySelector(".horizontal-slider1-arrow-right");

const horizontalSlider1Images = document.querySelector(".horizontal-slider1-images");
const horizontalSlider1Image = document.querySelectorAll(".horizontal-slider1-image");

let horizontalSlider1SlideNumber = 1;

horizontalSlider1Left.addEventListener("click", () => {
    if(horizontalSlider1SlideNumber > 1) {
        horizontalSlider1Images.style.transform= `translateX(-${(horizontalSlider1SlideNumber-2)*1390}px)`;
        horizontalSlider1SlideNumber--;
    }
});

horizontalSlider1Right.addEventListener("click", () => {
    if(horizontalSlider1SlideNumber < horizontalSlider1Image.length/6 - 1) {
        horizontalSlider1Images.style.transform= `translateX(-${horizontalSlider1SlideNumber*1390}px)`;
        horizontalSlider1SlideNumber++;
    }
});

// Horizontal Slider - 2

const horizontalSlider2Left = document.querySelector(".horizontal-slider2-arrow-left");
const horizontalSlider2Right = document.querySelector(".horizontal-slider2-arrow-right");

const horizontalSlider2Images = document.querySelector(".horizontal-slider2-images");
const horizontalSlider2Image = document.querySelectorAll(".horizontal-slider2-image");

let horizontalSlider2SlideNumber = 1;

horizontalSlider2Left.addEventListener("click", () => {
    if(horizontalSlider2SlideNumber > 1) {
        horizontalSlider2Images.style.transform= `translateX(-${(horizontalSlider2SlideNumber-2)*1390}px)`;
        horizontalSlider2SlideNumber--;
    }
    console.log("slider 2 left");
});

horizontalSlider2Right.addEventListener("click", () => {
    if(horizontalSlider2SlideNumber < horizontalSlider2Image.length/6 - 1) {
        horizontalSlider2Images.style.transform= `translateX(-${horizontalSlider2SlideNumber*1390}px)`;
        horizontalSlider2SlideNumber++;
    }
    console.log("slider 2 right");
});