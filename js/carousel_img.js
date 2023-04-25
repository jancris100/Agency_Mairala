"use strict";
// Select all slides
const slides = document.querySelectorAll(".slide");
const slides2 = document.querySelectorAll(".slide2");
const slides3 = document.querySelectorAll(".slide3");
// loop through slides and set each slides translateX
slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});

slides2.forEach((slide2, indx) => {
  slide2.style.transform = `translateX(${indx * 100}%)`;
});

slides3.forEach((slide3, indx) => {
  slide3.style.transform = `translateX(${indx * 100}%)`;
});
// select next slide button
const nextSlide = document.querySelector(".btn-next");
const nextSlide2 = document.querySelector(".btn-next2");
const nextSlide3 = document.querySelector(".btn-next3");

// current slide counter
let curSlide = 0;
let curSlide2 = 0;
let curSlide3 = 0;
// maximum number of slides
let maxSlide = slides.length - 1;
let maxSlide2 = slides2.length - 1;
let maxSlide3 = slides3.length - 1;


// add event listener and navigation functionality
nextSlide.addEventListener("click", function () {
  // check if current slide is the last and reset current slide
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  //   move slide by -100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});




nextSlide2.addEventListener("click", function () {
  // check if current slide is the last and reset current slide
  if (curSlide2 === maxSlide2) {
    curSlide2 = 0;
  } else {
    curSlide2++;
  }

  //   move slide by -100%
  slides2.forEach((slide2, indx) => {
    slide2.style.transform = `translateX(${100 * (indx - curSlide2)}%)`;
  });
});

nextSlide3.addEventListener("click", function () {
  // check if current slide is the last and reset current slide
  if (curSlide3 === maxSlide3) {
    curSlide3 = 0;
  } else {
    curSlide3++;
  }

  //   move slide by -100%
  slides3.forEach((slide3, indx) => {
    slide3.style.transform = `translateX(${100 * (indx - curSlide3)}%)`;
  });
});

// select next slide button
const prevSlide = document.querySelector(".btn-prev");
const prevSlide2 = document.querySelector(".btn-prev2");
const prevSlide3 = document.querySelector(".btn-prev3");

// add event listener and navigation functionality
prevSlide.addEventListener("click", function () {
  // check if current slide is the first and reset current slide to last
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }

  //   move slide by 100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});

// add event listener and navigation functionality
prevSlide2.addEventListener("click", function () {
  // check if current slide is the first and reset current slide to last
  if (curSlide2 === 0) {
    curSlide2 = maxSlide2;
  } else {
    curSlide2--;
  }

  //   move slide by 100%
  slides2.forEach((slide2, indx) => {
    slide2.style.transform = `translateX(${100 * (indx - curSlide2)}%)`;
  });
});

prevSlide3.addEventListener("click", function () {
  // check if current slide is the first and reset current slide to last
  if (curSlide3 === 0) {
    curSlide3 = maxSlide2;
  } else {
    curSlide3--;
  }

  //   move slide by 100%
  slides3.forEach((slide3, indx) => {
    slide3.style.transform = `translateX(${100 * (indx - curSlide3)}%)`;
  });
});
