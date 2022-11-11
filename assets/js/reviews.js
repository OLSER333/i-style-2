window.onload = () => {
  let width = window.innerWidth;
  let lastWidth = null;

  if (document.querySelectorAll('.slider-reviews-track').length == 0) {
    return;
  }

  const grid = document.querySelector('.slider-reviews-track');

  let msnry = new Masonry(grid, {
    itemSelector: '.review-item',
    columnWidth: '.review-item',
    gutter: 20,
    transitionDuration: 0
  });

  document.querySelectorAll('.review-with-photo').forEach(reviewSlider => {
    const slider = new Swiper(reviewSlider.querySelector('.swiper'), {
      speed: 400,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      slidesPerView: 'auto'
    });
  });

  let slider = document.querySelector('.slider-reviews'),
  sliderList = slider.querySelector('.slider-reviews-list'),
  sliderTrack = slider.querySelector('.slider-reviews-track'),
  slides = slider.querySelectorAll('.slide-review'),
  slideWidth = slides[0].offsetWidth + 10,
  slideIndex = 0,
  posInit = 0,
  posX1 = 0,
  posX2 = 0,
  posY1 = 0,
  posY2 = 0,
  posFinal = 0,
  isSwipe = false,
  isScroll = false,
  allowSwipe = true,
  transition = true,
  nextTrf = 0,
  prevTrf = 0,
  lastTrf = --slides.length * slideWidth,
  posThreshold = slides[0].offsetWidth * 0.35,
  trfRegExp = /([-0-9.]+(?=px))/,


  getEvent = function () {
    return (event.type.search('touch') !== -1) ? event.touches[0] : event;
  },

  slide = function () {
    if (transition) {
      sliderTrack.style.transition = 'transform .5s';
    }
    sliderTrack.style.transform = `translate3d(-${slideIndex * (slides[0].offsetWidth + 10)}px, 0px, 0px)`;
  },

  swipeStart = function () {
    let evt = getEvent();

    if (allowSwipe) {

      transition = true;

      nextTrf = (slideIndex + 1) * -slideWidth;
      prevTrf = (slideIndex - 1) * -slideWidth;

      posInit = posX1 = evt.clientX;
      posY1 = evt.clientY;

      sliderTrack.style.transition = '';

      document.addEventListener('touchmove', swipeAction);
      document.addEventListener('mousemove', swipeAction);
      document.addEventListener('touchend', swipeEnd);
      document.addEventListener('mouseup', swipeEnd);

      sliderList.classList.remove('grab');
      sliderList.classList.add('grabbing');
    }
  },

  swipeAction = function () {

    let evt = getEvent();
    let style = sliderTrack.style.transform;
    let transform = +style.match(trfRegExp)[0];

    posX2 = posX1 - evt.clientX;
    posX1 = evt.clientX;

    posY2 = posY1 - evt.clientY;
    posY1 = evt.clientY;

    if (!isSwipe && !isScroll) {
      let posY = Math.abs(posY2);
      if (posY > 7 || posX2 === 0) {
        isScroll = true;
        allowSwipe = false;
      } else if (posY < 7) {
        isSwipe = true;
      }
    }

    if (isSwipe) {
      if (slideIndex === 0) {
        if (posInit < posX1) {
          setTransform(transform, 0);
          return;
        } else {
          allowSwipe = true;
        }
      }

      if (slideIndex === --slides.length) {
        if (posInit > posX1) {
          setTransform(transform, lastTrf);
          return;
        } else {
          allowSwipe = true;
        }
      }

      sliderTrack.style.transform = `translate3d(${transform - posX2}px, 0px, 0px)`;
    }
  },

  swipeEnd = function () {
    posFinal = posInit - posX1;

    isScroll = false;
    isSwipe = false;

    document.removeEventListener('touchmove', swipeAction);
    document.removeEventListener('mousemove', swipeAction);
    document.removeEventListener('touchend', swipeEnd);
    document.removeEventListener('mouseup', swipeEnd);

    sliderList.classList.add('grab');
    sliderList.classList.remove('grabbing');

    if (allowSwipe) {
      if (Math.abs(posFinal) > posThreshold) {
        if (posInit < posX1) {
          slideIndex--;
        } else if (posInit > posX1) {
          slideIndex++;
        }
      }

      if (posInit !== posX1) {
        allowSwipe = false;
        slide();
      } else {
        allowSwipe = true;
      }

    } else {
      allowSwipe = true;
    }
  },

  setTransform = function (transform, comapreTransform) {
    if (transform >= comapreTransform) {
      if (transform > comapreTransform) {
        sliderTrack.style.transform = `translate3d(${comapreTransform}px, 0px, 0px)`;
      }
    }
    allowSwipe = false;
  },
    
  changeStateSlider = function (width) {
    if (width > 680) {
      slider.removeAttribute('style');
      sliderTrack.removeAttribute('style');

      document.removeEventListener('touchmove', swipeAction);
      document.removeEventListener('mousemove', swipeAction);
      document.removeEventListener('touchend', swipeEnd);
      document.removeEventListener('mouseup', swipeEnd);

      msnry.layout();
      
    } else if ((lastWidth > 680 || lastWidth == null) && width <= 680) {
      slider.removeAttribute('style');
      sliderTrack.removeAttribute('style');

      sliderTrack.addEventListener('transitionend', () => allowSwipe = true);
      slider.addEventListener('touchstart', swipeStart);
      slider.addEventListener('mousedown', swipeStart);

      slide();
    }

    lastWidth = width;
  },

  addUncoverClass = function (review) {
    let contentBlock = review.querySelector('.review-item-text');
    let flag = false;

    if (window.innerWidth > 680) {
      flag = contentBlock.clientHeight > 89;
    } else {
      flag = contentBlock.clientHeight > 110;
    }

    if (flag) {
      contentBlock.classList.add('review-item-text-shadow');
      review.querySelector('.review-uncover-button').classList.add('uncover-button-visible');
    }
  }
      
  addEventUnvocerReview = function (uncoverBtn) {
    uncoverBtn.addEventListener('click', function (e) {
      e.preventDefault();

      if ($('[data-open-button-class="review-uncover-js"] .review-item').hasClass("review-with-photo")) {
        $('[data-open-button-class="review-uncover-js"] .review-item').removeClass('review-with-photo');
        $('[data-open-button-class="review-uncover-js"] .show-review').removeClass('review-with-photo');
      }

      let clonedReview = $(this).closest('.review-item').clone();

      if ($(clonedReview).hasClass("review-with-photo")) {
        $('[data-open-button-class="review-uncover-js"] .review-item').addClass('review-with-photo');
        $('[data-open-button-class="review-uncover-js"] .show-review').addClass('review-with-photo');
      }

      let title = $(clonedReview).find('.review-item-title').html();
      let modelTitle = $('[data-open-button-class="review-uncover-js"] .review-item-title');
      $(modelTitle).html(title);

      let date = $(clonedReview).find('.review-item-date').html();
      let modelDate = $('[data-open-button-class="review-uncover-js"] .review-item-date');
      $(modelDate).html(date);

      let stars = $(clonedReview).find('.stars-rating.flex.flex-start');
      let modelStars = $('[data-open-button-class="review-uncover-js"] .review-item-rating');
      $(modelStars).html(stars);

      let text = $(clonedReview).find('.review-item-text').html();
      let modelText = $('[data-open-button-class="review-uncover-js"] .review-item-text');
      $(modelText).html(text);

      let photos = $(clonedReview).find('.swiper-wrapper').html();
      let modelswiper = $('[data-open-button-class="review-uncover-js"] .swiper-wrapper');
      $(modelswiper).html(photos);

      let slidesModal = document.querySelectorAll('[data-open-button-class="review-uncover-js"] .swiper-slide');
      for (let i = 0; i < slidesModal.length; i++) {
        slidesModal[i].classList.remove('review-photo-container');
      }

      const slider = new Swiper('.topup-content .swiper', {
        speed: 400,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        slidesPerView: 'auto'
      });
    });
  }
    
  for (let i = 0; i < slides.length; i++) {
    addUncoverClass(slides[i]);
  }

  let arrBtnUncover = document.querySelectorAll('.uncover-button-visible');

  for (let i = 0; i < arrBtnUncover.length; i++) {
    addEventUnvocerReview(arrBtnUncover[i]);
  }

  window.onresize = (e) => {
    let width = e.target.innerWidth;

    let changeHTML = true;
    let oldHieght = 0;
    
    const fn = () => {
      let newHieght = 0;
      let marginHeight = slides.length * 20;

      for (let i = 0; i < slides.length; i++) {
        newHieght += slides[i].getBoundingClientRect().height;
      }

      newHieght += marginHeight;
      newHieght = Math.round(newHieght);

      if (oldHieght == newHieght) {
        changeHTML = false;
      }
      
      oldHieght = newHieght;
    };

    if (width > 680) {
      const intervalIdClear = setInterval( () => {
        fn();

        if (!changeHTML) { 
          changeStateSlider(width);
          clearInterval(intervalIdClear);
        }
      }, 50);
    }

    changeStateSlider(width);
  }

  changeStateSlider(width);
}