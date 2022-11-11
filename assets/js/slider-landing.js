$(document).ready(function () {
  let width = window.innerWidth;
  let slides = createArrSlides('.landing-best-work-card');

  changeHtmlSliderLanding(width);

  $(window).resize(function (e) {
    let width = e.target.innerWidth

    changeHtmlSliderLanding(width);
  });

  $('.current-slide').html(1);
  $('.all-slides').html(slides.length);
});

function changeHtmlSliderLanding(width) {
  if (width <= 1240) {
    $('.landing-best-works .slide-images').attr('data-count', 1);
  } else if (width <= 1490) {
    $('.landing-best-works .slide-images').attr('data-count', 3);
  } else if (width > 1490) {
    $('.landing-best-works .slide-images').attr('data-count', 4);
  }

  $('.landing-best-works .slide-images').attr('data-current-slide', 1);
}

function createArrSlides(selector) {
  slides = [];

  $(selector).each(function (i, value) {
    slides.push(value);
  });

  return slides;
}
