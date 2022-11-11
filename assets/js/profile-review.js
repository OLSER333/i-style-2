$(document).ready(function () {
  if (document.querySelectorAll('.profile-review-item').length == 0) {
    return;
  }

  document.querySelectorAll('.review-main-photo .swiper-hidden').forEach(reviewSlider => {
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

  let reviews = document.querySelectorAll('.profile-review-item'),

    addUncoverClass = function (review) {
      let contentBlock = review.querySelector('.review-text');
      let btn = review.querySelector('.review-uncover-button');

      if (btn.classList.contains('uncover-button-visible')) {
        btn.classList.remove('uncover-button-visible');
        contentBlock.classList.remove('review-item-text-shadow');
      }

      let flag = false;

      if (window.innerWidth > 590) {
        flag = contentBlock.clientHeight > 52;
      } else {
        flag = contentBlock.clientHeight > 166;
      }

      if (flag) {
        contentBlock.classList.add('review-item-text-shadow');
        btn.classList.add('uncover-button-visible');
      }
    },

    eventBtnUncover = function (e) {
      e.preventDefault();

      if ($('[data-open-button-class="profile-review-uncover-js"] .review-item').hasClass("review-main-photo")) {
        $('[data-open-button-class="profile-review-uncover-js"] .review-item').removeClass('review-main-photo');
        $('[data-open-button-class="profile-review-uncover-js"] .show-review').removeClass('review-main-photo');
      }

      let clonedReview = $(this).closest('.profile-review-item').clone();

      if ($(clonedReview).hasClass("review-main-photo")) {
        $('[data-open-button-class="profile-review-uncover-js"] .review-item').addClass('review-main-photo');
        $('[data-open-button-class="profile-review-uncover-js"] .show-review').addClass('review-main-photo');
      }

      let title = $(clonedReview).find('.review-body-title-name').html();
      let modelTitle = $('[data-open-button-class="profile-review-uncover-js"] .review-item-title');
      $(modelTitle).html(title);

      let date = $(clonedReview).find('.review-body-title-date').html();
      let modelDate = $('[data-open-button-class="profile-review-uncover-js"] .review-item-date');
      $(modelDate).html(date);

      let stars = $(clonedReview).find('.stars-rating.flex.flex-start');
      let modelStars = $('[data-open-button-class="profile-review-uncover-js"] .review-item-rating');
      $(modelStars).html(stars);
      
      let text = $(clonedReview).find('.review-text').html();
      let modelText = $('[data-open-button-class="profile-review-uncover-js"] .review-item-text');
      $(modelText).html(text);

      let photos = $(clonedReview).find('.swiper-hidden').html();
      let modelswiper = $('[data-open-button-class="profile-review-uncover-js"] .swiper-wrapper');
      $(modelswiper).html(photos);

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
    },

    changeHtmlUncoverBtn = function () {
      for (let i = 0; i < reviews.length; i++) {
        addUncoverClass(reviews[i]);
      }

      let arrBtnUncover = document.querySelectorAll('.profile-review-uncover-js.uncover-button-visible');
      let arrBtnPhoto = document.querySelectorAll('.profile-review-uncover-js.review-main-photo');

      for (let i = 0; i < arrBtnUncover.length; i++) {
        arrBtnUncover[i].removeEventListener('click', eventBtnUncover);
        arrBtnUncover[i].addEventListener('click', eventBtnUncover);
      }

      for (let i = 0; i < arrBtnPhoto.length; i++) {
        arrBtnPhoto[i].removeEventListener('click', eventBtnUncover);
        arrBtnPhoto[i].addEventListener('click', eventBtnUncover);
      }
    }
  
  $(window).resize(function () {
    changeHtmlUncoverBtn();
  });

  changeHtmlUncoverBtn();
});