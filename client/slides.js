'use strict';

module.exports = function (opts) {
  var container = opts.container;
  var slides = container.querySelectorAll('.slide');
  var currentActiveSlide = 0;
  [].forEach.call(slides, function (slide, i) {
    if (i === currentActiveSlide) {
      setActive(slide);
    } else {
      setInactive(slide);
    }
  });

  setTimeout(function () {
    container.classList.add('rendered');
  }, 40);

  function next () {
    setInactive(slides[currentActiveSlide]);
    currentActiveSlide++;
    setTimeout(function () {
      setActive(slides[currentActiveSlide]);
    }, 200);
  }

  function prev () {
    setInactive(slides[currentActiveSlide]);
    currentActiveSlide--;
    setTimeout(function () {
      setActive(slides[currentActiveSlide]);
    }, 200);
  }

  return {
    next: next,
    prev: prev
  };
};

function setActive (slide) {
  if (!slide.style) {
    slide.style = {};
  }
  slide.style.top = 0;
}

function setInactive (slide) {
  var slideInDir = slide.dataset.slideIn;
  if (!slide.style) {
    slide.style = {};
  }
  if (slideInDir === 'up') {
    slide.style.top = '100%';
  } else {
    slide.style.top = '-100%';
  }
}
